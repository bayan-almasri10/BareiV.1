"use client";
import Image from "next/image";
import Link from "next/link";
import img from "../../public/images/p1.jpg"
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import SwiperComponent from "@/components/swiperComp/swiperComp";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Counter from "@/components/home/counter";
import ClientSwiper from "@/components/home/ClientSwiper";
export default function Home() {

   useEffect(() => {
     AOS.init({
          duration: 800,
          once: false,
        })
   }, [])

   const categories = [
    {
      category: "الألعاب",
      url: "/images/toyes2.jfif",
      supCategory: [],
    },
    {
      category: "المنتجات مدرسية",
      url: "/images/planner.jpg",
      supCategory: ["بلانر", "دفتر ذكريات", "ستيكرات", "منظمات","أخرى"],
    },
    {
      category: "الفن",
      url: "/images/Art.jfif",
      supCategory: ["الرسم", "فن الزجاج"],
    },
    {
      category: "المنزل والمعيشة",
      url:   "/images/home.jpg",
      supCategory: ["أثاث", "حدائق", "الحمام", "المكتب" ,"المطبخ"],
    },
     {
      category: "الجمال & المنتجات",
      url: "/images/bueati.jpg",
      supCategory: ["صابون", "كريمات طبيعية", "ماسكات طبيعية", "زيوت طبيعية"],
     },
    {
      category: "المجوهرات",
      url:"/images/Jewelry.jpg",
      supCategory: ["قلائد", "خواتم", "أساور", "أقراط","ساعات" ,"تيجان","طقم كامل"],
     },
    {
      category: "الإكسسوارات",
      url: "/images/access.jpg",
      supCategory: ["إكسسوارات الشعر", "ميداليات", "قبعات", "شالات","قفازات"],
     },
    {
      category: "الأعراس",
      url: "/images/wedding2.jfif",
      supCategory: ["ديكورات الأعراس", "هدايا تذكارية", "بطاقات دعوى", "ضيافة"],
    },
    {
      category: "الديكور",
      url: "/images/decor.jfif",
      supCategory: ["المنزل", "المكاتب", "حفلات", "أخرى"],
    },
    {
      category: "الأطفال",
      url: "/images/baby.jpg",
      supCategory: ["إكسسوارات", "ألعاب", "ملابس", "أخرى"],
    },
    {
      category: "الحقائب & المحافظ",
      url: "/images/bag.jpg",
      supCategory: ["حقائب يد", "حقائب ظهر", "ساك", "محافظ نقود", "محافظ مكياج", "محافظ إكسسوارات", "محافظ أطفال"],
    },
    {
      category: "الأزياء",
      url:"/images/fashion.jfif",
      supCategory: ["نسائية", "رجالية", "أطفال", "بنات", "أولاد"],
    },
    {
      category: "الكروشي",
      url: "/images/croche.jfif",
      supCategory: [],
     },
    {
      category: "التطريز",
      url: "/images/tatrez.jpg",
      supCategory: [],
     },
    {
      category: "الريزن",
      url: "/images/resine.jfif",
      supCategory: [],
     },


   ];

  return (
      <>
        {/* NAV SECTION */}
        <nav className="nav flex justify-center bg-gradient-to-r from-fuchsia-900 via-fuchsia-600 to-fuchsia-900">
          <h5 className=" text-yellow-100 text-sm font-normal my-2  py-2 ">إبدأ متجرك الإلكتروني مع بارع</h5>
          <button
              className="mx-2 text-sm bg-fuchsia-400 text-white my-2  px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-fuchsia-800 active:bg-fuchsia-900 focus:outline-none">
            تفاصيل والإشتراك
          </button>
        </nav>

        {/* HERO SECTION */}
        <div
            className="hero h-[500px] rounded-b-full  bg-gradient-to-r from-fuchsia-700 via-fuchsia-500 to-fuchsia-700">
          <div className="img  mx-auto">
            <div className="contentHero mx-auto align-middle text-center w-1/2 ">
              <h1 className="font-bold text-2xl text-white p-10 "> بوابتك لعالم تلتقي فيه الأفكار الإبداعية بالأيدي
                الماهرة</h1>
              <p className="font-normal text-lg text-yellow-200 px-10">إصنع متجرك الخاص مع مجتمع الحرفيين بدون أي
                قيود,<br/> أو استمتع بتجربة تسوق فريدة بمنتجات صنعت بحب</p>
              <div className="bay mx-auto flex justify-center">
                <button
                    className={`m-4 mt-5 relative py-3 flex justify-center px-10 text-fuchsia-700 bg-slate-50 text-base font-bold nded-full overflow-hidden  rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}>
                  <Link href={"/login"} className="no-underline">
                    تسجيل الدخول
                  </Link>
                </button>
              </div>
              <div className="bottons pb-5">
                <button
                    className="mx-2 bg-fuchsia-400 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-fuchsia-700 active:bg-fuchsia-900 focus:outline-none">
                  <Link href={"/signup"} className="no-underline">
                    سجل معنا الآن
                  </Link>
                </button>
              </div>
            </div>
            <div
                className="videoContainer border-xl border-3 rounded-xl w-[650px] h-80 bg-white border-fuchsia-400 shadow-lg mx-auto">
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="SERVICES mt-80  bg-gradient-to-b from-fuchsia-700  to-fuchsia-100 py-5">
          <h1 className="block font-bold text-center text-5xl text-fuchsia-100 pt-5 ">لماذا بارع ؟</h1>
          <div className="service container grid grid-cols-2 gap-4 md:grid-cols-4 my-16 ">
            <div data-aos="fade-up">
              <div
                  className="cart text-center m-2 bg-gradient-to-r h-52 from-slate-300 via-slate-50 to-slate-300  p-3 rounded-lg shadow-xl cursor-pointer hover:transform hover:-translate-y-6 hover:transition hover:ease-out hover:duration-700">
                <div className="icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black"
                       className="bi bi-people mx-auto" viewBox="0 0 16 16">
                    <path
                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl p-2 text-black">توفير بيئة مخصصة للحرفيين</h3>
                <p className="font-thin text-md text-black mb-1">نظام لمعالجة المعاملات المالية بين الحرفيين
                  والمشترين</p>
                <p className="font-thin text-md text-black mb-1">نظام لإدارة المخزون وتتبع الطلبات.</p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                  className="cart text-center m-2 p-3 h-52 rounded-lg shadow-xl bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300  cursor-pointer hover:transform hover:-translate-y-6 hover:transition hover:ease-out hover:duration-700">
                <div className="icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black"
                       className="bi bi-shop mx-auto" viewBox="0 0 16 16">
                    <path
                        d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl p-2 text-black">إنشاء متجر بدون قيود</h3>
                <p className="font-thin text-md p-2 text-black "> يمكنك إنشاء حساب مجانا بدون أي إلتزامات مادية </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                  className="cart text-center m-2 p-3 h-52 rounded-lg shadow-xl bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300  cursor-pointer  hover:transform hover:-translate-y-6 hover:transition hover:ease-out hover:duration-700">
                <div className="icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black"
                       className="bi bi-graph-up-arrow mx-auto" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl p-2 text-black">تتبع دقيق للمبيعات</h3>
                <p className="font-thin text-md p-2 text-black">توفر المنصة نظامًا لتتبع المبيعات بدقة، مما يتيح للتاجر
                  متابعة العمليات التي أدت إلى البيع وحساب الربح بدقة</p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                  className="cart text-center m-2  p-3 h-52 rounded-lg shadow-xl bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300  cursor-pointer hover:transform hover:-translate-y-6 hover:transition hover:ease-out hover:duration-700">
                <div className="icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black"
                       className="bi bi-cash-stack mx-auto" viewBox="0 0 16 16">
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                    <path
                        d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl p-2 text-black">لا تحتاج لراس مال</h3>
                <p className="font-thin text-md p-2 text-black">يمكنك البدأ بمنتجات بسيطة وبرأس مال شبه منعدم</p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                  className="cart text-center m-2  p-3 h-52 rounded-lg shadow-xl bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300  cursor-pointer hover:transform hover:-translate-y-6 hover:transition hover:ease-out hover:duration-700">
                <div className="icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black"
                       className="bi bi-patch-check mx-auto" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                    <path
                        d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl p-2 text-black"> منتجات بجودة عالية </h3>
                <p className="font-thin text-md p-2 text-black">يتم مراقبة جودة المنتجات من قبل متخصصين لضمات أفضل جودة
                  للعميل</p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                  className="cart text-center m-2  p-3 h-52 rounded-lg shadow-xl bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300  cursor-pointer hover:transform hover:-translate-y-6 hover:transition hover:ease-out hover:duration-700 ">
                <div className="icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black"
                       className="bi bi-bag-check mx-auto" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                    <path
                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl p-2 text-black"> منتجات فريدة ومميزة </h3>
                <p className="font-thin text-md p-2 text-black"> توفر منتجات يدوية متميزة و بجودة عالية لا تتواجد في
                  الأسواق العادية </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                  className="cart text-center m-2  p-3 h-52 rounded-lg shadow-xl  cursor-pointer hover:transform hover:-translate-y-6 bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300 hover:transition hover:ease-out hover:duration-700">
                <div className="icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black"
                       className="bi bi-cart-check mx-auto" viewBox="0 0 16 16">
                    <path
                        d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                    <path
                        d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl p-2 text-black"> سهولة التسوق و الطلب </h3>
                <p className="font-thin text-md p-2 text-black"> خطوات سهلة وواضحة للتسوق سواء حسب النوع أو من متجر معين
                  عبر واجهات دقيقة </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                  className="cart text-center m-2 p-3 h-52 rounded-lg shadow-xl bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300  cursor-pointer hover:transform hover:-translate-y-6 hover:transition hover:ease-out hover:duration-700 ">
                <div className="icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black"
                       className="bi bi-truck mx-auto" viewBox="0 0 16 16">
                    <path
                        d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                  </svg>
                </div>
                <h3 className="font-semibold p-2 text-xl text-black"> توصيل آمن و سريع </h3>
                <p className="font-thin text-md p-2 text-black"> نتعاقد مع شركات توصيل آمنة وموثوقة لضمان توصيل
                  طلبيتك </p>
              </div>
            </div>
          </div>

          <div className="bay mx-auto flex justify-center">
            <button
                className={`m-5 relative py-3 flex justify-center px-10 bg-white text-fuchsia-800 bg-salte-50 text-base  font-bold nded-full overflow-hidden  rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}>
              <Link href={"/signupSeller"} className="no-underline">
                سجل معنا الآن
              </Link>
            </button>
          </div>
        </div>

        {/* CATIGORIES */}
        <div className={" bg-gradient-to-b from-fuchsia-100  to-fuchsia-700 py-5 pb-16"}>

        <h1 className="flex justify-center mx-auto font-bold text-center relative text-5xl text-fuchsia-800 pt-5 my-16 px-5 w-72  rounded-full"> بارع
          في ! </h1>
        <div className="catigories container grid grid-cols-4 gap-4 ">
          {categories.map((item, index) => (
              <div
                  className="  item mx-auto shadow-sm hover:shadow-xl rounded-full hover:-translate-y-5 transition-all ease-out cursor-pointer hover:text-fuchsia-800"
                  key={index}>
                <div className="relative h-1/2 mx-auto" data-aos="fade-right">
                  <Image
                      src={item.url}
                      width={300}
                      height={300}
                      alt={`Image for ${item.category}`}
                      className="rounded-full shadow-lg w-[15rem] h-[20rem] "
                  />
                </div>
                <div className="absolute text-2xl font-medium  text-center bg-gray-100 bg-opacity-50 w-max h-max rounded-full"
                     data-aos="fade-right">{item.category}</div>
              </div>
          ))}
        </div>

        </div>
      {/*</div>*/}

        {/* STATISTIC */}
        <div className="">
          <h1 className="flex justify-center mx-auto font-bold text-center relative text-5xl bg-fuchsia-700 p-5 pt-16 text-fuchsia-100"> إحصائيات بارع </h1>
          <div className="grid grid-cols-4 gap-4 bg-fuchsia-700 p-6 h-[24rem] ">
            <div className="box text-center border-l-2 my-auto ">
              <div className="text text-lg text-white">
                عدد المتاجر
              </div>
              <div className="num text-4xl  font-bold text-yellow-300">
                <Counter n={100}/>
              </div>
            </div>
            <div className="box text-center  border-l-2 my-auto">
              <div className="text text-lg text-white">
                عدد العملاء
              </div>
              <div className="num  text-4xl  font-bold text-yellow-300">
                50
              </div>
            </div>
            <div className="box text-center  border-l-2 my-auto">
              <div className="text text-lg text-white">
                عدد المنتجات
              </div>
              <div className="num  text-4xl  font-bold  text-yellow-300">
                50
              </div>
            </div>
            <div className="box text-center my-auto">
              <div className="text text-lg text-white">
                عمليات البيع
              </div>
              <div className="num  text-4xl font-bold text-yellow-300">
                50
              </div>
            </div>
          </div>
        </div>

        {/* BEST STORS */}
        <div className="bg-gradient-to-b from-fuchsia-700  to-fuchsia-100 py-5">
          <h1 className="flex justify-center mx-auto font-bold text-center relative text-5xl text-fuchsia-100 pt-5 my-16 px-5 rounded-full">أشهر
            المتاجر على بارع</h1>
          <div className=" w-[50rem] h-[30rem] mx-auto mt-24">
            <div className="my-auto">
              <SwiperComponent/>
            </div>
          </div>
        </div>


        {/* FEEDBACK */}
        <div className="bg-gradient-to-b from-fuchsia-100  to-fuchsia-700 py-5 ">
          <h1 className="flex justify-center mx-auto font-bold text-center relative text-5xl text-fuchsia-700 pt-5 my-16 px-5 rounded-full">
            آراء عملائنا</h1>
          <div className=" w-[50rem] h-[30rem] mx-auto mt-24">
            <div className="my-auto">
              <ClientSwiper/>
            </div>
          </div>
        </div>
      </>
  );
}