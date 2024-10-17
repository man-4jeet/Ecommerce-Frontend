import {
  useContext,
  createContext,
  useReducer,
  useState 
} from "react";

import { wishlistfxn } from "../reducer/wishlist.reducer";
const Wishlistcontext = createContext();

const initialvalue = {   
  type: "",
  product: {}
};

export const Wishlistprovider = ({ children }) => {
  const [wishlist, setwishlist] = useState([]);
  const [wishlistreducer, setwishlistreducer] = useReducer(
    wishlistfxn,
    initialvalue
  );
  return (
    <Wishlistcontext.Provider
      value={{ wishlist, setwishlist, wishlistreducer, setwishlistreducer }}
    >
      {children}
    </Wishlistcontext.Provider>
  );
};

export const useWishlist = () => useContext(Wishlistcontext);
