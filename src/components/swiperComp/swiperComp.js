import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#be2596',
          '--swiper-pagination-color': '#be2596',
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
             <Link className="bg-fuchsia-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">زيارة</Link>
           </div>  
        </SwiperSlide>
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
              <Link className="bg-fuchsia-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">زيارة</Link>
           </div>  
        </SwiperSlide>
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
              <Link className="bg-fuchsia-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">زيارة</Link>
           </div>  
        </SwiperSlide>
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
              <Link className="bg-fuchsia-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">زيارة</Link>
           </div>  
        </SwiperSlide>
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
              <Link className="bg-fuchsia-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">زيارة</Link>
           </div>  
        </SwiperSlide>
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
             <Link className="bg-yellow-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">متابعة</Link>
           </div>  
        </SwiperSlide>
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
              <Link className="bg-fuchsia-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">زيارة</Link>
           </div>  
        </SwiperSlide>
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
              <Link className="bg-fuchsia-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">زيارة</Link>
           </div>  
        </SwiperSlide>
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
              <Link className="bg-fuchsia-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">زيارة</Link>
           </div>  
        </SwiperSlide>
        <SwiperSlide>          
          <div className="group m-auto before:hover:scale-95 before:hover:h-[20rem] before:hover:w-[39rem]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[40rem] before:h-[9rem] before:rounded-t-2xl before:bg-gradient-to-bl from-yellow-100  to-fuchsia-600 before:absolute before:top-0 w-[40rem] h-[20rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
             <div className="w-28 h-28 bg-yellow-400 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-44  group-hover:-translate-y-20 transition-all duration-500"></div>
             <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
               <span className="text-2xl font-semibold">متجر بارع</span>
              <p>حرف وصناعات يدوية </p>
             </div>
              <Link className="bg-fuchsia-400 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-fuchsia-400" href="#">زيارة</Link>
           </div>  
        </SwiperSlide>
      </Swiper>
    </>
  );
}

