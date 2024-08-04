"use client";

import * as React from 'react';
import {useState, useEffect } from "react";
import OrderAddress from './OrderAddress';
import OrderDelivery from "./OrderDelivery"
import PaymentMethod from './paymentMethod';
import Button from '../Button/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmptyAddress from "@/components/Order/EmptyAddress";
import ItemAddress from "@/components/Order/ItemAddress";
import Link from 'next/link';
import AddIcon from "@mui/icons-material/Add";
import {deleteAddress, postAddress, postOrder} from "@/util/serverActions";
import { useToast } from "@/components/ui/use-toast"

function OrderPage({ displayAddresses, postAddress, deleteAddress, displayCart, postOrder }) {
    const { toast } = useToast();

   const [selectedAddressId, setSelectedAddressId] = useState(null);

    const handleSelectAddress = (addressId) => {
        setSelectedAddressId(addressId);
    };


  const [currentComponent, setCurrentComponent] = useState('');
  useEffect(() => {
    if (displayAddresses?.address.length < 1) {
      setCurrentComponent('EmptyAddress');
    } else {
      setCurrentComponent('ItemAddress');
    }
  }, [displayAddresses]);

  const handleComponentChange = (newComponent) => {
    setCurrentComponent(newComponent);
  };

  const handleOrderConfirmation = () => {
    if (selectedAddressId) {
      postOrder(displayCart.cartId, selectedAddressId);
    } else {
      toast({
        title: "تأكد من اختيار العنوان",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };
console.log(displayAddresses)
    return (
    <section className="pt-0 my-16" >
      <div className="hidden lg:grid pb-6 ">
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-card-list text-fuchsia-700 mt-5"
               viewBox="0 0 16 16">
            <path
                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
            <path
                d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
          </svg>
          <h2 className="text-center font-semibold text-2xl mb-5 mt-2 text-fuchsia-700">معلومات الطلبية</h2>
        </div>
        <div className="border-1 shadow-md p-3 rounded-xl shadow-fuchsia-100 mb-5">
          <div className="flex m-4 border-b border-fuchsia-700 pb-3">
            <CheckCircleOutlineIcon className='text-skate-400 mx-3 my-auto text-fuchsia-800'/>
            <h3 className='text-fuchsia-700 font-extrabold text-xl'> 1. عنوان العميل </h3>
          </div>
          {displayAddresses?.address.length == 0 ? (
              <>
                {currentComponent === 'EmptyAddress' && (
                    <EmptyAddress onClick={handleComponentChange}/>
                )}
                {currentComponent === 'OrderAddress' && (
                    <OrderAddress onClick={handleComponentChange} postAddress={postAddress}/>
                )}
              </>
          ) : (
              <>
                {currentComponent === 'ItemAddress' && (
                    <ItemAddress onClick={handleComponentChange} displayAddresses={displayAddresses}
                                 postAddress={postAddress} deleteAddress={deleteAddress} onSelectAddress={handleSelectAddress} />
                )}
                {currentComponent === 'EmptyAddress' && (
                    <EmptyAddress onClick={handleComponentChange}/>
                )}
                {currentComponent === 'OrderAddress' && (
                    <OrderAddress onClick={handleComponentChange} postAddress={postAddress}/>
                )}
              </>
          )
          }
        </div>

        <div className="border-1 shadow-md  shadow-fuchsia-100  p-3 rounded-xl  mb-5">
          <div className="flex m-4 border-b border-fuchsia-500 pb-3">
            <CheckCircleOutlineIcon className='text-skate-400 mx-3 my-auto text-fuchsia-800'/>
            <h3 className='text-fuchsia-700 font-extrabold text-xl'> 2. تفاصيل التوصيل </h3>
          </div>
          <OrderDelivery displayCart={displayCart} displayAddresses={displayAddresses}/>
        </div>

        <div className="border-1 shadow-md  p-3 rounded-xl shadow-fuchsia-100 mb-5">
          <div className="flex m-4 border-b border-fuchsia-500 pb-3">
            <CheckCircleOutlineIcon className='text-skate-400 mx-3 my-auto text-fuchsia-800'/>

            <h3 className='text-fuchsia-700 font-extrabold text-xl'> 3. طرق الدفع </h3>
          </div>
          <PaymentMethod/>
        </div>

        <div className="border-1 shadow-md  shadow-fuchsia-100  p-3 rounded-xl  mb-5">
          <div className="flex m-4 border-b border-fuchsia-500 pb-3">
            <CheckCircleOutlineIcon className='text-skate-400 mx-3 my-auto text-fuchsia-800'/>
            <h3 className='text-fuchsia-700 font-extrabold text-xl'> 4.الفاتورة الإجمالية </h3>
          </div>

          <div className="mx-16">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">السعر الإجمالي</p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900"> {displayCart?.total} دج</h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
              <p className="font-normal text-xl leading-8 text-gray-400">تكلفة التوصيل</p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900"> 500 دج</h6>
            </div>
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">التكلفة الكلية</p>
              <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                {displayCart.total + 500} دج</h6>
            </div>
          </div>

        </div>

          <div className="bay mx-auto flex justify-center">
            <Link href={selectedAddressId ? "/orders/success-order" : "#"}>
            <button
              className={`m-5 relative py-3 flex justify-center px-10 text-white text-base font-bold nded-full overflow-hidden bg-green-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}
              onClick={() => {
                handleOrderConfirmation()
              }}
            >
              تأكيد الطلبية
              </button>
              </Link>
          </div>
      </div>
    </section>
    )
}
export default OrderPage;