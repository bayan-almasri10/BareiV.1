"use client";

import Link from "next/link";
import Image from "next/image";
import basket from "../../../public/images/basket.png";
export default function EmptyCartAddress() {
  return (
    <div className="flex flex-col justify-center align-middle px-3 py-5 shadow-md shadow-fuchsia-300 rounded-xl w-[55rem] h-[25rem]">
      <div className="icon mx-auto w-full ">
        <Image src={basket} width={200} height={200} alt="product" className="mx-auto" />
      </div>
      <div className="para  mx-auto p-4 item-center">
        <h2 className="py-2 item-center text-2xl font-bold">
            دفتر العناوين الخاصة بك فارغ 
        </h2>
        {/* <p className="py-2 mx-auto text-center font-thin">
          لا يوجد اي عنصر في سلتك{" "}
        </p> */}
      </div>

      <Link href={"/profile/addresses/add-address"}>
        <button className="m-auto flex justify-center bg-fuchsia-800 text-white px-4 py-2 rounded-xl w-44" type="button">
          أضف عنوان
        </button>
      </Link>
    </div>
  );
}
