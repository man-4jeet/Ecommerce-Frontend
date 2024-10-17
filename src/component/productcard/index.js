import { useWishlist } from "../../context/wishlist.context";
import { useCard } from "../../context/card.context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Productcard = ({ product }) => {
  const navigate=useNavigate();
    
  const oldprice = (price, discount) => {
    return Number(
      ((Number(price) * 100) / (100 - Number(discount))) * 84
    ).toFixed(2);
  };
  const {setcardreducer,card,setproduct,token}=useCard();
  const {setwishlistreducer,wishlist}=useWishlist();
const findProductInWishlist= (wishlist,productId)=> {
const flag=wishlist?.length>0?wishlist.some((prod) => prod._id === productId):false;
return flag;
}
 const isInWishlist=findProductInWishlist(wishlist,product._id);

 const findProductInCard= (card,productId)=> card?.some(prod=> prod._id===productId);
 const isInCard=findProductInCard(card,product._id);

  return (
    <div className="border bg-white w-56 drop-shadow-2xl rounded-lg flex flex-col gap-2">
      <div className="w-56 "><button onClick={()=>{ setproduct(product)
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
      <div className="flex justify-between mt-auto">
        <button onClick={()=>{
        if(token?.length>0){
          setwishlistreducer({type : "post",payload:product})
          toast.success("Item is added to wishlist");
        }else{
          navigate("/auth")
          toast.warning("please login first")
        }
          }} disabled={isInWishlist}
          className={`text-stone-50  px-3 py-1 border-slate-800 rounded-md bg-zinc-950 border ${isInWishlist? 'opacity-50':"hover:opacity-50"}`}>
         { isInWishlist?'wishlisted':"Wishlist"}
        </button>
        <button onClick={()=>{
           if (token?.length > 0) {
            setcardreducer({ type: "post", payload: product });
            toast.success("Item is added to cart");
          } else {
            toast.warning("please login first")
            navigate("/auth");
          }
          }} disabled={isInCard} className={`text-stone-50  px-3 py-1 border-slate-800 rounded-md bg-zinc-950 border ${isInCard? 'opacity-50':"hover:opacity-50"}`}>
          { isInCard?'Addedd ':" Add to cart"}
         
        </button>
      </div>
    </div>
  );
};

export default Productcard;
