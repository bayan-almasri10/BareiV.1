"use client"
import React, {useEffect} from "react";
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation";
import { useState } from "react";
import {useSearchParams ,usePathname ,useRouter} from "next/navigation";
import { useDebounce } from "use-debounce";
import "./globals.css";
const Search = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const [input, setInput] = useState("");
    const [query] = useDebounce(input, 500);

    const handleSearch = () => {
        if (!query){
            router.push(`/products`);
        }else{
            router.push(`/products/search?q=${query}`);
        }
    }
    return (
        <>
            <div className="search border-1 px-2 py-2 mb-2 rounded-xl my-auto w-[500px] flex justify-between">
                <Input
                    value={input}
                    placeholder="إبحث عن منتج أو صنف..."
                    onChange={(e)=> setInput(e.target.value)}
                    className="w-96 outline-none border-none focus:outline-none focus:border-none "
                />
                <button className="px-4 py-1 rounded-xl left-0 bg-fuchsia-50 hover:bg-fuchsia-200" onClick={() =>handleSearch()}> بحث </button>
            </div>
        </>
    );
};
export default Search;