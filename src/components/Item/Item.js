"use client";

import Image from "next/image";
import Basket from "../../../public/images/basket.png"
import { useState ,useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useReducer } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Item({ id, title, price, image, postFavorite ,postCart,storeImages,storeName,storeId,isLiked ,inCart}) {

  const { toast } = useToast();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [cartButtonText, setCartButtonText] = useState(inCart ? 'تم إضافة المنتج' : 'اضف الى السلة');
  const [favButtonText, setFavButtonText] = useState(isLiked ? <FavoriteIcon/> : <FavoriteBorderIcon className="text-[23px]"/>);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [reducerValue]);

  const addToFavHandler = async () => {
    postFavorite(id);
  };

   const addFav = async () =>{
    await addToFavHandler();
     setFavButtonText(<FavoriteIcon/>);
     forceUpdate();
    toast({
      title: "تم إضافة المنتج للمفضلة",
      description: new Date().toLocaleTimeString(),
    });
  }

  const addToCartHandler = async () => {
    postCart(id);
  };

  function addCart() {
    addToCartHandler();
    setCartButtonText('تم إضافة المنتج');
    forceUpdate();
    toast({
      title: "تم إضافة المنتج للسلة",
      description: currentTime.toLocaleTimeString(),
    })
  }
    return (
      <div className="flex flex-col items-center justify-center  max-w-sm mx-auto mb-3 ">
        <div className="relative border border-solid border-gray-200 shadow-md w-[14rem]  h-[22rem] rounded-2xl transition-all ease-in duration-500 ">
          <div className="flex m-1 bg-slate-50 px-1  rounded-xl">
            <Avatar>
              <AvatarFallback>
                <Image
                  src={storeImages}
                  width={50}
                  height={50}
                  className="transition ease-in-out m-auto rounded-2xl h-[3rem] w-[3rem]"
                  alt="product"
                />
              </AvatarFallback>
            </Avatar>
            <Link href={`/store-profile/id=${storeId}&store=${storeName}`} className="my-auto no-underline text-black">
              <p className="mr-3 text-sm"> {storeName} </p>
            </Link>
          </div>

          <div className="block overflow-hidden">
            <Image
              src={image}
              width={100}
              height={100}
              className="transition ease-in-out m-auto rounded-2xl h-[10rem] w-[12rem] "
              alt="product"
            />
          </div>

          <div className="p-4">
            <h4 className="font-semibold text-xl text-gray-900 mb-2 capitalize transition-all h-8 overflow-hidden duration-500 "> {title} </h4>
            <p className="text-md font-extrabold text-green-900 transition-all duration-500 leading-5 mb-3">{price}  <span className="font-extrabold ">دج</span>  </p>
            <div className="flex">
              <button className="bg-fuchsia-700 shadow-sm rounded-full py-2 px-3 text-xs text-white font-semibold m-auto"
                onClick={addCart}
              >
                {cartButtonText}
              </button>

              <div className="fav bg-red-500 my-auto p-[1px] rounded-full  ">
                <button className="no-underline text-white" onClick={addFav}>
                  {favButtonText}
                </button>
               
              </div>
              <div className="eye p-1 m-1 rounded-full bg-blue-500">
                <Link
                  href={`/products/${id}`}
                  key={id}
                  className="no-underline text-black font-bold text-sm pb-2 "
                >
                  <HoverCard>
                    <HoverCardTrigger>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                      </svg>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit text-center p-2">
                      شاهد تفاصيل المنتوج من هنا
                    </HoverCardContent>
                  </HoverCard>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }