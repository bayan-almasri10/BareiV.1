"use client"
// import { useOrderContext } from "@/context/OrderContext"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const paymentMethod = () => {
    // const { order } = useOrderContext();
    return (
        <>
            <div className="container">
                <div className="bg-gray-50 rounded-t-2xl px-3 mb-3">
                    <div className="flex justify-between  p-2 mx-4 ">
                        <div className={'flex'}>
                            <CheckCircleOutlineIcon className={"text-4xl text-green-500 mx-2 my-auto"}/>
                            <h5 className=" font-extrabold my-2 text-xl"> دفع عند الإستلام </h5>

                            <p className="font-thin mr-3 text-md my-2">
                            (    يتم الدفع نقدا الى الشخص الذي يقوم بالتوصيل او
                                       مكتب التوصيل  )</p>

                        </div>
                    </div>

                </div>

                <div className=" bg-gray-50 rounded-b-2xl  px-3 mb-3">
                <div className=" ">
                    <div className="flex justify-between mx-4 p-2">
                        <div className={'flex'}>
                            <CheckCircleOutlineIcon className={"text-4xl text-slate-300 mx-2  my-auto"}/>
                            <h5 className="font-extrabold my-2 text-slate-300 text-xl"> دفع عن طريق البطاقة</h5>
                            <p className="font-thin mr-3 text-xl text-green-600 my-2">ستتوفر قريبا</p>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
export default paymentMethod;