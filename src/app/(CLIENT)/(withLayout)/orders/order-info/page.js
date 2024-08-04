"use server"
import OrderPage from "@/components/Order/OrderPage";
import {deleteAddress, getAddress, postAddress, getCart, postOrder} from "@/util/serverActions"

 const Order = async () => {
    const displayCart = await getCart();
    const  displayAddresses = await getAddress();

    return (
        <>
            <div className="favorite container rounded-md shadow-lg my-32">
                <OrderPage displayAddresses={displayAddresses} postAddress={postAddress} deleteAddress={deleteAddress} displayCart={displayCart} postOrder={postOrder}/>
            </div>
        </>
    );
}
export default Order;