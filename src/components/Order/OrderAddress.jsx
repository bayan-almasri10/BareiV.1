"use client";

import * as React from 'react';
import Link from "next/link";
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Label } from "@/components/ui/label"
import Button from "../Button/Button";
import 'aos/dist/aos.css'; 
import data from "@/data/data"
import ItemAddress from "@/components/Order/ItemAddress"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { object, string } from 'zod';

const addressSchema = object({
    address: string().min(1).max(255),
    city: string().min(1).max(50),
    state: string().min(1).max(50),
    phonePrimary: string().regex(/(\+213|0)([5-7])([0-9]){8}/),
    phoneSecondiry: string().regex(/(\+213|0)([5-7])([0-9]){8}/),
});


function OrderAddress({onClick,postAddress}) {

    const handleSubmitInput = async (e) => {
        e.preventDefault();
        try {
            const validatedData = addressSchema.parse({
                address,
                city,
                state,
                phonePrimary,
                phoneSecondiry,
            });

            await postAddress(validatedData.address, validatedData.city, validatedData.state, validatedData.phonePrimary, validatedData.phoneSecondiry);
        } catch (error) {
            console.error(error.errors);
        }
    };

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [phonePrimary, setPhonePrimary] = useState('');
    const [phoneSecondiry, setPhoneSecondiry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await  postAddress (address,city,state,phonePrimary,phoneSecondiry);
    };

    const [showComponentAddress, setComponentAddress] = useState(false);

  const handleClick = () => {
    setComponentAddress(true);
  };

    return (
        <>
        <div className=" container shadow-xl  w-1/2 mx-auto relative px-4 py-10 bg-white md:mx-0  rounded-3xl sm:p-10  ">
                    <div className="flex border-4 border-fuchsia-100 bg-fuchsia-100 rounded-xl mb-16">
                        <Link href={"/orders"} className="flex">
                            <AddLocationIcon className="text-xl m-2 text-fuchsia-700"/>
                            <h1 className="text-center text-xl  my-auto"> إضافة عنوان جديد </h1>
                        </Link>
                        </div>
            <div className="flex flex-col ">

                <div className="flex flex-col w-full max-w-sm gap-3 mb-4 mx-auto h-24 ">
                    <Label htmlFor="" className=" text-lg font-light">العنوان</Label>
                    <input
                        className="border w-full mr-3 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm"
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-full max-w-sm gap-3 h-24 mb-4 mx-auto ">
                    <Label htmlFor="" className=" text-lg font-light"> الولاية</Label>
                    <select
                        id="city"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="border w-full h-16 bg-white mr-2 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    >
                        <option value=""></option>
                        {data.map((city, index) => (
                            <option key={index} value={city.city}>
                                {city.city}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col w-full max-w-sm gap-3 mb-4 h-24 mx-auto ">
                    <Label htmlFor="" className=" text-lg font-light"> البلدية </Label>
                    <input
                        className="border w-full mr-3 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="baladia"
                        name="baladia"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div className="flex flex-col justify-start w-full max-w-sm gap-3 mb-4 mx-auto h-24 ">
                    <Label htmlFor="" className=" text-lg font-light">رقم الهاتف</Label>
                    <input
                        placeholder="+213"
                        className="border w-full mr-3 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="(\+213|0)([5-7])([0-9]){8}"
                        value={phonePrimary}
                        onChange={(e) => setPhonePrimary(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full max-w-sm gap-3 mb-4 mx-auto h-24 ">
                    <Label htmlFor="" className=" text-lg font-light"> رقم هاتف إضافي</Label>
                    <input
                        placeholder="+213"
                        className="border w-full mr-3 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="(\+213|0)([5-7])([0-9]){8}"
                        value={phoneSecondiry}
                        onChange={(e) => setPhoneSecondiry(e.target.value)}
                    />
                </div>
            </div>
            <button
                className={`my-5  relative py-3 flex justify-center px-10 text-white text-base font-bold nded-full overflow-hidden bg-fuchsia-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1] mx-auto`}
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                    onClick('ItemAddress');
                }} >
                إضافة العنوان
            </button>
        </div>
        </>
    );
}

export default OrderAddress;