import { useContext, createContext, useReducer } from "react";
import { filterfxn } from "../reducer/filter.reducer";
const Filtercontext = createContext();

const initialvalue = {
  sortbyprice: "",
  discount: "0",
};

export const Filterprovider = ({ children }) => {

    const [{sortbyprice,discount},setfilter]=useReducer(filterfxn,initialvalue)
  return <Filtercontext.Provider value={{sortbyprice,discount,setfilter}} >{children}
  </Filtercontext.Provider>;
};


export const useFilter=()=> useContext(Filtercontext);
