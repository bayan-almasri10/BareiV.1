'use server'
import OrderDetails from "@/components/Dashboardseller/Orderdetails"; // مكون لعرض تفاصيل الطلب
import { getOrder } from "@/lib/serverActions"

export default async function OrderPage() {

  const order = await getOrder();
  return (
    <>
      <OrderDetails
        orderId={order.id}
        getOrder={getOrder} 
      />
    </>
  );
}



