"use client";

import Link from "next/link";
import Image from "next/image";
import basket from "../../../public/images/basket.png";

export default function EmptyFav() {
  return (
    <div className="flex flex-col justify-center align-middle p-3 h-96">
      <div className="icon mx-auto w-full h-full">
        <Image src={basket} width={200} height={200} alt="product" className="mx-auto" />
      </div>
      <div className="para  mx-auto p-4 item-center">
        <h2 className="py-2 item-center text-2xl font-bold">
          لم تطلب اي منتج بعد
        </h2>
        <p className="py-2 mx-auto text-center font-thin">
          لا يوجد اي عنصر ضمن طلبياتك
        </p>
      </div>

      <Link href={"/products"}>
        <button className="m-auto flex justify-center bg-fuchsia-800 text-white px-4 py-2 rounded-xl w-44" type="button">
          تسوق الأن
        </button>
      </Link>
    </div>
  );
}
