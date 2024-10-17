import { loginfxn } from "../../api/authentication";
import { useState } from "react";
import { useCard } from "../../context/card.context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export  const Login= ()=>{
 const [number,setnumber]=useState("")
 const [password,setpassword]=useState("")
const {setsignup,setuserid}=useCard();
const[eye,seteye]=useState(false) ;
const navigate=useNavigate();
    const sign =async ()=>{
        
        const data=await loginfxn({password,number});
        if(data)
          {
            localStorage.setItem("userid",number);
            setuserid(number);
            toast.success("login successful")
            navigate("/");}
            else{
              toast.warning("Password /number not match")
            }
        


      }
    const testcredencial =async()=>{
      localStorage.setItem("userid","8650489580");
      setuserid("8650489580");
      const data=await loginfxn({password : "Akash@2002",number :"8650489580"})
     
      console.log(data);
      toast.success("Login to admin account")
      navigate("/");
    }
  

    return( <div className=" flex  justify-center items-center ">
        <div className="flex  items-center flex-col   drop-shadow-2xl w-1/2 h-[32rem] border  bg-cyan-50 ">
          <h1 className="my-12 ">-------LOGIN PAGE------</h1>
          <div className=" w-[25rem] items-center h-[16rem]  drop-shadow-2xl border bg-cyan-100 ">
        <nav className="flex flex-col">
        
        <div className=" my-2 flex   border  drop-shadow-2xl bg-cyan-100"><label className="mx-4 w-[10rem]">password--</label> <div className="mx-4 w-full "> <input className="w-full relative" onChange={(e)=>{setpassword(e.target.value)}} required type={eye?"text":"password"} placeholder="password"></input> <button onClick={()=>seteye((flag)=>!flag)} className="flex absolute right-4 top-0">
         { eye?<span class="material-symbols-outlined">
visibility
</span>:<span class="material-symbols-outlined">
visibility_off
</span>} </button> </div></div>
        <div className=" my-2  border flex drop-shadow-2xl bg-cyan-100"><label className="mx-4 w-[10rem]">number--</label> <input className="w-full mx-4" onChange={(e)=>{setnumber(e.target.value)}} required placeholder="number"></input></div>
        <div className="  "> <button className="my-2 h-8 w-56 ml-16 rounded-lg border text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50" onClick={()=>sign()  } > Login </button></div></nav>
     <div className=" "><button className="my-2 ml-16 h-8 w-56 rounded-lg border text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50"  onClick={testcredencial}>Login for credencial test </button></div>
       <div className="  "> <button className=" my-2 ml-16 h-8 w-56 rounded-lg border text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50" onClick={()=>setsignup(true)}  > Create new account </button></div>
       
       </div>
       
     </div> 
     </div>
    )
}