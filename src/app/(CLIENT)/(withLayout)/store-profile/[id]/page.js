'use server'

import MyAccount from "@/components/profile/myAccount";
import { follow } from "@/util/serverActions";
import { unFollow } from "@/util/serverActions";
import { storeProfileInfo } from "@/util/serverActions";
import { storeProfileProducts } from "@/util/serverActions";
import { postFavorite, postCart } from "@/util/serverActions";

export default async function StoreProfile() {
  // const storeInfo = await storeProfileInfo();

  return (
    <div className="mt-28">
      <MyAccount follow={follow} unFollow={unFollow} storeInfo={storeProfileInfo} storeProfileProducts={storeProfileProducts} postFavorite={postFavorite} postCart={postCart} />
    </div> 
  );
}
