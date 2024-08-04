"use server";
import { cookies } from "next/headers";

// products  تمت

export async function getProducts(){
    "use server"

    try {
        const token = cookies().get("token").value;
        const products = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/products?page=1&page_size=10`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        const data = await products.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

 export async function postProducte(formData){
  'use server';
  const token = cookies().get('token').value;

  try {
    console.log("Sending data:", formData);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      const responseText = await response.text();
      console.error("Error text:", responseText);
      //throw new Error(`Server error: ${response.status} - ${responseText}`);
    }
  
    console.log("Response status:", response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting product:", error);
    throw error;
  }
  
};
// products

// AccountSettings  تمت
export async function putAccountSettings(firstName,lastName,email,phone,dateBirth,gender,state,city){
  'use server'
  const token = cookies().get('token').value;
  console.log(token)
  console.log(firstName,lastName,email,phone,dateBirth,gender,state,city)
      const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`,{
          method:'PUT',
       //   mode: 'no-cors',
          body: JSON.stringify({
              firstName: `${firstName}`,
              lastName: `${lastName}`,
              email: `${email}`,
              phone: phone,
              dateBirth: dateBirth,
              gender: parseInt(gender),
              state: `${state}`,
              city: `${city}`, 
          }),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
      });
      const res = await data.json();
      console.log(res);
  };

 export async function getAccountSettings() {
    "use server";
  
    try {
      const tokenCookie = cookies().get("token");
      if (!tokenCookie) {
        throw new Error("No token found in cookies");
      }
  
      const token = tokenCookie.value;
  
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
  
    } catch (error) {
      console.error("Error fetching account settings:", error);
      return null; 
    }
  };

// AccountSettings

// Category تمت
export async function getCategory () {
  "use server";

  try {
    const tokenCookie = cookies().get("token");
    if (!tokenCookie) {
      throw new Error("No token found in cookies");
    }

    const token = tokenCookie.value;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/category`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching account settings:", error);
    return null; 
  }
};

export async function getSubCategory() {
  try {
    const token = cookies().get("token").value;


    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/subcategory`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
      }
    );
    const data = await response.json();
   // console.log(data)
    return data;

  } catch (error) {
    console.error("Error fetching subcategories:", error); 
    return null; 
  }
};
//  getCategory

// StoreSettings     تمت
export async function putStoreSettings(formData){
  'use server'
  const token = cookies().get('token').value;
  try {
    console.log("Sending data:", formData);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/store`, {
      method: 'PUT',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    });

    if (!response.ok) {
      const responseText = await response.text(); 
      console.error("Error text:", responseText);
     // throw new Error(`Server error: ${response.status} - ${responseText}`);
    }
    console.log(response.status)
    const data = await response.json();
    console.log(data)
    console.log("Response data:", data); // سجل البيانات التي تم الحصول عليها من الخادم
    return data;
  } catch (error) {
    console.error("Error posting product:", error); // سجل الخطأ
    throw error;
  }
};

export async function getStoreSettings()  {
  "use server"

  try {
      const token = cookies().get("token").value;
      const products = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/profile/store`,
          {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              }
          }
      );
      const data = await products.json();
     // console.log(data)
      return data;
  } catch (error) {
      console.error(error);
      return [];
  }
};

export async function deleteProfile(){
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
// StoreSettings 

// Orders  تمت 
export async function getOrders(){
  try {
    const token = cookies().get("token").value;
    const ordersResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/store-orders`, // تحقق من أن هذا المسار صحيح
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    const data = await ordersResponse.json();
    console.log(data);
    if (!ordersResponse.ok) {
      throw new Error('Failed to fetch orders');
    }

    return data; 
  } catch (error) {
    console.error("Error fetching orders:", error);
    return { orders: [] };
  }
};

export const getOrder = async (id) => {
  try {
    const token = cookies().get("token").value;
    const ordersResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/store-orders/${id}`, // تحقق من أن هذا المسار صحيح
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    const data = await ordersResponse.json();
    console.log(data);
    if (!ordersResponse.ok) {
      throw new Error('Failed to fetch orders');
    }

    return data; 
  } catch (error) {
    console.error("Error fetching orders:", error);
    return { orders: [] };
  }
};
// Orders
export async function logout() {
  cookies().delete("token")
}

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
export async function getProduct(id){
  try {
    const token = cookies().get("token").value;
    const productResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`,     
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    const data = await productResponse.json();
   // console.log(data);
    return data; 
  }  catch (error) {
    console.error(error);
    return [];
}
};

export async function putModifyProduct(id ,formData){
  'use server'
  const token = cookies().get('token').value;
  try {
    console.log("Sending data:", formData);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`, {
      method: 'PUT',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    });

    if (!response.ok) {
      const responseText = await response.text(); 
      console.error("Error text:", responseText);
    }
    console.log(response.status)
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error posting product:", error); 
    throw error;
  }
};

export async function deleteProduct(productId){
  "use server"
  try {
      const token = cookies().get("token").value;
      const response = await fetch
        (`${process.env.NEXT_PUBLIC_API_URL}/api/product`,
          {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                productId: parseInt(productId),
              })
          }
      );
console.log(productId)
      if (response.ok) {
          console.log('product deleted successfully');
      } else {
          const errorData = await response.json();
          throw new Error(errorData.message);
      }
  } catch (error) {
      console.error(error);
      return {};
  }
}

export async function getTypeComplaint(){
  try {
    const token = cookies().get("token").value;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/complaint/types`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
      }
    );
    const data = await response.json();
    console.log(data)
    return data;

  } catch (error) {
    console.error("Error fetching subcategories:", error); 
    return null; 
  }
};

export async function postComplaint(complaint,type){
  'use server'
  const token = cookies().get('token').value;
  console.log(complaint,type)
      const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/complaint`,{
          method:'POST',
          body: JSON.stringify({
              complaint: `${complaint}`,
              type: parseInt(type),
             
          }),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
      });
      const res = await data.json();
      if (data.ok) {
        console.log("Complaint posted successfully!");
      } else {
        console.error("Failed to post complaint:", res);
      }
      
  };

export async function putOrder(accepted ,orderId) {
  'use server';
  const token = cookies().get('token').value;
  console.log(accepted ,orderId);
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/order/${orderId}`, {
    method: 'PUT',
    body: JSON.stringify({
      accepted: accepted,   
      //orderId: parseInt(orderId), 
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const res = await response.json();
  if (response.ok) {
    console.log("Order updated successfully!");
  } else {
    console.error("Failed to update order:", res);
  }
};