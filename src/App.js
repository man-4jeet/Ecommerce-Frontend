import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Homepage } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Wishlistpage } from "./pages/Wishlist";
import { useWishlist } from "./context/wishlist.context";
import { wishfilter } from "./utils/wishlist.helper";
import { useEffect, useCallback } from "react";
import { cardfilter } from "./utils/card.helper";
import { useCard } from "./context/card.context";
import { Cardpage } from "./pages/Card";
import { Productpage } from "./pages/Product";
import { Authpage } from "./pages/Auth";
import { ProtectedRoute } from "./context/ProtectedRoute";
import { Checkout } from "./pages/Checkout";
import { addressfilter } from "./utils/address.heplper";
import { useAddress } from "./context/address.context";
import { ToastContainer } from "react-toastify";

function App() {
  const { setwishlist, wishlistreducer } = useWishlist();
  const { setcard, cardreducer, userid } = useCard();
  const { setaddress, addressreducer } = useAddress();

  const getalladdress = useCallback(async () => {
    const add = await addressfilter(
      addressreducer.product,
      addressreducer.type,
      userid
    );
   
    setaddress(add);
  }, [addressreducer.product, addressreducer.type, userid, setaddress]);

  useEffect(() => {
    getalladdress();
  }, [getalladdress]);

  const getWishlistData = useCallback(async () => {
    const data = await wishfilter(
      wishlistreducer.product,
      wishlistreducer.type,
      userid
    );
    setwishlist(data);
  }, [wishlistreducer.product, wishlistreducer.type, userid, setwishlist]);

  useEffect(() => {
    getWishlistData();
  }, [getWishlistData]);

  const getCardData = useCallback(async () => {
    const data = await cardfilter(
      cardreducer.product,
      cardreducer.type,
      userid
    );
    setcard(data);
  }, [cardreducer.product, cardreducer.type, setcard, userid]);

  useEffect(() => {
    getCardData();
  }, [getCardData]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlistpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/card"
          element={
            <ProtectedRoute>
              <Cardpage />
            </ProtectedRoute>
          }
        />
        <Route path="/product" element={<Productpage />} />
        <Route path="/auth" element={<Authpage />} />
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      
      ></ToastContainer>
    </>
  );
}

export default App;