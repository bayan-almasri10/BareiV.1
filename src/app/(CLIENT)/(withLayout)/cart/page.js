import React from 'react';
import EmptyCart from "@/components/EmptyPage/EmptyCart";
import Cart from "@/components/Cart/Cart";
import "./globals.css";
import {deleteCartItem, deleteCart, getCart, updateQuantity} from "@/util/serverActions";

 async function Basket() {
    const cart = await getCart();
    console.log(cart)

  return (
    <div className="container my-32">
        <div className="border-2 rounded-lg shadow-lg  ">
            <div className="flex flex-col border-b border-fuchsia-800 mb-4 mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                     className="bi bi-cart2 mx-auto mt-3 text-fuchsia-800"
                     viewBox="0 0 16 16">
                    <path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                <h3 className="mx-5 text-4xl font-thin text-center p-3 text-fuchsia-800">السلة</h3>
            </div>

            <div className="border-1 rounded-lg m-2 p-2  shadow-sm">
                {cart?.items?.length > 0 ?
                    <div>
                        <h3 className="mx-5 text-xl font-thin text-center p-3 my-auto  bg-slate-100 rounded-xl">لديك <span
                            className="text-red-400">{cart?.items?.length}</span> من المنتجات في السلة </h3>
                        <Cart cart={cart} DeleteCart={deleteCart} DeleteCartItem={deleteCartItem} updateQuantity={updateQuantity} />
                    </div>
                    : <EmptyCart/>}
            </div>
        </div>
    </div>
  );
}

export default Basket;