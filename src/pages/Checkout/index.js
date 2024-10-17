import { Header } from "../../component/Header";
import { Address} from "../../component/Addnewaddress";
import { Shownaddr } from "../../component/Addnewaddress/addressshown";
import { useAddress } from "../../context/address.context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCard } from "../../context/card.context";
import { useWishlist } from "../../context/wishlist.context";
import { toast } from "react-toastify";
export const Checkout =()=>{
  const {address,addrflag,setaddrflag,setaddressreducer,status}=useAddress()
  const navigate=useNavigate();
  const[addr,setaddr]=useState(false)
  const {product,setcardreducer,direct}=useCard();
  const{setwishlistreducer}=useWishlist();

  const apikey = "rzp_test_uuQeQyfPlAHtk0";

  const loadScript = (source) => {
      return new Promise((resolver) => {
        const script = document.createElement("script");
        script.src = source;
        script.onload = () => resolver(true);
        script.onerror = () => resolver(false);
        document.body.appendChild(script);
      });
    };
  
    const payment =async () => {
     
  
      const response = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!response) {
        console.log({ message: "Razorpay sdk failed to load" });
      }
      const option = {
        key: apikey,
        amount: status.amount * 100,
        currancy: "INR",
        name: "Shoping by Akash",
        email: "bt21cse24@nituk.ac.in",
        contact: "8650489580",
        description: "thanku for shoping",
  
        handler: ({ payment_id }) => {
         direct?setcardreducer({type:"delete",payload:product}) && setwishlistreducer({type:"delete",payload:product}):setcardreducer({type:"delete",payload:{_id:"99999"}});
          navigate("/");
        },
  
        prefill: {
          name: "Akash Kumar",
          email: "akash@gmail.com",
          contact: "8650489580",
        },
      };
      const paymentObjct = new window.Razorpay(option);
      paymentObjct.open();
    };
    


    return(
        <div>
        <Header></Header>
       {addrflag?<main className="mt-16 flex ">
       <div className="flex flex-col items-center border w-[40rem] bg-cyan-50 ml-[20rem] drop-shadow-2xl ">
          {address?.length>0?address.map((add)=>{
            
            return(<label  className="flex m-4">
              <input onChange={()=>setaddr(true)} name="address" type="radio"></input>
              <Shownaddr key={add.pincode}  address={add} ></Shownaddr>
            
            <button onClick={()=>setaddressreducer({type:"delete",payload:add})} className="font-bold text-xl hover:opacity-50  px-3 my-2 w-[15rem] h-[3rem] ml-8  rounded-md bg-cyan-200 border ">Delete address</button>
            </label>
            )        
          }):<></>}
          <button onClick={()=>setaddrflag(false)} className="font-bold text-xl hover:opacity-50  px-3 my-2 w-[20rem] h-[3rem]   rounded-md bg-cyan-200 border ">Add new address</button>
          </div>
        <div className=" border bg-cyan-50 w-[20rem] h-[20rem]  drop-shadow-2xl flex  justify-center items-center fixed right-8 top-24 ">
           <div className="border w-[16rem] font-bold text-xl h-[16rem] flex flex-col items-center justify-center bg-cyan-100 drop-shadow-2xl flex">
            <h1>No of items-{status.count}</h1>
            <h1>Total amount -{status.amount}Rs</h1>
            <button onClick={()=>{addr?payment():toast.warning("please select address")}} className="font-bold text-xl hover:opacity-50  px-3 my-2 w-full h-[3rem]   rounded-md bg-cyan-300 border ">Buy</button>
            </div> </div>
        </main>:<Address></Address>}
        </div>
    )
}