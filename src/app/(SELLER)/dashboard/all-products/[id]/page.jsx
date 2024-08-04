"use server";
import ModifyProduct from "@/components/Dashboardseller/ModifyProduct";
import { getProduct , putModifyProduct } from "@/lib/serverActions";

export default async function ModifyProductPage() {
  return (
    <>
      <ModifyProduct 
         putModifyProduct={putModifyProduct}
         getProduct={getProduct} 
       />
    </>
  );
}