export const dynamic = "force-dynamic";

import Allorder from "@/components/Dashboardseller/Allorder";
import EmptyOrder from "@/components/Dashboardseller/EmptyOrder";
import {getOrders} from "@/lib/serverActions"
export default async function AllorderPage () {
  const Orders= await getOrders()
  return (
    <div> 
      {Orders?.orders?.length > 0 ? 
        <Allorder/>
        :
        <EmptyOrder/>
      }
    </div>
  );
}