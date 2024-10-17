import { useState } from "react"

import { useAddress } from "../../context/address.context"
    export const Address =()=>{
 const {setaddrflag,setaddressreducer}=useAddress()
  const [name,setname]=useState("")
  const [lastname,setlastname]=useState("")
  const [address,setaddress]=useState("")
  const [distric,setdistric]=useState("")
  const [pincode,setpincode]=useState("")
        return(
         <div className="flex items-center justify-center mt-20">
            <div className="flex flex-col items-center border bg-cyan-50 drop-shadow-2xl w-1/2 h-[32rem] ">
              <h1 className="my-12 ">------CREATE NEW ADDRESS------</h1>
            <form className="flex flex-col h-[16rem] w-1/2 border drop-shadow-2xl bg-cyan-100  justify-center  " onSubmit={()=>{setaddressreducer({type:"post",payload :{name,lastname,address,distric,pincode}})
                setaddrflag(true)}}>
              <div className=" my-2 border  drop-shadow-2xl bg-cyan-100 "><label className="mx-4">name--</label> <input onChange={(e)=>{
                setname(e.target.value)}} required placeholder="Name"></input> </div>
              <div className=" my-2  border drop-shadow-2xl bg-cyan-100" ><label className="mx-4">lastname--</label> <input onChange={(e)=>{setlastname(e.target.value)}} required placeholder="lastname"></input></div>
              <div className=" my-2  border  drop-shadow-2xl bg-cyan-100"><label className="mx-4">Address--</label><input onChange={(e)=>{setaddress(e.target.value)}} required placeholder="address"></input> </div>
              <div className=" my-2  border  drop-shadow-2xl bg-cyan-100"><label className="mx-4">Distric--</label> <input onChange={(e)=>{setdistric(e.target.value)}} required placeholder="distric"></input></div>
              <div className=" my-2  border  drop-shadow-2xl bg-cyan-100"><label className="mx-4">pincode--</label> <input onChange={(e)=>{setpincode(e.target.value)}} required placeholder="pincode"></input></div>
              <div className=" flex justify-center "> <button type="submit" className="my-2 h-8 w-20 rounded-lg border  text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50" > Add </button></div>
          </form>
          </div>
          </div> 
            
           )
      }