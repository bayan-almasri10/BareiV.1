"use client"
import { Label } from "@/components/ui/label"
import * as React from 'react';
import Button from "../Button/Button";
import 'aos/dist/aos.css'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";
import { useState } from "react";
const EditInfoForm = () => {

    
     const validateAge = (event) => {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - selectedDate.getFullYear();
    const selectedDate = new Date(event.target.value);
    const monthDiff = currentDate.getMonth() - selectedDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < selectedDate.getDate())
    ) {
      age--;
    }

    if (age < 18) {
      alert("يجب أن يكون العمر 18 عامًا أو أكثر.");
      event.target.value = ""; // إفراغ القيمة إذا كانت أقل من 18 عامًا
    }
  };

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

    return (
        <div>
                <div className="px-12 py-3 my-24 h-auto w-auto ">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10  ">
                    <div className="flex border-b-4 border-fuchsia-100 mb-5">
                        <Link href={"/profile"} className="flex">
                            < ArrowForwardIcon className="mb-4 my-auto  mx-2 hover:bg-slate-100 hover:rounded-full"/>
                            <h1 className="text-center text-xl mb-4 my-auto"> تعديل المعلومات الأساسية </h1>
                        </Link>
                        </div>
                        <div className="grid grid-cols-2 ">
                        <div className="flex flex-col w-full max-w-sm gap-3 mb-4 mx-auto h-24">
                            <Label htmlFor="" className="text-lg font-light">الاسم</Label>
                            <input
                            value={`bayan`}
                            className="border text-right  w-full mr-3 shadow-purple-200 shadow-md rounded-lg px-3 py-3 mt-1  text-sm  focus:ring-2 "
                            type="tel"
                            id="phone"
                            name="phone"
                            />
                    </div>
                    <div className="flex flex-col w-full max-w-sm  gap-3 mb-4 mx-auto h-24">
                            <Label htmlFor="" className=" text-lg font-light">اللقب</Label>
                            <input
                                value={`al masri`}
                                className="border text-right w-full mr-3 shadow-purple-200 shadow-md rounded-lg px-3 py-3 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                type="tel"
                                id="phone"
                                name="phone"
                                />
                    </div>
                    <div className="flex flex-col text-right  justify-start w-full max-w-sm gap-3 mb-4 mx-auto h-24 ">
                            <Label htmlFor="" className=" text-lg font-light"> الإيميل </Label>
                            <input
                                value={`almasri-bayan@uive-eloued.dz`}
                                    placeholder=""
                                    className="border w-full mr-3 shadow-purple-200 shadow-md rounded-lg px-3 py-3 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    type="mail"
                                    id="mail"
                                    name="mail"
                                    />
                    </div>
                    <div className="flex flex-col w-full max-w-sm gap-3 mb-4 mx-auto h-24 ">
                            <Label htmlFor="" className=" text-lg font-light">  رقم الهاتف</Label>
                            <input
                                value={`0553672168`}
                                placeholder="+213"
                                className="border w-full text-right  mr-3 shadow-purple-200 shadow-md rounded-lg px-3 py-3 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                type="tel"
                                id="phone"
                                name="phone"
                                pattern="(\+213|0)([5-7])([0-9]){8}"
                                />
                        </div>
                        
                    <div className="flex flex-col w-full max-w-sm gap-3 mb-4 mx-auto h-24 ">
                        <Label htmlFor="" className=" text-lg font-light">النوع</Label>
                            <select
                                    id="city"
                                    className="border w-full text-right  h-12 bg-white mr-2 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    >
                                <option value="ذكر">ذكر</option>
                                <option value="انثى">انثى</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-full max-w-sm gap-3 mb-4 mx-auto h-24 ">
                            <Label htmlFor="" className=" text-lg font-light"> تاريخ الإزدياد </Label>
                            <input
                                type="date"
                                id="dob"
                                className="border w-full text-right  shadow-purple-200 shadow-md rounded-lg px-3 py-3  mt-1 mb-5 mr-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                onChange={validateAge} 
                                />
                        </div>
                    </div>
                    <Button title={" حفظ التغييرت "} bg={" bg-fuchsia-500"} />
                    </div>
                </div>
        </div>
    )
}
export default EditInfoForm;
