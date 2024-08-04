"use client"
import Link from "next/link"
import Image from "next/image";
import basket from "../../../public/images/avatar/img1.png"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const OrderDelivery = ({displayCart,displayAddresses,selectedAddressId}) => {

    return (
        <>
            <div className="container">
                <div className="m-3">
                   <p>  التوصيل إبتدء من (250 دج)</p>
                    <p> خلال 72 ساعة تكون الطلبية في مكتب البريد</p>
                </div>

                <div className="border-2 rounded-2xl px-3 bg-gray-50">
                    <div className="border-b-2 p-2 mx-4 ">
                        <h5 className=" font-extrabold my-2 text-xl"> عناصر الطلبية </h5>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mx-4">
                    {displayCart && displayCart.items && displayCart.items.map((item) => (
                        <div className="border flex p-3 my-4  rounded-md bg-white" key={item.cartItemId}>
                            <Image
                                width={100}
                                height={100}
                                src={item.product.image[0]}
                                alt="image"
                                className="mx-4"
                            />
                            <div className="">
                                <p className="product">المنتج : {item.product.name}</p>
                                <p className="quantity"> الكمية : {item.quantity} </p>
                                <p className="product">السعر : {item.product.price + " (للواحد) "} </p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default OrderDelivery;