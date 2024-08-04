"use server";

import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel, DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {getLengthCart, getLengthFavorite} from "@/util/serverActions";
import React from "react";
import Search from "@/components/Navbar/SearchInput";
import nookies from "nookies";

export default async function Navbar({searchParams}) {

  const fav = await getLengthFavorite();
  const cart = await getLengthCart();

  return (
    <nav className="navbar block position-fixed z-50 top-0 w-full h-max bg-white drop-shadow-lg pb-0 fixed">
      <div className="flex p-0 justify-around h-16">
        <div className="logo mt-1 h-fit mr-5">
          <Link href={"/products"}>
            <Image
              src={logo}
              width={50}
              height={60}
              className="placeholder='blur'"
              alt="logo"
            />
          </Link>
      </div>

      <Search/>

        <ul className="icons flex justify-between align-middle my-auto">
          <li className="">
            <Link href={"/products"} className="no-underline  text-fuchsia-900">
              <button className="Btn p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     className="bi bi-shop-window iconheart" viewBox="0 0 16 16">
                  <path
                      transform="translate(0 0)"
                      d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </button>
            </Link>
          </li>

          <li className="ml-1">
            <Link href={"/favorite"} className="no-underline  text-fuchsia-900">
              <button className="Btn p-0">
                <div className="px-1">{fav?.favoriteLength || 0}</div>
                <svg
                    viewBox="0 0 17.503 15.625"
                    height="20.625"
                    width="20.503"
                    xmlns="http://www.w3.org/2000/svg text-fuchsia-900"
                    className="iconheart">
                  <path
                      transform="translate(0 0)"
                      d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z"
                      id="Fill">
                  </path>
                </svg>
              </button>
            </Link>
          </li>

          <li className="ml-1">
            <Link href={"/cart"} className="no-underline  text-fuchsia-900">
              <button className="Btn p-0">
                <div className="px-1"> {cart?.cartLength || 0} </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-cart4 iconheart text-fuchsia-900"
                    viewBox="0 0 16 16">
                  <path
                      transform="translate(0 0)"
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
              </button>
            </Link>
          </li>

          <li className="mr-2 my-auto text-fuchsia-900 hover:text-fuchsia-900  ">
            <DropdownMenu dir="rtl">
              <DropdownMenuTrigger>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi-person-circle mt-1 iconheart "
                    viewBox="0 0 16 16"
                    onClick={"text-fuchsia-200"}>
                  <path  transform="translate(0 0)"  d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path  fillRule="evenodd"  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                 <DropdownMenuItem>
                  <Link href={"/favorite-shops"}>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-shop-window  ml-2  my-auto" viewBox="0 0 16 16">
                        <path
                            d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
                      </svg>
                      المتاجر التي تتابعها
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href={"/orders"}>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-cart-check ml-2" viewBox="0 0 16 16 ">
                        <path
                            d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                        <path
                            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                      </svg>
                      الطلبيات
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href={"/profile"}>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person my-auto ml-2" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                      </svg>
                      الحساب
                    </div>
                  </Link>
                </DropdownMenuItem>
               
                <DropdownMenuSeparator/>
                <DropdownMenuItem className="text-red-700 ">
                  <Link href={"/login"} className="no-underline">
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-box-arrow-left ml-2 my-auto" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                        <path fillRule="evenodd"
                              d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                      </svg>
                      <button /*onClick={handleLogout}*/>
                        تسجيل الخروج
                      </button>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </nav>
  );
  
}