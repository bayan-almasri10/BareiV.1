"use client";

import * as React from 'react';
import Link from "next/link";
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import 'aos/dist/aos.css';
import data from "@/data/data"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { object, string } from 'zod';
import { useToast } from "@/components/ui/use-toast"
const addressSchema = object({
    address: string().min(1).max(255),
    city: string().min(1).max(50),
    state: string().min(1).max(50),
    phonePrimary: string().regex(/(\+213|0)([5-7])([0-9]){8}/),
    phoneSecondiry: string().regex(/(\+213|0)([5-7])([0-9]){8}/),
});


function AddAddressForm({postAddress}) {
    const { toast } = useToast();

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
        await postAddress(address, city, state, phonePrimary, phoneSecondiry);
        toast({
            title: "تم إضافة العنوان",
            description: new Date().toLocaleTimeString(),
            });
    };

    const [showComponentAddress, setComponentAddress] = useState(false);

    const handleClick = () => {
        setComponentAddress(true);
    };

    return (
        <>
            <div className="relative py-5 bg-white mx-8 md:mx-0 shadow-md shadow-fuchsia-300 w-[55rem]  rounded-3xl sm:p-10  ">
                <div className="flex border-b border-fuchsia-700 mb-16">
                        <AddLocationIcon className="text-xl m-2 my-auto text-fuchsia-700"/>
                        <h1 className="text-center text-xl  my-auto text-fuchsia-700 pb-3"> إضافة عنوان جديد </h1>
                </div>
                <div className="grid grid-cols-2 gap-4 ">

                    <div className="flex flex-col w-full max-w-sm gap-3 mb-4 mx-auto h-24 ">
                        <Label htmlFor="" className=" text-lg font-light">العنوان</Label>
                        <input
                            className="border w-full mr-3  shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm"
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
                            className="border w-full h-16 bg-white mr-2  shadow-sm rounded-lg px-3 py-2 mt-1 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
                        <Label htmlFor="" className=" text-lg font-light"> المدينة </Label>
                        <input
                            className="border w-full mr-3  shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
                            className="border w-full mr-3  shadow-sm rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
                            className="border w-full mr-3  shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
                    className={`my-5  relative py-3 mx-auto flex justify-left px-10 text-white text-base font-bold nded-full overflow-hidden bg-fuchsia-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                }} >

                    <Link href={'/profile/addresses'}>
                        إضافة العنوان
                    </Link>
                </button>
            </div>
        </>
    );
}

export default AddAddressForm;
