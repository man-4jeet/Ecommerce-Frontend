import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Filterprovider } from "./context/filter.context";
import { Wishlistprovider } from "./context/wishlist.context";
import { Cardprovider } from "./context/card.context";
import { Addressprovider } from "./context/address.context";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Filterprovider>
        <Wishlistprovider>
          <Cardprovider>
            <Addressprovider>
            <App />
            </Addressprovider>
          </Cardprovider>
         
        </Wishlistprovider>
      </Filterprovider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
