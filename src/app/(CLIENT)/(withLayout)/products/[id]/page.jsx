'use server'
import { getProductsItem ,postFavorite ,postCart,GetFeedback , postFeedback } from "@/util/serverActions";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
const Product = async () => {
    return (
        <>
        <ProductDetails fetchedProduct={getProductsItem} postFavorite={postFavorite} postCart={postCart} GetFeedback={GetFeedback} postFeedback={postFeedback} />
        </>
    );
}
export default Product;