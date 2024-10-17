import { Header } from "../../component/Header";
import { Card } from "../../component/Card";
import { useNavigate } from "react-router-dom";
import { useCard } from "../../context/card.context";
import { useState, useEffect } from "react";
import { useAddress } from "../../context/address.context";
export const Cardpage = () => {
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(1);
  const { card, cartlist } = useCard();
 const{setstatus}=useAddress();

  const navigate = useNavigate();

  useEffect(() => {
    let flag = 0;
    let amt = 0;
    for (let item in cartlist) {
      flag += cartlist[item];
      amt += Number(item) * cartlist[item];
    }
    setAmount(amt);
    setCount(flag);
  }, [cartlist]);
  
  return (
    <div>
      <Header />
      <main className="mt-20 flex">
        
          {card?.length > 0 ? (
            <div className="flex">
            <div className="flex flex-col flex-wrap gap-3 ml-12">
              {card.map((product) => (
                <Card key={product._id} product={product} />
              ))}
              </div> 
              <div className="w-[40rem] h-[36rem] border bg-cyan-50 flex items-center justify-center fixed  drop-shadow-2xl right-8" >
              <div className="w-[25rem] h-[24rem] text-xl border bg-cyan-100 flex flex-col drop-shadow-2xl">
                <h1 className="m-2">Number of items &nbsp; &nbsp;:{count}</h1>
                <h1 className="m-2">All products price &nbsp; :{amount * 84 } Rs</h1>
                <h1 className="m-2">Deleviry charges&nbsp;&nbsp;&nbsp; &nbsp;:100 Rs</h1>
                <h1>***-------------------------------------------***</h1>
                <h1 className="m-2">Total amount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:{amount * 84  +100} Rs</h1>
                <button onClick={()=>{
                setstatus({count:count,amount:amount*84+100});
                navigate("/checkout");
                }}
              className=" hover:opacity-50  px-4 my-2 w-[15rem] h-[3rem] self-center border-slate-800 rounded-md bg-amber-600 border "

            >
              Checkout
            </button>
              </div>
              </div>  
              </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center justify-center border bg-cyan-50 drop-shadow-2xl w-1/2 h-[32rem]">
                <div className="flex flex-col h-[16rem] w-1/2 border drop-shadow-2xl bg-cyan-100 items-center">
                  <h1 className="my-8">---YOUR CART IS EMPTY---</h1>
                  <button
                    className="my-2 h-12 w-[12rem] rounded-lg border text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50"
                    onClick={() => navigate("/")}
                  >
                    Click to add in cart
                  </button>
                </div>
              </div>
            </div>
          )}
       
      </main>
    </div>
  );
};
