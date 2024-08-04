"use client";
/**

 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rvj1Ff3sKWq
 */
import Image from "next/image";

import basket from "../../../public/images/basket.png";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

import Add from "@mui/icons-material/Add";
export default function EmptyProducte() {
  return (
    <>
      <div className="pl-12 pr-72 py-8 h-auto w-auto my-12">
        <div className="container py-10  mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
          <Card className="w-full h-full">
            <CardHeader className=" flex items-center gap-2 border-b border-fuchsia-800 mx-3 ">
              <CardTitle className={"pb-3 text-fuchsia-800"}>
                {" "}
                المنتجات
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className=" mt-5 h-auto mx-5 text-center">
                <Image
                  src={basket}
                  alt=""
                  width={200}
                  height={120}
                  className=" mx-72 "
                />
                <p className=" text-slate-600 text-lg mb-12">
                  لم تقم بإضافات منتجات{" "}
                </p>
                <Link href="../dashboard/add-product">
                  <button
                    className=" no-underline  mt-2 py-2 mb-12
                                bg-fuchsia-700 hover:bg-fuchsia-800
                                text-white font-bold px-6 rounded-full 
                                    shadow-lg shadow-neutral-950 transform 
                                    transition-all duration-500 hover:scale-110  "
                  >
                    إضافة منتج
                    <Add />
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="text-center mt-16 text-slate-700 mr-80">
        <p>&copy; جميع الحقوق محفوظة لشركة بارع 2024</p>
      </div>
    </>
  );
}
