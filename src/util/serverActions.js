"use server"

import { cookies } from 'next/headers';
export const getProducts = async (page = 1, pageSize = 15) => {
    "use server"
    try {
        const token = cookies().get("token").value;
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/product?page=${page}&page_size=${pageSize}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return { products: [], total: 0 };
    }
}

///////////////////////////////////////////////////////////

    export const getProductsItem = async (id) => {
        "use server"
        try {
            const token = cookies().get("token").value;
            const Item = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }

            );
            const data = await Item.json();
            return data;
        } catch (error) {
            console.error('there was an error');
            return [];
        }
    }

    ////////////////////////////////////////////////////////
        /////////////////////////////////////////////
            ////////////////////////////////////
                //////////////////////////
                    /////////////////
                        ////////
export async function postFavorite(productId) {
    "use server"

    const token = cookies().get("token").value;
    await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/favorite`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ productId })
        }
    );
}
////////////////////////////////////////////////////////////////////

export async function getFavorite() {
    'use server';
    const token = cookies().get("token").value;
    console.log("token", token);
    const favorite = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/favorite`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    );
    if (favorite.status === 200) {
        const responseData = await favorite.json();
        console.log(responseData);
        return responseData;
    } else {
        console.error('Request failed with status:', favorite.status);
        return null;
    }
}
//////////////////////////////////////////////////////////
export const deleteFavorite = async () => {
    "use server"

    try {
        const token = cookies().get("token").value;
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/favorite`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({})
            }
        );

        if (response.ok) {
            console.log('favoeite deleted successfully ');
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    } catch (error) {
        console.error(error);
        return {};
    }
}
    export const deleteFavoriteItem = async (id) => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/favorite`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({productId:id })
                }
            );

            if (response.ok) {
                console.log('favoeite item deleted successfully ');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error(error);
            return {};
        }
    }
    /////////////////////////////////////////////////////////////

    export async function getLengthFavorite() {
        'use server';
        const token = cookies().get("token").value;
        const favoriteLength = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/favorite/length`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        if (favoriteLength.status === 200) {
            const responseData = await favoriteLength.json();
            console.log(responseData);
            return responseData;
        } else {
            console.error('Request failed with status:', favoriteLength.status);
            return null;
        }
    }
////////////////////////////////////////////////////////
    /////////////////////////////////////////////
        ////////////////////////////////////
            //////////////////////////
                /////////////////
                    ////////
export async function postCart(productId) {
    "use server"

    const token = cookies().get("token").value
    console.log(token)
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ productId, quantity: 1 })
        }
    ).then(res => res.json());
    console.log(res)
}
//////////////////////////////////////////////////////////

export async function getCart() {
    'use server';
    const token = cookies().get("token").value;
    console.log("token", token);
    const cart = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    );
    if (cart.status === 200) {
        const responseData = await cart.json();
        console.log(responseData);
        return responseData;
    } else {
        console.error('Request failed with status:', cart.status);
        return null;
    }
}
///////////////////////////////////////////////////////////////
export const deleteCart = async () => {
    "use server"

    try {
        const token = cookies().get("token").value;
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/cart`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({})

            }
        );

        if (response.ok) {
            console.log('cart deleted successfully');
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    } catch (error) {
        console.error(error);
        return {};
    }
}
///////////////////////////////////////////////////////////////
export const deleteCartItem = async (cartItemId) => {
    "use server"

    try {
        const token = cookies().get("token").value;
        console.log(cartItemId)
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/cart`,
            {
                method: 'DELETE',
                cors: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({cartItemId} )
            }
        );

        if (response.statusCode === 200) {
            console.log(await response.json());
            console.log('cart item deleted successfully');
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    } catch (error) {
        console.error(error);
        return {};
    }
}

/////////////////////////////////////////////////////////////
    export async function getLengthCart() {
        'use server';
        const token = cookies().get("token").value;
        const CartLength = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/cart/length`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        if (CartLength.status === 200) {
            const responseData = await CartLength.json();
            console.log(responseData);
            return responseData;
        } else {
            console.error('Request failed with status:', CartLength.status);
            return null;
        }
    }
/////////////////////////////////////////////////////////////
   export const updateQuantity = async (productId, newQuantity) => {
        try {
            const token = cookies().get("token").value;
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/cart`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ 'productId': productId , 'quantity': newQuantity })
                }
            );

            if (response.ok) {
                console.log('Quantity updated successfully');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error(error);
        }
    };
    ////////////////////////////////////////////////////////
        /////////////////////////////////////////////
            ////////////////////////////////////
                //////////////////////////
                    /////////////////
                        ////////
    export async function getSearch(q) {
        'use server';
        const token = cookies().get("token").value;
        // console.log('q', q);
        const search = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/search?q=${q}&page=1&page_size=24`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        // console.log(search.status)
        if (search.status === 200) {
            const responseData = await search.json();
            // console.log('s ',responseData);
            return responseData;
        } else {
            console.error('Request failed with status:', search.status);
            return null;
        }
    }
    ////////////////////////////////////////////////////////
        /////////////////////////////////////////////
            ////////////////////////////////////
                //////////////////////////
                    /////////////////
                        ////////
    export async function getSearchByCategory(q) {
        'use server';
        const token = cookies().get("token").value;
        // console.log('q', q);
        const searchByCategory = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/search/category?category=${q} `,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        // console.log(search.status)
        if (searchByCategory.status === 200) {
            const responseData = await searchByCategory.json();
            // console.log('s ',responseData);
            return responseData;
        } else {
            console.error('Request failed with status:', searchByCategory.status);
            return null;
        }
    }
    ////////////////////////////////////////////////////////
        /////////////////////////////////////////////
            ////////////////////////////////////
                //////////////////////////
                    /////////////////
                        ////////
    export async function getOrders() {
        'use server';
        const token = cookies().get("token").value;
        console.log("token", token);
        const Order = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/order`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        if (Order.status === 200) {
            const responseData = await Order.json();
            console.log(responseData);
            return responseData;
        } else {
            console.error('Request failed with status:', Order.status);
            return null;
        }
    }
    ////////////////////////////////////////////////////////////////////
    export async function getOrderDetails(id) {
        'use server';
        const token = cookies().get("token").value;
        const OrderDetails = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/order/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        if (OrderDetails.status === 200) {
            const responseData = await OrderDetails.json();
            console.log(responseData);
            return responseData;
        } else {
            console.error('Request failed with status:', OrderDetails.status);
            return null;
        }
    }
    ////////////////////////////////////////////////////////////////////
    export async function postOrder(cartId,addressId) {
        "use server"

        const token = cookies().get("token").value
        console.log(token)
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/order`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ cartId , addressId})
            }
        ).then(res => res.json());
        console.log("order",res)
    }
    ////////////////////////////////////////////////////////////////////////
    export const deleteOrder = async () => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/cart`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({})

                }
            );

            if (response.ok) {
                console.log('cart deleted successfully');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error(error);
            return {};
        }
    }
    ///////////////////////////////////////////////////////////
        /////////////////////////////////////////////////
            ///////////////////////////////////////
                ///////////////////////////////
                    //////////////////////
                        ////////////
    export async function getAddress() {
        'use server';
        const token = cookies().get("token").value;
        console.log("token", token);
        const address = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/address`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        if (address.status === 200) {
            const responseData = await address.json();
            console.log(responseData);
            return responseData;
        } else {
            console.error('Request failed with status:', address.status);
            return null;
        }
    }
    ////////////////////////////////////////////////////////////////////
    export async function postAddress(address,city,state,primaryPhone,secondaryPhone) {
        "use server"

        const token = cookies().get("token").value
        console.log(token)
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/address`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({address,city,state,primaryPhone,secondaryPhone })
            }
        ).then(res => res.json());
        console.log(res)
    }
    ////////////////////////////////////////////////////////////////////////
    export const deleteAddress = async (addressid) => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/address`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({addressid})
                }
            );

            if (response.ok) {
                console.log('cart deleted successfully');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error(error);
            return {};
        }
    }
    //////////////////////////////////////////////////////////////////

    export async function putAddress(address, city, state, primaryPhone, secondaryPhone, id) {
        try {
            const token = cookies().get("token").value;
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/address/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({address,city,state,primaryPhone,secondaryPhone})
                }
            );
            if (res) {
                console.log('address updated successfully');
            } else {
                const errorData = await res.json();
                console.log('address updated successfully');

                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error(error);
            return {};
        }
    }

    ////////////////////////////////////////////////////////////
    export const getCategory = async () => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const category = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/category`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const data = await category.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    ///////////////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////
    //////////////////////
    ////////////
    export const getProfileInfo = async () => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const ProfileInfo = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/profile`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const data = await ProfileInfo.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
/////////////////////////////////////////////////////////////////
    export async function putProfileInfo({ firstName, lastName, email, phone, city, state, gender, dateBirth }) {
        try {
            const token = cookies().get("token").value;
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/profile`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ firstName, lastName, email, phone, city, state, gender, dateBirth })
                }
            );
            if (res.ok) {
                console.log('profile deleted successfully');
            } else {
                const errorData = await res.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error(error);
            return {};
        }
    }
    ///////////////////////////////////////////////////////////////
    export const deleteProfile = async () => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/profile`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({})
                }
            );

            if (response.ok) {
                console.log('profile deleted successfully');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error(error);
            return {};
        }
    }
////////////////////////////////////////////////////////////
       export const storeProfileInfo = async (id) => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const storeProfileInfo = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/profile/store/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const data = await storeProfileInfo.json();
            console.log(data)
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
}
/////////////////////////////////////////////////////////////
       export const storeProfileProducts = async (id) => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const storeProfileProducts = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/product/store/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const data = await storeProfileProducts.json();
            console.log(data)
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    export async function logout() {
        cookies().delete("token")
    }
    //////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
            ///////////////////////////////////////////////
                ///////////////////////////////////////
                    ///////////////////////////////
                        //////////////////////


    export async function changePassword(oldPassword,newPassword,confirmPassword) {
        "use server"
        console.log(oldPassword,newPassword,confirmPassword)
        const token = cookies().get("token").value
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/reset-password`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({oldPassword,newPassword,confirmPassword})
            }
        ).then(res => res.json());
        console.log(res)
    }

        //////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////
                ///////////////////////////////////////////////
                    ///////////////////////////////////////
                        ///////////////////////////////
                            //////////////////////
                            
    export const followingShops = async () => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const followingShops = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/favorite/store`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const data = await followingShops.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
/////////////////////////////////////////////////////////////////
    export async function follow(storeId) {
        "use server"
        const token = cookies().get("token").value
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/favorite/store`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({storeId})
            }
        ).then(res => res.json());
        console.log(res)
    }
///////////////////////////////////////////////////////////////////////////
    export const unFollow = async (storeId) => {
        "use server"
            const token = cookies().get("token").value;
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/favorite/store`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({storeId})
                }
            ).then(res => res.json());
            console.log(res)  
}
/////////////////////////////////////////////////////////////
    export const GetFeedback = async (productId) => {
        "use server"

        try {
            const token = cookies().get("token").value;
            const feedback = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/product/review/${productId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const data = await feedback.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
/////////////////////////////////////////////////////////////////
    export async function postFeedback(productId, comment, rating) {
        "use server"
        const token = cookies().get("token").value
        // console.log(JSON.stringify({productId, comment, rating}))
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/product/review`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({productId: parseInt(productId), comment, rating: parseInt(rating)})
            }
        )
        console.log(res.status)
    }


    export const getFavoriteStores = async () => {
        "use server"
        try {
            const token = cookies().get("token").value;
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/favorite/store`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const data = await response.json();
            console.log("stores ")
            console.log(data.favorites)
            return data.favorites;
        } catch (error) {
            console.error(error);
            return { products: [], total: 0 };
        }
    }