"use client"
import Link from "next/link";
import Image from "next/image";
import basket from "../../../public/images/basket.png"
import React from "react";
import { useState,useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {deleteCart, DeleteCartItem,updateQuantity} from "@/util/serverActions";

export function Cart({cart,DeleteCart,DeleteCartItem,updateQuantity}) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { toast } = useToast()
  console.log(cart);
  const DeleteHallCart = () => {
      DeleteCart();
  };
    const DeleteItem = (id) => {
        DeleteCartItem(id);
    };

  let totalPrice;

    const increaseQty = (cartItemId,productId) => {
        let q = 0;
        const updatedItems = cart.items.map(item => {
            if (item.productId === productId) {
                q = item.quantity + 1;
                return item.quantity + 1;
            }
            return -1;
        });
        console.log(updatedItems);

        updateQuantity(cartItemId, q);
    };

// Decrease the Quantity
    const decreaseQty = (cartItemId,productId) => {
        const updatedItems = cart?.items?.map(item => {
            if (item?.productId === productId && item?.quantity > 1) {
                return { ...item, quantity: item?.quantity - 1 };
            }
            return item;
        });

        updateQuantity(cartItemId, updatedItems);
    };

  let total = 0;
  return (
    <section className="pt-3 relative" >
      <div className="hidden lg:grid grid-cols-2 py-3 ">
          <div className="font-normal text-xl leading-8 text-gray-500 mx-auto">المنتج</div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
              <span className="w-full max-w-[260px] text-center">سعر الوحدة</span>
              <span className="w-full max-w-[260px] text-center ml-2">الكمية</span>
              <span className="w-full max-w-[260px] text-right ">الإجمالي</span>
          </p>
      </div>
      {cart && (
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          {cart?.items?.map((item) => (
            <div key={item?.productId}>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-3">
                <div
                    className="flex items-center flex-col min-[500px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                  <div className="img-box">
                    <Link href={`/products/${item?.productId}`}>
                      <Image src={item?.product?.image?.length > 0 ? item?.product?.image[0] : basket} alt="perfume bottle image" className="xl:w-[140px] xl:h-[100px] h-28 " width={200} height={200} />
                    </Link>
                  </div>
                    <div className="pro-data w-full max-w-sm ">
                        <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{item?.product?.name}</h5>
                         <p
                        className="font-normal text-sm leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center bg-gray-50  px-2  border rounded-full w-fit">
                        {item?.product?.storeName}</p>
                        <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center"></h6>
                    </div>
                </div>
                <div
                    className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                     {item?.product?.price} دج</h6>
                    <div className="flex items-center w-full mx-auto justify-center">
                        <button
                          className="group rounded-r-full px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          onClick={()=> updateQuantity(item?.productId,-1)}
                        >
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" stroke-linecap="round" />
                            </svg>
                        </button>
                        <input type="text"
                            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[100px] min-w-[70px] placeholder:text-gray-900 py-[5px] text-center bg-transparent"
                            value={item?.quantity ?? 1}/>
                        <button
                          className="group rounded-l-full px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          onClick={()=> updateQuantity(item?.productId,1)}
                        >
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                    strokeLinecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                            </svg>
                        </button>
                      
                    </div>
                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">{item?.product?.price * item?.quantity} دج</h6>
                  

                  <AlertDialog  className="bg-red-50 rounded-full p-2">
                    <AlertDialogTrigger>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-trash-fill" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                        </svg>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader className="mx-auto">
                        <AlertDialogTitle>هل أنت متأكد من حذف المنتج؟</AlertDialogTitle>
                        <AlertDialogDescription>
                          سيتم حذف هذا المنتج من السلة الخاصة بك.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="mx-auto">
                        <AlertDialogCancel>إلغاء</AlertDialogCancel>
                        <AlertDialogAction onClick={()=> DeleteItem(item?.cartItemId)} className="bg-red-600">حذف</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
          </div>
          </div>
            ))}
        </div>
      )}
      <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                  <div className="flex items-center justify-between w-full mb-6">
                      <p className="font-normal text-xl leading-8 text-gray-400">السعر الإجمالي</p>
                      <h6 className="font-semibold text-xl leading-8 text-gray-900"> {cart?.total} دج</h6>
                  </div>
      </div>
      <div className="flex justify-center">
        <div className="bay flex justify-center">
          <Link href={'/orders/order-info'} className={`m-5 relative py-3 flex justify-center px-10 bg-indigo-600 text-white text-base font-bold nded-full overflow-hidden  rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`} > متابعة الطلبية  </Link>
        </div>
        <AlertDialog>
        <AlertDialogTrigger >
          <div className="bay mx-auto flex justify-center">
            <button className={`m-5 relative py-3 flex justify-center px-10 bg-red-600 text-white text-base font-bold nded-full overflow-hidden  rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}>
              إزالة الكل
            </button>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle> هل أنت متأكد من إزالة جميع المنتجات ؟ </AlertDialogTitle>
            <AlertDialogDescription>
            سيتم  إزالة جميع المنتجات من السلة...
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction onClick={()=> DeleteHallCart() }  >إزالة</AlertDialogAction>
        </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}
export default Cart;