"use server"
import OrderDetails from "@/components/Order/OrderDetails"
import {getOrderDetails} from '@/util/serverActions';

async function  Details() {
    return (
        <>
            <div className="container">
                <OrderDetails getOrderDetails={getOrderDetails}/>
            </div>
        </>
    );
}
export default Details;