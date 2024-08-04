    'use client'
    import React, { useEffect, useState } from "react";
    import { getSearch, postCart, postFavorite } from "@/util/serverActions";
    import { useSearchParams } from "next/navigation";
    import Image from "next/image";
    import { Item } from "@/components/Item/Item";
    import SupNavbar from '@/components/Navbar/supNavbar';
import EmptySearch from "@/components/EmptyPage/EmptySearch"
    function SearchPage() {
        const query = useSearchParams().get('q');
        const [searchResults, setSearchResults] = useState([]);
        const [cart, setCart] = useState([]);
        const [fav, setFav] = useState([]);

        useEffect(() => {
            const fetchSearch = async () => {
                try {
                    const results = await getSearch(query);
                    setSearchResults(results.products);
                    console.log('searchResults', results.products);
                } catch (error) {
                    console.error('Error fetching', error);
                }
            };

            const fetchPostCart = async () => {
                try {
                    const cart = await postCart();
                    setCart(cart);
                } catch (error) {
                    console.error('Error fetching', error);
                }
            };

            const fetchPostFavorite = async () => {
                try {
                    const fav = await postFavorite();
                    setFav(fav);
                } catch (error) {
                    console.error('Error fetching', error);
                }
            };

            fetchSearch();
            fetchPostCart();
            fetchPostFavorite();
        }, [query]);

        return (
            <>
            <SupNavbar/>
                {searchResults.length === 0 ? (
                    <div className="w-2/3 mx-auto my-44 px-3">
                           <EmptySearch/>
                    </div>
                ) : (
            <div className="my-44 px-3 gap-2 grid grid-cols-5">
                        
                    {searchResults.map((product) => (
                        <div key={product.id}>
                            <Item
                                id={product.id}
                                title={product.name}
                                price={product.price}
                                storeName={product.store.storeName}
                                storeImages={product.store.storeImages}
                                image={product.image[0]}
                                postCart={postCart}
                                postFavorite={postFavorite}
                            />
                        </div>
                            ))}
            </div>
                            
                )}
            </>
        );
    }

    export default SearchPage;
