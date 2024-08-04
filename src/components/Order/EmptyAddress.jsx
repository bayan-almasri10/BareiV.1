import Link from "next/link";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddIcon from '@mui/icons-material/Add';
import Button from "../Button/Button";
import * as React from "react";
import {useState} from "react";
import OrderAddress from "@/components/Order/OrderAddress";
function EmptyAddress({ onClick }) {

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <AddLocationIcon className="text-6xl my-3 text-fuchsia-700"/>
                <h4 className=" font-bold text-xl py-3">لا يوجد اي عنوان متاح !</h4>
                <p className=" font-light text-lg pb-3 mb-2">يجب إضافة عنوان لإتمام عملية الشراء</p>
                <button onClick={() => onClick('OrderAddress')} className="bg-fuchsia-700 p-2 text-white rounded-xl hover:bg-fuchsia-600"> إضافة عنوان<AddIcon/> </button>
            </div>
        </>
    );
}
export default EmptyAddress;