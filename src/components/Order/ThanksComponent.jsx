'use server'

import OrderCheked from "../../../public/images/order2.jpg"
import Image from 'next/image';
import Link from 'next/link';
// import {getOrders} from "@/util/serverActions";
async function ThanksPage() {
    // const orders = await getOrders()
    return (
        <>
            <div className="container shadow-xl rounded-xl  flex my-44 justify-center items-center  ">

                <div className="flex flex-col justify-center items-center  ">
                    <h1 className="text-3xl font-bold m-2">شكرا لطلبك من بارع </h1>
                    {/* <p className="text-lg font-thin my-2"> رقم الطلبية :<span> {orders[3]?.id}      # </span></p> */}
                    <div className="flex flex-col my-auto">
                    </div>
                    <Link href={"/orders"} className="my-5">
                        <button className="bg-yellow-500 p-2 text-white rounded-xl h-fit my-auto hover:bg-yellow-600">عرض
                            تفاصيل الطلبية
                        </button>
                    </Link>
                </div>
                <Image src={OrderCheked} alt="order" className="rounded-xl" width={400} height={400}/>
            </div>
        </>
    )
}

export default ThanksPage;