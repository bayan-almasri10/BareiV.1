"use client"
import Image from 'next/image';
import {getOrderDetails} from '@/util/serverActions';
import {useEffect, useState} from 'react';
function OrderDetails( {getOrderDetails}) {
    // get the url of the order
    const url = new URL(window.location.href).toString();
    const id = url.split('/')[4];
    const [order, setOrder] = useState('');

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const orderDetails = await getOrderDetails(id);
                setOrder(orderDetails);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrderDetails();
    }, [id, getOrderDetails]);
    console.log(order);
    console.log(id)
    return (
        <>
            <div className="my-32 shadow-xl rounded-md px-3 ">
                <div className="flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         className="bi bi-layout-text-sidebar text-fuchsia-800 text-center  mx-auto mt-12" viewBox="0 0 16 16">
                        <path
                            d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                        <path
                            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9z"/>
                    </svg>
                    <h1 className="text-center font-bold text-2xl mb-5  py-3 text-fuchsia-800 border-b border-fuchsia-800">تفاصيل
                    الطلبية</h1>
                </div>
                <div className="container py-5 flex">
                    <div className={'flex flex-col mx-auto w-1/3'}>
                        <div
                            className="container p-3 mb-5 border  shadow-md bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl">
                            <h3 className={'text-xl font-bold text-yellow-600 mb-5 mx-1 pb-4 mt-0'}>معلومات
                                الطلبية</h3>
                            <p className="mx-2 text-md font-semibold ">رقم الطلبية : <span
                                className=" font-light">{order?.orderId} #</span></p>

                            <p className="mx-2  my-3 text-md font-semibold">تاريخ الطلبية : <span
                                className=" font-light">{order?.date}</span></p>

                            <p className="mx-2 text-md font-semibold">مكان توصيل الطلبية : <span
                                className=" font-light">{order?.address}</span></p>
                        </div>


                        <div
                            className="container p-3 mb-5 border  shadow-md  rounded-xl bg-gradient-to-r from-gray-50 via-white to-gray-50">
                            <h3 className={'text-xl font-bold text-yellow-600 mb-5 mx-1 mt-0'}>إجمالي الطلبية</h3>
                                <p className="m-2 text-md font-semibold"> اجمالي السعر : <span
                                    className=" font-light">{order?.orderTotal} دج</span></p>
                                <p className="m-2 text-md font-semibold"> تكلفة التوصيل : <span
                                    className="text-yellow-600 font-light">56000 دج</span></p>
                                <p className="m-2 text-md font-semibold"> اجمالي سعر الطلبية : <span
                                    className="text-green-800 font-light">  {order?.orderTotal + 56000} دج</span></p>
                        </div>

                        <div className="container p-3 mb-5 border shadow-md  rounded-xl bg-gradient-to-r from-gray-50 via-white to-gray-50">
                            <h3 className={'text-xl font-bold text-yellow-600 mb-5 mx-1 mt-0'}>حالة الطلبية</h3>
                                <p className="m-2 text-md font-semibold">الحالة : <span
                                    className="text-green-500 font-light">{order?.status}</span></p>
                                <p className="m-2 text-md font-semibold"> تاريخ التوصيل : <span
                                    className=" font-light">{order?.deliveryAt}</span></p>
                                {/* <p className="m-2 text-md font-semibold"></p> */}
                        </div>
                    </div>

                    <div
                        className="container py-3 mb-5 border shadow-md mr-5 h-max rounded-xl bg-gradient-to-r from-gray-50 via-white to-gray-50">
                        <div className="flex flex-col ">
                            <h5 className={'text-xl  font-bold text-yellow-600 mb-5 mx-2 mt-0'}>عناصر الطلبية </h5>
                            <div className="container grid grid-cols-2 w-fit mb-3 p-2 gap-3">
                                {order?.items?.map((item) => (
                                    <div
                                        className="container flex-col w-full mb-3 border-1 bg-white  rounded-sm  shadow-sm p-2"
                                        key={item.id}>
                                        <div className="flex flex-col">
                                            <Image
                                                width={150}
                                                height={150}
                                                alt='image'
                                                src={item.productImage[0]}
                                                className='shadow-sm mx-auto'
                                            />
                                            <div className=" flex bg-slate-100 p-1 rounded-md">
                                                <h3 className="my-auto mx-3">{item.productName}</h3>
                                                <h5 className="my-auto font-light text-sm mx-3">{item.storeName}</h5>
                                            </div>
                                        </div>
                                        <div className="my-auto bg-slate-100 p-1 rounded-md mt-1">
                                            <p className="text-sm font-normal text-gray-600">الكمية :<span
                                                className="font-light">{item.quantity}</span></p>

                                            <p className="text-sm font-normal text-gray-600">السعر :<span
                                                className="font-light">{item.price}</span></p>

                                            <p className="text-sm font-normal text-gray-600">السعر الإجمالي:<span
                                                className="font-light"> {item.total}</span></p>
                                        </div>
                                        </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetails;


function ArrowLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
        </svg>
    )
}


function BellIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
        </svg>
    )
}


function ChevronLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6"/>
        </svg>
    )
}


function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6"/>
        </svg>
    )
}


function CreditCardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}


function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LineChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    )
}


function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}


function PackageIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}


function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}