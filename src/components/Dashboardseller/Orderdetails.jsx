"use client";
import QontoConnector from "./QontoConnector";
import Image from "next/image";
import { getOrder } from "@/lib/serverActions";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { format } from "date-fns";
import { putOrder } from "@/lib/serverActions";

function OrderDetails() {
  const url = new URL(window.location.href).toString();
  const id = Number(url.split("/")[5]);
  const [order, setOrder] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderData = await getOrder(id);
        setOrder(orderData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchOrderData();
  }, [id]);

  const steps = ["Step 1", "Step 2", "Step 3"];
  const [isAccepted, setIsAccepted] = useState(false);
  const handleButtonClick = () => {
    setIsAccepted(!isAccepted);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleOrderStatusChange = async (accepted) => {
    try {
      const response = await putOrder(accepted, id);
      if (response && response.success) {
        setSnackbarMessage(accepted ? "تم قبول الطلبية" : "تم رفض الطلبية");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setOpenSnackbar(true);
    }
  };

  return (
    <div className=" pt-3">
      <div className="pl-12 pr-72 py-3 h-auto w-auto mt-5">
        <div className="container py-3 mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
          <div className="flex flex-col">
            <h1 className="text-center font-bold text-2xl mb-5 py-3 text-fuchsia-800 border-b border-fuchsia-800">
              تفاصيل الطلبية
            </h1>
          </div>

          {order ? (
            <div className="container py-5">
              <div className="container py-3 mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
                <h3 className="text-xl font-bold text-fuchsia-800 mb-5 mx-2 mt-0">
                  معلومات الطلبية
                </h3>
                <div>
                  <p className="mx-5 text-lg font-semibold">
                    رقم الطلبية:{" "}
                    <span className="font-light">#{order.orderId}</span>
                  </p>
                  <p className="mx-5 my-3 text-lg font-semibold">
                    تاريخ الطلبية:{" "}
                    <span className="font-light">
                      {order.orderDate}
                    </span>
                  </p>
                  <p className="mx-5 text-lg font-semibold">
                    مكان توصيل الطلبية:{" "}
                    <span className="font-light">{order.address}</span>
                  </p>
                </div>
              </div>

              <div className="container py-3 mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
                <h5
                  className={
                    "text-xl font-bold text-fuchsia-800 mb-5 mx-2 mt-0"
                  }
                >
                  عناصر الطلبية
                </h5>
                <div className="grid grid-cols-2 gap-3 border border-fuchsia-800 container mb-3 ">
                  {order.items.map((item) => (
                    <div
                      key={item.orderItemId}
                      className="border flex gap-12 my-3  border-fuchsia-800 shadow-sm p-3 rounded-xl"
                    >
                      <Image
                        src={item.productImage[0]}
                        alt={item.productName}
                        width={150}
                        height={120}
                        className="rounded-sm"
                      />
                      <div className="my-auto">
                        <p className="text-sm font-normal text-gray-600">
                          المنتج :{" "}
                          <span className=" font-light">
                            {item.productName}{" "}
                          </span>
                        </p>
                        <p className="text-sm font-normal text-gray-600">
                          الكمية :{" "}
                          <span className=" font-light">{item.quantity}</span>
                        </p>
                        <p className="text-sm font-normal text-gray-600">
                          السعر :
                          <span className=" font-light">{item.price}</span>
                        </p>
                        <p className="text-sm font-normal text-gray-600">
                          السعر الإجمالي:
                          <span className=" font-light"> {item.total}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="container py-3 mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
                <h3 className="text-xl font-bold text-fuchsia-800 mb-5 mx-2 mt-0">
                  إجمالي الطلبية
                </h3>
                <p className="m-3 text-lg font-semibold">
                  اجمالي السعر:{" "}
                  <span className="font-light">{order.orderTotal} دج</span>
                </p>
                <p className="m-3 text-lg font-semibold">
                  تكلفة التوصيل :{" "}
                  <span className="font-light">{order.orderTotal}</span>
                </p>
                <p className="m-3 text-lg font-semibold">
                  اجمالي سعر الطلبية :
                  <span className="font-light">{order.orderTotal}</span>
                </p>
              </div>

              <div className="flex justify-center gap-5 p-5">
                <button
                  onClick={() => handleOrderStatusChange(true)}
                  className="bg-fuchsia-600 w-32 hover:bg-fuchsia-700 duration-600 text-white px-4 py-2 rounded-full"
                >
                  قبول
                </button>
                <button
                  onClick={() => handleOrderStatusChange(false)}
                  className="bg-red-500 hover:bg-red-600 duration-600 w-32 text-white px-4 py-2 rounded-full"
                >
                  رفض
                </button>
                <Snackbar
                  open={openSnackbar}
                  autoHideDuration={2000}
                  onClose={() => setOpenSnackbar(false)}
                  message={snackbarMessage}
                  ContentProps={{
                    style: {
                      backgroundColor: "white",
                      color: "black",
                      fontSize: "17px",
                    },
                  }}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="text-center mt-20 text-slate-700 mr-80">
        <p>&copy; جميع الحقوق محفوظة لشركة بارع 2024</p>
      </div>
    </div>
  );
}

export default OrderDetails;
