export const dynamic = "force-dynamic";

import Allproducts from "@/components/Dashboardseller/Allproducts"
import EmptyProducte from "@/components/Dashboardseller/EmptyProducte";
import {getProducts ,deleteProduct} from "@/lib/serverActions"
export default async function AllProductsPage () {
  const Products= await getProducts()
  return (
    <div> 
      {Products?.products?.length > 0 ? 
        <Allproducts   deleteProduct={deleteProduct} />
        :
        <EmptyProducte/>
      }
    </div>
  );
}