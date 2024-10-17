 
import { useWishlist } from "../../context/wishlist.context";
import { useCard } from "../../context/card.context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

 export const Wishlist = ({ product }) => {
    const oldprice = (price, discount) => {
      return Number(
        ((Number(price) * 100) / (100 - Number(discount))) * 84
      ).toFixed(2);
    };
  const navigate=useNavigate();
   const {setproduct}=useCard();
  const {setwishlistreducer}=useWishlist();
    return (
      <div className="border bg-white w-56 drop-shadow-2xl rounded-lg flex flex-col mt-20 gap-2">
        <div className="w-56 ">
        <button onClick={()=>{ setproduct(product)
        navigate('/product');
      }}>
        <img
          className="w-full h-32 rounded-t-lg bg-slate-100 image"
          src={product.thumbnail}
          alt="img"
        ></img></button>
        </div>
        <div>
          <div className="pl-2">
            <p className=" font-bold text-xl">{product.brand}</p>
            <p className=" text-xl text-gray-700">{product.title}</p>
          </div>
          <div className="flex gap-2 items-end pl-2">
            <p className="font-bold text-xl ">Rs.{Number(product.price) * 84}</p>
            <p className="line-through text-gray-700">
              {oldprice(product.price, product.discountPercentage)}
            </p>
          </div>
          <div className=" flex item-center pl-2 justify-between">
            <div>
              <span className="text-xl text-gray-70 0 font-bold">
                {product.rating}
              </span>
              <span className="material-symbols-outlined text-orange-400">
                star
              </span>
            </div>
            <div>
              <span className="text-xl text-orange-500 text-gray-700">
                ({product.discountPercentage} % <b>OFF</b>)
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-auto">
          <button onClick={()=>{
          
            setwishlistreducer({type :"delete",payload : product})
            toast.success("Item remove from wishlist");
            }} 
          className="text-stone-50 w-full px-3 py-1 border-slate-800 rounded-md bg-zinc-950 border hover:opacity-50">
            Remove from wishlist
          </button>
         
        </div>
      </div>
    );
  };
  

  
  
  