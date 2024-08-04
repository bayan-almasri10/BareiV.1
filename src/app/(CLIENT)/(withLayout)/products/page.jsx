'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Item } from "@/components/Item/Item";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { getProducts } from "@/util/serverActions";
import { postFavorite, postCart } from "@/util/serverActions";
import ProudectLoading from "@/components/skeletons/ProudectLoading";
import SupNavbar from '@/components/Navbar/supNavbar';

export default function Products() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    if (router.isReady) {
      const { page } = router.query;
      setCurrentPage(parseInt(page) || 1);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await getProducts(currentPage, itemsPerPage);
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / itemsPerPage));
      setLoading(false);
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/products?page=${page}`, undefined, { shallow: true });
  };

  return (
    <>
      <div className="supNav">
        <SupNavbar />
      </div>
      <div className="mt-44">
        <div className="px-4 grid xl:grid-cols-5 md:grid-cols-5 md:gap-1 sm:grid-cols-2 sm:gap-2 sm:p-0 sm:mx-auto mt-5 overflow-hidden">
          {loading ? (
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <ProudectLoading key={index} />
            ))
          ) : (
            products?.map((product) => (
              <div key={product.id}>
                <Item
                  id={product.id}
                  title={product.name}
                  price={product.price}
                  brand={product.brand}
                  image={product.image[0]}
                  category={product.category}
                  description={product.description}
                  stock={product.stock}
                  storeId={product.storeId}
                  storeName={product.storeName}
                  storeImages={product.storeImages}
                  isLiked={product.isLiked}
                  postFavorite={postFavorite}
                  postCart={postCart}
                  inCart={product.inCart}
                />
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center p-5">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="no-underline text-black"
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index} className={'flex'}>
                  <PaginationLink
                    onClick={() => handlePageChange(index + 1)}
                    active={currentPage === index + 1}
                    className="no-underline text-black"
                  >
                    {index + 1}  {/* Display the correct page number */}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="no-underline text-black"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}
