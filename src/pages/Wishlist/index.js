import { Header } from "../../component/Header";
import { Wishlist } from "../../component/Wishlist";

import { useWishlist } from "../../context/wishlist.context";
import { useNavigate } from "react-router-dom";
export const Wishlistpage = () => {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  return (
    <div>
      <Header />
      <main className="mt-16">
        <div className="flex flex-wrap gap-3 ml-12 ">
          {wishlist?.length > 0 ? (
            wishlist.map((product) => (
              <Wishlist key={product._id} product={product} />
            ))
          ) : (
            <div className="flex items-center justify-center w-full">
              <div className="flex  items-center justify-center border bg-cyan-50 drop-shadow-2xl w-1/2 h-[32rem]">
                <div className="flex flex-col h-[16rem] w-1/2 border drop-shadow-2xl bg-cyan-100 items-center ">
                  <h1 className="my-8">--- YOUR WISHLIST IS EMPTY---</h1>
                  <button
                    className="my-2 h-12 w-[12rem] rounded-lg border text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50"
                    onClick={() => navigate("/")}
                  >
                    Click to add in wishlist
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
      </main>
    </div>
  );
};
