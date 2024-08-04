import FavPage from "@/components/FavCart/FavPage";
import EmptyFav from "@/components/EmptyPage/EmptyFav";
import {useFavContext} from "@/context/FavContext";
import {deleteFavorite, deleteFavoriteItem, getFavorite, postCart} from "@/util/serverActions";

export default async function favorite() {
  const fav = await getFavorite();


  return (
    <div>
      <div className="favorite container my-5">
        <div className="border-2 rounded-lg shadow-lg  my-32">
          <div className="flex flex-col border-b border-fuchsia-800 mb-4 mx-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                 className="bi bi-bag-heart mx-auto mt-3 text-fuchsia-800" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                    d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
            </svg>
            <h3 className="mx-5 text-3xl font-thin text-center p-3 text-fuchsia-800">المنتجات التي أعجبتك</h3>
          </div>
          <div className="border-1 rounded-lg m-2 mt-4 p-2 shadow-sm">
            {fav?.favorites?.length > 0 ?
                <FavPage fav={fav?.favorites} postCart={postCart} deleteFavorite={deleteFavorite} deleteFavoriteItem={deleteFavoriteItem}/>
                :
                <EmptyFav/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}