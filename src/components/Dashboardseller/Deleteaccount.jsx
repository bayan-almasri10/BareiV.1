"use client";
import React, { useState } from "react";
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
import { styled } from "@mui/material/styles";
import Link from "next/link";
import nookies from "nookies";
import {deleteProfile} from "@/lib/serverActions";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Deleteaccount(deleteProfile) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await deleteProfile();
      console.log("Account deletion process initiated");
      nookies.destroy(null, "tokenName", {
        path: "/",
      });
      window.location.href = "/login";
    } catch (error) {
      console.error("Failed to delete profile:", error);
    }
  };

  return (
    <div className="pl-12 pr-72 py-8 h-auto w-auto my-12">
      <div className="container py-3 mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="flex items-center gap-2 border-b border-fuchsia-800 mx-3">
          <h1 className="pb-3 text-fuchsia-800 text-center text-2xl font-bold">
            حذف الحساب
          </h1>
        </div>
        <p className="text-lg pb-2 text-center mt-5">يؤسفنا مغادرة منصتنا</p>
        <p className="text-center text-base text-slate-600">
          قبل حذف حسابك نريد إبلاغك بأن هذا الإجراء سيحذف جميع بياناتك من منصات
          بارع
        </p>

        <div className="max-w-md mx-auto">
          <form className="my-5 text-center">
            <div style={{ position: "relative" }}>
              <label
                htmlFor="email"
                className="font-semibold text-sm text-gray-700 pb-1 mx-2"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="border w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                aria-label="Email Address"
              />
            </div>
            <div style={{ position: "relative" }}>
              <label
                htmlFor="password"
                className="font-semibold text-sm text-gray-700 pb-1 mx-4"
              >
                كلمة السر
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="border w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                aria-label="Password"
              />
              <button
                className="absolute inset-y-0 px-4 py-2 mb-11 -mr-14"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <svg
                  className="eye fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative bg-white md:mx-0 h-32 py-4 sm:p-10 mt-20 container border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="text-center">
          <AlertDialog>
            <AlertDialogTrigger className="w-full">
              <span className="w-52 py-2 mt-3 bg-red-500 hover:bg-red-600 text-white font-bold px-6 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 hover:scale-110">
                حذف الحساب
              </span>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  هل أنت متأكد أنك تريد حذف الحساب؟
                </AlertDialogTitle>
              </AlertDialogHeader>

              <AlertDialogFooter className={"mx-auto"}>
                <AlertDialogCancel className={"my-auto"}>
                  إلغاء
                </AlertDialogCancel>
                <Link
                  href="/login"
                  onClick={() => handleLogout()}
                  className="no-underline"
                >
                  <AlertDialogAction className="bg-red-500 my-auto mr-3 hover:bg-red-600">
                    حذف الحساب
                  </AlertDialogAction>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div>
        <p className="text-center -mb-12 mt-20 text-slate-700">
          &copy; جميع الحقوق محفوظة لشركة بارع 2024
        </p>
      </div>
    </div>
  );
}
