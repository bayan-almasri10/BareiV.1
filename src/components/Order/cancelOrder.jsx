"use client"
import Link from "next/link";
import Image from 'next/image';
import Button from '../Button/Button';
import basket from "../../../public/images/avatar/img1.png"
const cancel = () => {

return (
    <>
        <div className="container shadow-lg rounded-xl my-32">
            <div className="flex flex-col justify-center items-center border-b border-fuchsia-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                     className="bi bi-cart-x text-fuchsia-800 mt-5"
                     viewBox="0 0 16 16">
                    <path
                        d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
                    <path
                        d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
                <h1 className="text-center font-bold text-2xl mb-3 py-3 text-fuchsia-800 ">إلغاء
                    الطلبية</h1>
            </div>

            <div className="container">
                <h3 className="font-thin text-xl mb-2 mt-5">سبب إلغاء الطلبية</h3>
                <select name="" id="" className=' w-96 h-12 rounded-xl border bg-white my-3  p-1' required>
                    <option></option>
                    <option value="طلب مكرر">طلب مكرر</option>
                    <option value="  وجدت عرض أفضل"> وجدت عرض أفضل</option>
                    <option value=" لا أريد الطلب"> لا أريد الطلب</option>
                    <option value="مصاريف التوصيل مرتفعة جدا">مصاريف التوصيل مرتفعة جدا</option>
                    <option value="تغيير عنوان التوصيل">تغيير عنوان التوصيل</option>
                </select>
            </div>
            <div className="container">
                <div className="flex flex-col ">
                    <h5 className="text-xl font-thin mx-3 mt-5 mb-2">عناصر الطلبية </h5>
                    <div className="flex justify-between w-[40rem]  mb-3 border p-2">
                        <div className="flex">
                            <Image
                                width={70}
                                height={70}
                                alt='image'
                                src={basket}
                                className=''
                            />
                            <h3 className="my-auto mx-3">اسم المنتج</h3>
                        </div>
                        <div className="my-auto">
                            <p>الكمية : 4</p>
                            <p>السعر : 994</p>
                        </div>
                    </div>

                    <div className="flex justify-between w-[40rem] mb-3 border p-2">
                        <div className="flex">
                            <Image
                                width={70}
                                height={70}
                                alt='image'
                                src={basket}
                                className=''
                            />
                            <h3 className="my-auto mx-3">اسم المنتج</h3>
                        </div>
                        <div className="my-auto">
                            <p>الكمية : 4</p>
                            <p>السعر : 994</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-[40rem] mb-3 border p-2">
                        <div className="flex">
                            <Image
                                width={70}
                                height={70}
                                alt='image'
                                src={basket}
                                className=''
                            />
                            <h3 className="my-auto mx-3">اسم المنتج</h3>
                        </div>
                        <div className="my-auto">
                            <p>الكمية : 4</p>
                            <p>السعر : 994</p>
                        </div>
                    </div>
                </div>

            </div>
            <Link href={'/orders/cancel-order/cancel-successful'}>
                <Button title={"تأكيد الإلغاء"} bg={"bg-red-500"}/>

            </Link>
        </div>
    </>
);
}
export default cancel;