 
import { useCard } from "../../context/card.context"; 
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import { toast } from "react-toastify";

export const Card = ({ product }) => {


   const oldprice = (price, discount) => {
     return Number(
       ((Number(price) * 100) / (100 - Number(discount))) * 84
     ).toFixed(2);
   };
const [count,setcount]=useState(1);
  const navigate=useNavigate()
 const {setcardreducer,setproduct,setcartlist}=useCard();


useEffect(()=>
  setcartlist((list) => ({
    ...list,
    [product.price]: count
  })),[product.price,setcartlist,count,product]);
 

   return (
     <div className="border bg-cyan-50  drop-shadow-2xl rounded-lg flex  gap-2">
       <div className=" ">
       <button onClick={()=>{ setproduct(product)
        navigate('/product');
      }}>
        <img
          className="w-80 h-56 rounded-t-lg bg-slate-100 image"
          src={product.thumbnail}
          alt="img"
        ></img></button>
       </div>
       <div className=" w-80">
         <div className="pl-2">
           <p className=" font-bold text-xl my-2">{product.brand}</p>
           <p className=" text-xl text-gray-700 my-2">{product.title}</p>
         </div>
         <div className="flex gap-2 items-end pl-2 my-2">
           <p className="font-bold text-xl ">Rs.{Number(product.price) * 84}</p>
           <p className="line-through text-gray-700">
             {oldprice(product.price, product.discountPercentage)}
           </p>
         </div>
         <div className=" flex item-center pl-2 gap-4 my-2">
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
         <div className="flex gap-2 my-3 items-center font-bold text-xl">
            <h1 className="mr-3">No of item--</h1><button onClick={()=>setcount((count=> {if(count>1)
              return count-1
              else{
                toast.warning("item can not be less than 1")
                return count;
              }
              }))} className="border w-5 bg-cyan-400 h-5 flex justify-center pb-1 items-center hover:opacity-50 rounded-full">-</button>{count}<button onClick={()=>setcount((count)=>{if(count<product.stock)
                return count+1
                else{
                  toast.warning("more item are not in stock")
                  return count;
                }
                })} className="border hover:opacity-50 w-5 h-5 pb-1 flex justify-center items-center bg-cyan-400 rounded-full">+</button>
          </div>
          <button
  onClick={() => {
    setcardreducer({ type: "delete", payload: product });
    setcartlist((arr) => {
      const newArr = { ...arr }; 
      delete newArr[product.price];
      return newArr; 
    });
    toast.success("item removed from your cart")
  }}
  className="text-stone-50 px-3 py-1 w-full border-slate-800 rounded-md bg-zinc-950 border my-2 hover:opacity-50"
>
  Remove from card
</button>

       </div>
       
     </div>
   );
 };
 

 
 
 