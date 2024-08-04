"use client";

import Image from "next/image";
import basket from "../../../public/images/basket.png";

export default function EmptyFav() {
  return (
    <div className="flex flex-col justify-center align-middle p-3 h-96 shadow-xl rounded-xl w-full ">
      <div className="icon mx-auto w-full h-full">
        <Image src={basket} width={300} height={300} alt="product" className="mx-auto" />
      </div>
      <div className="para  mx-auto p-4 item-center">
        <h2 className="py-2 item-center text-2xl font-bold">
          لم يتم العثور على نتائج ملائمة
        </h2>
      </div>
    </div>
  );
}
