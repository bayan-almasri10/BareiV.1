"use client";
import { useState } from 'react';
import React from 'react';
import CelebrationIcon from '@mui/icons-material/Celebration';
import "./globals.css";
import Link from 'next/link';

export default function persistent () {
  return (
    <div> 
      <div className=' bg-white'>
        <div className="flex justify-center flex-col items-center min-h-screen mr-72">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="rgba(189, 189, 189, 0.5)" 
                className="bi bi-shop-window mb-3" 
                viewBox="0 0 16 16">
               <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
            </svg>   
            <span style={{ color: '#bdbbbb',fontSize: '25px' }}>نورت متجرك<CelebrationIcon/></span> 
            <span style={{ fontSize: '20px' }}>أكمل تجهيز متجرك الآن!</span>
            <Link href="../dashboard/store-settings">
                <button
                    className=" no-underline  mt-3 py-2
                                bg-fuchsia-700 hover:bg-fuchsia-800
                                text-white font-bold px-6 rounded-full 
                                    shadow-lg shadow-neutral-950 transform 
                                    transition-all duration-500 hover:scale-110  ">
                      إعدادت المتجر
                </button>
            </Link>    
        </div>
        </div>
    </div>
  );
}


