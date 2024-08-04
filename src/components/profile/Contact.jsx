"use client"
import React, {useEffect, useState} from "react"
import EditInfoForm from "./EditInfoForm"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTitle, AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogFooter, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import AddLocationIcon from '@mui/icons-material/AddLocation'
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import data from "@/data/data.json";
import AddAddressForm from '@/components/profile/AddAddressForm'
import {putAddress} from "@/util/serverActions";
import {useToast} from "@/components/ui/use-toast";

const Contact = ({displayAddress,deleteAddress,putAddress,onClick}) => {
    const { toast } = useToast()
    console.log(displayAddress)

    const [address, setAddress] = useState(displayAddress?.address?.address);
    const [city, setCity] = useState(displayAddress?.address?.city);
    const [state, setState] = useState(displayAddress?.address?.state);
    const [phonePrimary, setPhonePrimary] = useState(displayAddress?.address?.primaryPhone);
    const [phoneSecondiry, setPhoneSecondiry] = useState(displayAddress?.address?.secondiryPhone);

    const handleSubmit = async (e,id) => {
        e.preventDefault();
        await  putAddress (address, city, state, phonePrimary, phoneSecondiry, id);
        toast({
            title: "تم تعديل عنوانك بنجاح",
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

    return (
        <div className=" rounded-3xl py-1 h-min w-[55rem] shadow-md shadow-fuchsia-300">
            <div className="flex justify-between border-b border-fuchsia-700  opacity-70">
                <div className="Label flex m-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-map-fill my-auto text-fuchsia-700 " viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z"/>
                    </svg>
                    <h2 className=" text-2xl font-light p-3 my-auto text-fuchsia-700"> دفتر العناوين </h2>
                </div>
                <Link href="/profile/addresses/add-address">
                    <button
                        className="text-md font-medium h-14 w-32 mt-4 rounded-xl mx-3 bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-600 hover:text-white transition-all ease-in"
                        onClick={onClick}> إضافة عنوان
                    </button>
                </Link>
            </div>

            {displayAddress && displayAddress?.address.map((addr, index) => {
                const id = addr?.id;
                return (
                    <div className="mb-16 " key={index}>
                        <div className="box flex jsustify-center  w-2/3 bg-gradient-to-b from-gray-50  via-white to-gray-50 mx-auto border border-fuchsia-200 shadow-sm shadow-fuchsia-200 rounded-xl h-fit mb-5 p-4 m-5">
                            <div className="flex flex-col gap-1 w-full ">
                                <p className="street font-light border-b  p-2 ">
                                    <span className="font-normal text-blue-700"> العنوان :  </span> {addr?.address}</p>
                                <p className="street font-light border-b  p-2 "><span
                                    className="font-normal text-blue-700"> المدينة :  </span> {addr?.city}</p>
                                <p className="street font-light border-b  p-2 "><span
                                    className="font-normal text-blue-700"> الولاية :  </span> {addr?.state}</p>
                                <p className="street font-light border-b  p-2 "><span
                                    className="font-normal text-blue-700"> الهاتف :  </span> {addr?.primaryPhone}</p>
                                <p className="street font-light border-b  p-2 "><span
                                    className="font-normal text-blue-700"> الهاتف الإضافي :  </span> {addr?.secondaryPhone}</p>
                                <div className={"mx-auto flex gap-2"}>
                                    <Dialog className="relative z-50" >
                                        <DialogTrigger asChild>
                                            <Button variant="outline bg-transparen "  className=" text-green-800 bg-green-50 rounded-sm py-1 px-3 ">
                                                <ModeEditOutlineIcon/> تعديل العنوان
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle className={'text-center'}>تعديل العنوان</DialogTitle>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="name" className="text-right">
                                                        العنوان
                                                    </Label>
                                                    <Input
                                                        id="address"
                                                        type='text'
                                                        defaultValue=" "
                                                        className="col-span-3"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                    />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="name" className="text-right">
                                                        الولاية
                                                    </Label>
                                                    <select
                                                        id="city"
                                                        className="col-span-3 bg-white rounded-md p-1 border"
                                                        value={state}
                                                        onChange={(e) => setState(e.target.value)}
                                                    >
                                                        <option value='state' selected disabled></option>
                                                        {data.map((city, index) => (
                                                            <option key={index} value={city.city}>
                                                                {city.city}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="name" className="text-right">
                                                        المدينة
                                                    </Label>
                                                    <Input
                                                        id="city"
                                                        type='text'
                                                        defaultValue=" "
                                                        className="col-span-3"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                    />
                                                </div>

                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="name" className="text-right">
                                                        رقم الهاتف
                                                    </Label>
                                                    <Input
                                                        id="phone"
                                                        type='phone'
                                                        defaultValue=""
                                                        className="col-span-3"
                                                        value={phonePrimary}
                                                        onChange={(e) => setPhonePrimary(e.target.value)}
                                                    />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="username" className="text-right">
                                                        رقم هاتف إضافي
                                                    </Label>
                                                    <Input
                                                        id="phone"
                                                        type='phone'
                                                        defaultValue=""
                                                        className="col-span-3"
                                                        value={phoneSecondiry}
                                                        onChange={(e) => setPhoneSecondiry(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit"
                                                        className="bg-green-500 hover:bg-green-600 ml-2"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleSubmit(e ,id);
                                                        }}> تعديل العنوان </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                    <AlertDialog>
                                        <AlertDialogTrigger>
                                            <Button variant="outline bg-transparent"   className="text-red-600 bg-red-50 rounded-sm  py-1 px-3 ">
                                                <DeleteOutlineIcon/> حذف العنوان
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>هل أنت متأكد من حذف هذا العنوان ؟</AlertDialogTitle>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter className={"mx-auto"}>
                                                <AlertDialogAction
                                                    className="bg-red-500 hover:bg-red-600 ml-2"
                                                    onClick={() => deleteAddress(addr.id)}
                                                >حذف</AlertDialogAction>
                                                <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Contact;
