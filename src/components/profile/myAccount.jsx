'use client'
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import React, { useState, useEffect } from 'react';
import avatar from "../../../public/images/avatar/img1.png";
import { follow } from "@/util/serverActions";
import { unFollow } from "@/util/serverActions";
import { ProfileItem } from "../Item/profileItem";

export default function MyAccount({ follow, unFollow, storeInfo, storeProfileProducts ,postCart,postFavorite,isFollowed}) {
    const url = new URL(window.location.href).toString();
    const id = url.split('/')[4].split('id=')[1].split('&')[0];
    const [store, setStore] = useState({});
    const [storeProducts, setStoreProducts] = useState([]);
    const [followStore, setFollowStore] = useState(isFollowed ? 'إلغاء المتابعة' : 'متابعة');

    useEffect(() => {
        const fetchStoreProfileInfo = async () => {
            try {
                const profileInfo = await storeInfo(id);
                setStore(profileInfo);
            } catch (error) {
                console.error('Error fetching store profile info:', error);
            }
        };

        const fetchStoreProfileProducts = async () => {
            try {
                const profileProducts = await storeProfileProducts(id);
                setStoreProducts(profileProducts || []);
            } catch (error) {
                console.error('Error fetching store profile products:', error);
            }
        };

        fetchStoreProfileInfo();
        fetchStoreProfileProducts();
    }, [id, storeInfo, storeProfileProducts]);

    console.log('storeProducts' , storeProducts);

    const [isFollowing, setIsFollowing] = useState(false);
    const [followersCount, setFollowersCount] = useState(0);

    const handleFollowToggle = () => {
        setIsFollowing(!isFollowing);
        if (isFollowing) {
            setFollowersCount(prevCount => prevCount - 1);
            unFollow(id); 
        } else {
            setFollowersCount(prevCount => prevCount + 1);
            follow(id); 
        }
    };

    return (
        <div>
            <div className="profile">
                <div className="ProfileInfo container py-3 box-border flex justify-between my-16 border-b-2 bg-slate-50 rounded-xl shadow-sm ">
                    <div className="profile-card flex mr-12">
                        <Image
                            src={store?.store?.storeImages || avatar}
                            className="rounded-full my-auto w-44 h-44"
                            alt="profile"
                            width={100}
                            height={100}
                        />
                        <div className="text-2xl my-auto mx-4">
                            <div className="flex">
                                <h1 className="my-auto">{store?.store?.storeName}</h1>
                                <p className="py-1 px-3 bg-fuchsia-200 border-fuchsia-600 text-sm font-medium my-auto rounded-full mx-3">
                                    {store?.store?.category}
                                </p>
                            </div>
                            <h6 className="font-light text-sm mt-3">{store?.store?.storeDescription}</h6>
                        </div>
                    </div>
                    <div className="flex gap-4 max-h-10 my-auto mr-12">
                        <span className="text-center border-l-2 border-gray-400 pl-4">
                            {store?.store?.followers}<br />
                            المتابعين
                        </span>
                        <span className="text-center">{store?.store?.productsCount}<br />
                            المنتجات
                        </span>
                        <div className="tooltip-container mx-7">
                            <button className="text bg-fuchsia-700 text-white py-2 px-3 rounded-lg" onClick={handleFollowToggle}>
                                {followStore}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ProfileProducts container p-3 bg-slate-50 rounded-xl shadow-sm  grid xl:grid-cols-4 md:grid-cols-4 md:gap-1 sm:grid-cols-2 gap-2 sm:gap-2 sm:p-0 sm:mx-auto mt-4 overflow-hidden mx-auto mb-44">
                    {storeProducts?.products?.map((product) => (
                        <div className="w-fit grid grid-cols-4 gap-4" key={product.id}>
                            <ProfileItem
                                id={product.id}
                                title={product.name}
                                price={product.price}
                                image={product.image[0]}
                                category={product.category}
                                description={product.description}
                                isLiked={product.isLiked}
                                postFavorite={postFavorite}
                                postCart={postCart}
                                inCart={product.inCart}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
