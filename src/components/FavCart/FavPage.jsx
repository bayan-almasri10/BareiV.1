"use client"
import Image from "next/image";
import Link from "next/link";
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
} from "@/components/ui/alert-dialog";
import {deleteFavorite, deleteFavoriteItem} from "@/util/serverActions";


function FavPage ({fav ,postCart ,deleteFavorite,deleteFavoriteItem }){

    const { toast } = useToast()
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);

    const addToCartHandler = async (id, name, price, image, stock,seller, quantity ) => {
      await addItemToCart({id, name, price, image, stock,seller, quantity });
    };

    const handleAddAllToCart = ({id, name, price, image, stock, seller, quantity}) => {
            addItemToCart({
                    id,
                    name,
                    price,
                    image,
                    stock,
                    seller,
                    quantity
                });
    };
    const addItem = async (id) =>{
        postCart(id)
        toast({
            title: "تم إضافة المنتج للسلة",
            description:   currentTime.toLocaleTimeString(),
        })
    }

    const addAllItem = async () =>{
        fav.map((item) => postCart(item.productId))
        toast({
            title: "تم إضافة جميع المنتجات للسلة",
            description:   currentTime.toLocaleTimeString(),
        })
    }


    const DeleteFav =  () => {
        deleteFavorite();
     };

    const DeleteFavItem =  (id) => {
        deleteFavoriteItem(id);
    };
    return (
    <div>
      <h3 className="mx-5 text-xl font-thin text-center p-3 my-auto  bg-slate-100 rounded-xl">لديك <span className="text-red-400"> {fav?.length} </span>من المنتجات في المفضلة</h3>
      <div className="pt-0 relative" >
        <div className="hidden lg:grid grid-cols-2 py-6 ">
          <div className="font-normal text-xl leading-8 text-gray-500 text-right mr-24">المنتج</div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">سعر الوحدة</span>
            <span className="w-full max-w-[260px] text-center ml-2">تفاصيل المنتج</span>
            <span className="w-full max-w-[200px] text-right "></span>
          </p>
        </div>
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            {fav?.map((favItem) => (
              <div key={favItem.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-3">
                  <div
                    className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box">
                      <Link href={`/products/${favItem.product.id}`}>
                          <Image src={favItem.product.image.length > 0 ? favItem.product.image[0] : basket} alt="perfume bottle image" className="xl:w-[140px] h-28" width={200} height={200} />
                      </Link>
                    </div>
                    <div className="pro-data w-full max-w-sm ">
                      <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{favItem.product.name}</h5>
                      <p
                        className="font-normal text-sm leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center bg-gray-50  px-2  border rounded-full w-fit">
                        {favItem.product.store.storeName}</p>
                      <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">{favItem?.product?.stock}</h6>
                    </div>
                  </div>
                          
                  <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 className="font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                      {favItem.product.price} دج</h6>
                    <h6 className="font-manrope font-normal hover:underline mx-5 text-xl text-blue-700 leading-9 w-full max-w-[176px] text-center">
                      <Link href={`/products/${favItem.product.id}`}> تفاصيل </Link>
                    </h6>

                    <AlertDialog>
                      <AlertDialogTrigger className="bg-green-50 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z" />
                        </svg>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader className="mx-auto">
                          <AlertDialogTitle > هل أنت متأكد من إضافة المنتج للسلة؟ </AlertDialogTitle>
                          <AlertDialogDescription>
                            سيتم إضافة هذا المنتج للسلة...
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="mx-auto">
                          <AlertDialogCancel>إلغاء</AlertDialogCancel>
                            <AlertDialogAction onClick={() => addItem(favItem.productId)} className="bg-green-600">إضافة</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
    
                    <AlertDialog>
                      <AlertDialogTrigger className="bg-red-50 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-trash-fill " viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>هل أنت متأكد من حذف المنتج؟</AlertDialogTitle>
                          <AlertDialogDescription>
                            سيتم حذف هذا المنتج من المفضلة الخاصة بك.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>إلغاء</AlertDialogCancel>
                          <AlertDialogAction onClick={() => DeleteFavItem(favItem.productId)} className="bg-red-600">حذف</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      
      <div className="flex justify-center">
        <AlertDialog>
          <AlertDialogTrigger >
            <div className="bay mx-auto flex justify-center">
              <button className={`m-5 relative py-3 flex justify-center px-10 bg-green-600 text-white text-base font-bold nded-full overflow-hidden  rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}>
                إضافة الكل للسلة
              </button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle> هل أنت متأكد من إضافة جميع المنتجات ؟ </AlertDialogTitle>
              <AlertDialogDescription>
                سيتم  إضافة جميع المنتجات من السلة...
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>إلغاء</AlertDialogCancel>
              <AlertDialogAction onClick={ ()=>addAllItem() }
              >إضافة</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

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
              <AlertDialogAction onClick={()=> DeleteFav() }>إزالة</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
export default FavPage;