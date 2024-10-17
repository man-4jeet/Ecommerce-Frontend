import { useNavigate } from "react-router-dom";
import { useCard } from "../../context/card.context";
import { useWishlist } from "../../context/wishlist.context";
import { useState } from "react";
import { useAddress } from "../../context/address.context";
import { toast } from "react-toastify";
export const Product = (product) => {
  const [count,setcount]=useState(1);
  product = product.product;
  const navigate = useNavigate();
  
  const {setstatus}=useAddress()
  const array = product.images;
  const oldprice = (price, discount) => {
    return Number(
      ((Number(price) * 100) / (100 - Number(discount))) * 84
    ).toFixed(2);
  };
  const { setcardreducer, card,setdirect } = useCard();
  const { setwishlistreducer, wishlist } = useWishlist();
  
  const findProductInWishlist = (wishlist, productId) =>
  {
     const flag=wishlist?.length>0?wishlist.some((prod) => prod._id === productId):false;
    return flag;
   }
  const isInWishlist = findProductInWishlist(wishlist, product._id);

  const findProductInCard = (card, productId) =>
    card?.some((prod) => prod._id === productId)
  const isInCard = findProductInCard(card, product._id);

 


  return (
    <div className="mt-16 flex flex-row gap-4">
      <div className="flex flex-wrap gap-3 w-1/2 bg-cyan-50 ">
        {array?.length > 0 ? (
          array.map((url) => {
            return <img className="h-60 w-56" src={url} alt="imag"></img>;
          })
        ) : (
          <></>
        )}{" "}
      </div>
      <div className="w-[42rem] h-[40rem] border flex  items-center justify-center drop-shadow-2xl bg-cyan-50">
        <div className="right flex flex-col items-center h-[34rem] border w-[36rem] bg-cyan-100 drop-shadow-2xl ">
          <div className="brand border  flex my-2 items-center font-bold text-xl flex-col  drop-shadow-2xl">
            {" "}
            <p>{product.brand}</p>{" "}
          </div>
          <div className="title  flex  items-center my-2 text-xl flex-col  ">
            {" "}
            <p>{product.title}</p>{" "}
          </div>
          <div className="description  px-4 flex  text-xl items-center  flex-col ">
            {" "}
            <p>{product.description}</p>
          </div>
          <div className="my-2">
            <div className="flex gap-2 items-end items-center  ">
              <p className="font-bold text-xl mx-3">
                Rs.{Number(product.price)*count * 84}
              </p>
              <p className="line-through text-gray-700 mx-3">
                {oldprice(product.price, product.discountPercentage)*count}
              </p>
              <span className="text-xl text-orange-500 text-gray-700 mx-3">
                ({product.discountPercentage} % <b>OFF</b>)
              </span>
            </div>
          </div>
          <div className="flex items-center my-2  flex-col">
            <div className="reting flex    items-center   ">
              <span className="text-xl text-gray-70 0 font-bold">
                {`Rating--    ${product.rating}`}
              </span>
              <span className="material-symbols-outlined text-orange-400">
                star
              </span>
            </div>
          </div>
          
          <div className="flex gap-2 my-3 items-center font-bold text-xl">
            <h1 className="mr-3">No of item--</h1><button onClick={()=>setcount((count=> {if(count>1)
              return count-1
              else{
                toast.warning("item can not be less than 1")
                return count;
              }
              }))} className="border w-5 bg-cyan-400 h-5 flex justify-center pb-1 items-center hover:opacity-50 rounded-full">-</button>{count}<button onClick={()=>setcount((count)=>
                {if(count<product.stock)
                  return count+1
                  else{
                    toast.warning("more item are not in stock")
                    return count;
                  }
                  })} className="border hover:opacity-50 w-5 h-5 pb-1 flex justify-center items-center bg-cyan-400 rounded-full">+</button>
          </div>
            <button
              onClick={() => {
                setwishlistreducer({ type: "post", payload: product });
                toast.success("item added to wishlist")
              }}
              disabled={isInWishlist}
              className={`text-stone-50  px-3 my-2 w-[10rem] h-[3rem] border-slate-800 rounded-md bg-amber-600 border ${
                isInWishlist ? "opacity-50" : "hover:opacity-50"
              }`}
            >
              {isInWishlist ? "Added in wishlist" : "Add to Wishlist"}
            </button>
          
          
            <button
              onClick={() => {
                setcardreducer({ type: "post", payload: product });
                toast.success("item added to cart")
              }}
              disabled={isInCard}
              className={`text-stone-50  px-3 my-2 w-[10rem] h-[3rem]  border-slate-800 rounded-md bg-amber-600 border ${
                isInCard ? "opacity-50" : "hover:opacity-50"
              }`}
            >
              {isInCard ? "Addedd in cart" : " Add to cart"}
            </button>
          
          
            <button
              className="font-bold text-xl hover:opacity-50  px-3 my-2 w-[10rem] h-[3rem]  border-slate-800 rounded-md bg-amber-600 border "
              onClick={()=> { setstatus({count:count,amount:Number(product.price)*count * 84 +100});
              setdirect(true);
            navigate("/checkout")
          }}
            >
              Checkout
            </button>
          
        </div>
      </div>
    </div>
  );
};
