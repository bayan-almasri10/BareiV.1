"use client";

import Link from "next/link";
import Image from "next/image";
import girlAvatar from "../../../public/images/avatar/girl.jpg";
import manAvatar from "../../../public/images/avatar/man.jpg";
import { useRouter } from "next/navigation";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import nookies from "nookies";

export default function Sidebar({ ProfileInfo }) {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  const handleLogout = () => {
    nookies.destroy(null, "token", {
      path: "/",
    });
    router.push('/login');
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full opacity-90 border-b border-[#EEEEEE] shadow bg-white dark:bg-gray-800 dark:border-gray-700 mb-5">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 bg-gradient-to-l from-[#EEEEEE] to-[#EEEEEE] dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Image
                src={
                  ProfileInfo.user.gender === "انثى" ? girlAvatar : manAvatar
                }
                alt="logo"
                width={50}
                height={50}
                className="rounded-full ml-3"
              />
              <h6>{`${ProfileInfo.user.firstName} ${ProfileInfo.user.lastName}`}</h6>
            </div>
            <div className="">
              <Link
                href="/products"
                className="b-0 mx-auto text-gray-600 rounded-full text-center py-2 no-underline mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <aside
        id="logo-sidebar"
        className="fixed top-0 right-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-l border-slate-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between px-3 pb-3.5 overflow-y-auto bg-gradient-to-b from-[#EEEEEE] to-[#EEEEEE] opacity-70 dark:bg-gray-800">
          <ul className="space-y-2 font-medium mt-2">
            <li>
              <Link
                href="/profile"
                className={`flex items-center p-2 text-decoration-none rounded-lg dark:text-white text-gray-900 w-full hover:bg-white dark:hover:bg-gray-700 group ${
                  isActive("/profile")
                    ? "bg-gray-300 dark:bg-gray-700"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <span className="ms-3">معلومات الحساب</span>
              </Link>
            </li>
            <li>
              <Link
                href="/profile/addresses"
                className={`flex items-center p-2 text-decoration-none rounded-lg dark:text-white text-gray-900 w-full hover:bg-white dark:hover:bg-gray-700 group ${
                  isActive("/profile/addresses")
                    ? "bg-gray-300 dark:bg-gray-700"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-map"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  دفتر العناوين
                </span>
              </Link>
             </li>
            
             <li>
                <Link href="#" disabled
                        className={`flex items-center p-2 text-decoration-none rounded-lg dark:text-white text-gray-900 w-full hover:bg-white dark:hover:bg-gray-700 group ${isActive("/profile/addresses") ? "bg-gray-300 dark:bg-gray-700" : ""} ` } >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap"> تأكيد رقم الهاتف </span>
                    <span className="px-1 py-0.5 text-xs rounded-lg bg-white text-gray-700"> قريبا </span>

                </Link>
            </li>          


            <li>
              <Link
                href="/profile/change-password"
                className={`flex items-center p-2 text-decoration-none rounded-lg dark:text-white text-gray-900 w-full hover:bg-white dark:hover:bg-gray-700 group ${
                  isActive("/profile/change-password")
                    ? "bg-gray-300 dark:bg-gray-700"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  تغيير كلمة السر
                </span>
              </Link>
             </li>
                      
           <li>
                <AlertDialog className="text-center mt-12" >
                <AlertDialogTrigger className="flex-1 w-full whitespace-nowrap text-red-600">
                    <div className="flex items-center p-2 text-decoration-none my-auto text-gray-900 rounded-lg dark:text-white w-full hover:bg-red-200  dark:hover:bg-gray-700 group w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-box-arrow-left text-red-600 my-auto ml-3" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                        <path fillRule="evenodd"
                            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                        </svg>
                        <p className={'text-red-600 my-auto'}> تسجيل الخروج</p>
                        
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="text-center"> هل تريد تسجيل الخروج من حسابك ؟ </AlertDialogTitle>   
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>إلغاء</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-500" onClick={handleLogout}> تسجيل الخروج </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
