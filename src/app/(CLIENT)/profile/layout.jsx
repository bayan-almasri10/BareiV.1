"use server"
import Sidebar from "@/components/profile/Sidebar";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import React from "react";
import {getProfileInfo} from "@/util/serverActions"

async function ProfileLayout({ children }) {
    const ProfileInfo = await getProfileInfo();
    return (
        <>
            <Suspense fallback={"loading"}>
                <Sidebar ProfileInfo={ProfileInfo} />
                {children}
                <div>
                    <p className="text-center -mb-12 mt-24 mr-[10rem] text-slate-700">
                        &copy;  جميع الحقوق محفوظة لشركة بارع 2024
                    </p>
                </div>
            </Suspense>
        </>
    );
}
export default  dynamic (() => Promise.resolve(ProfileLayout), { ssr: false })