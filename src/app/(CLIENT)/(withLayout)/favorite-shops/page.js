export const dynamic = "force-dynamic";

import FavoriteShops from "@/components/component/favorite-shops"
import { getFavoriteStores } from "@/util/serverActions";

async function FavoriteShop() {
  const stores = await getFavoriteStores();
  
  return (
    <div className="my-16 mx-auto">
        <FavoriteShops stores={stores}/>
    </div>
  );
}

export default FavoriteShop;