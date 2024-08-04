"use client";
import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import data from "../../data/data.json";
import Snackbar from "@mui/material/Snackbar";
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { useToast } from "@/components/ui/use-toast"
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default  function AccountSettings({profileInfo,putProfileInfo}) {

    const [firstName, setFirstName] = useState(profileInfo?.user?.firstName);
    const [lastName, setLastName] = useState(profileInfo?.user?.lastName);
    const [dateBirth, setDateBirth] = useState(new Date().toISOString().split('T')[0]);
    const [gender, setGender]  = useState(profileInfo?.user?.gender);
    const [email, setEmail] = useState(profileInfo?.user?.email);
    const [phone, setPhone] = useState(profileInfo?.user?.phone);
    const [state, setState] = useState(profileInfo?.user?.state);
    const [city, setCity] = useState(profileInfo?.user?.city);

    console.log(profileInfo);
    const { toast } = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await putProfileInfo({firstName, lastName, dateBirth, gender, email, phone, state, city});
        console.log(firstName,lastName,dateBirth,gender,email,phone,state,city);
        toast({
            title: "تم تعديل معلوماتك بنجاح",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom-right",
            style: {
                zIndex: 9999, 
                backgroundColor: "purple",
               fontColor: "white",
            }
        })

    };

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className=" h-auto w-[55rem] ">
            <Box />

            <div className="relative py-10 bg-white  md:mx-0 shadow-md shadow-fuchsia-300 rounded-3xl  ">
                <div className={'flex  border-b border-fuchsia-700 my-auto pr-4'}>
                    <PersonIcon className={'text-fuchsia-700 text-3xl'}/>
                    <h1 className="text-right text-xl mb-4 pr-6 pb-4 text-fuchsia-700"> معلومات الحساب</h1>
                </div>
                <div>
                    <div className="w-[50rem] mx-auto">
                        <form className="mt-5">
                            <div className="grid grid-cols-2 gap-2 items-center justify-center">
                                <div className="grid justify-center">
                                    <label
                                        htmlFor="First-Name"
                                        className="font-semibold text-sm text-gray-700 mb-3 block"
                                    > الإسم
                                    </label>
                                    <input
                                        dir="rtl"
                                        className="border w-80 h-12 shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-fuchsia-500"
                                        type="tel"
                                        id="First-Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="grid justify-center">
                                    <label
                                        htmlFor="full-name"
                                        className="font-semibold text-sm text-gray-700 mb-3 block"
                                    > اللقب
                                    </label>
                                    <input
                                        dir="rtl"
                                        className="border w-80 h-12 shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                                        type="tel"
                                        id="full-name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className="grid justify-center">
                                    <label
                                        htmlFor="email"
                                        className="font-semibold text-sm text-gray-700 mb-3 block"
                                    >البريد الاكتروني
                                    </label>
                                    <input
                                        dir="rtl"
                                        type="email"
                                        id="email"
                                        aria-describedby="helper-text-explanation"
                                        className="border w-80 h-12  shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                                        aria-label="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="grid justify-center">
                                    <label
                                        htmlFor="phone"
                                        className="font-semibold text-sm text-gray-700 mb-3 block"
                                    > رقم الهاتف
                                    </label>
                                    <input
                                        dir="rtl"
                                        placeholder="+213"
                                        className="border w-80 h-12 shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        pattern="(\+213|0)([5-7])([0-9]){8}"
                                    />
                                </div>

                                <div className="grid justify-center">
                                    <label
                                        htmlFor="dob"
                                        className="font-semibold text-sm text-gray-700 mb-3 block"
                                    >العمر
                                    </label>
                                    <input
                                        dir="rtl"
                                        required
                                        type="date"
                                        id="dob"
                                        className="border w-80 h-12 shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                                        value={ dateBirth}
                                        onChange={(e) => setDateBirth(e.target.value)}
                                    />
                                </div>
                            <div className="grid justify-center">
                                <label
                                    className="font-semibold text-sm text-gray-700 mb-3 block"
                                    htmlFor="gender"
                                >
                                    الجنس
                                </label>
                                  <select
                                    className="border bg-white w-80 h-12 shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="gender" selected>{gender}</option>
                                    <option value="1">ذكر</option>
                                    <option value="0">أنثى</option>
                                </select>
                            </div>


                                <div className="grid justify-center">
                                    <label
                                        className="font-semibold text-sm text-gray-700 mb-3 block"
                                        htmlFor="city"
                                    >الولاية
                                    </label>
                                    <select
                                        dir="rtl"
                                        id="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        className="border w-80 h-12 shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 bg-white"
                                    >
                                        <option value="state" selected></option>
                                        {data.map((city, index) => (
                                            <option key={index} value={city.city}>
                                                {city.city}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="grid justify-center">
                                    <label
                                        htmlFor=" city"
                                        className="font-semibold text-sm text-gray-700 mb-3 block"> المدينة
                                    </label>
                                    <input
                                        dir="rtl"
                                        className="border w-80 h-12 focus:outline-fuchsia-500 shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 "
                                        type="tel"
                                        id="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bay mx-auto flex justify-center">
                    <button
                        className={`m-5 relative p-3 w-48 flex justify-center px-10 text-white text-base font-bold nded-full overflow-hidden bg-fuchsia-700 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(e);}}>
                        حفظ
                    </button>
                </div>
            </div>
        </div>
    );
}