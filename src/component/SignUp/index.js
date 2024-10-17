import { useState } from "react"
import { signupfxn } from "../../api/authentication"
import { useCard } from "../../context/card.context"
import { toast } from "react-toastify"
    export const SignUp =()=>{
  
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [number,setnumber]=useState("")
  const {setsignup}=useCard();
  const[eye,seteye]=useState(false)
  const nameRegx=new RegExp(/[A-Za-z]{3,}/);
const passwordRegx= new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
const numberRegx=new RegExp(/^[\d]{10}$/);
const emailRegx=new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
const submit = async()=>{
  if(!nameRegx.test(name)) { toast.warning("Not valid name")}
                else if(!emailRegx.test(email)){ toast.warning("Not valid email")}
                else if( !passwordRegx.test(password)){
                  toast.warning("password is not strong")
                }else if(!numberRegx.test(number)){ toast.warning("number is not valid");}
                  else{
                    const test=await signupfxn({name,email,password,number});
                    
                    if(test)
                    {toast.success("Account is created ")
                      setsignup(false)
                    }
                    else{
                      toast.warning("this mobile user number already exist ")
                    }
                }
}

        return(
         <div className="flex items-center justify-center">
            <div className="flex flex-col items-center border bg-cyan-50 drop-shadow-2xl w-1/2 h-[32rem] ">
              <h1 className="my-12 ">------CREATE NEW ACCOUNT------</h1>
            <div className="flex flex-col h-[16rem] w-1/2 border drop-shadow-2xl bg-cyan-100  justify-center  ">
              <div className=" my-2 border  drop-shadow-2xl bg-cyan-100 "><label className="mx-4">name--</label> <input onChange={(e)=>{setname(e.target.value)}} required placeholder="Name"></input> </div>
              <div className=" my-2  border drop-shadow-2xl bg-cyan-100" ><label className="mx-4">email--</label> <input onChange={(e)=>{setemail(e.target.value)}} required placeholder="email"></input></div>
              <div className=" my-2 flex   border  drop-shadow-2xl bg-cyan-100"><label className="mx-4 w-[10rem]">password--</label> <div className="mx-4 w-full "> <input className="w-full relative" onChange={(e)=>{setpassword(e.target.value)}} required type={eye?"text":"password"} placeholder="password"></input> <button onClick={()=>seteye((flag)=>!flag)} className="flex absolute right-4 top-0">
         { eye?<span class="material-symbols-outlined">
visibility
</span>:<span class="material-symbols-outlined">
visibility_off
</span>} </button> </div></div>
              <div className=" my-2  border  drop-shadow-2xl bg-cyan-100"><label className="mx-4">number--</label> <input onChange={(e)=>{setnumber(e.target.value)}} required placeholder="number"></input></div>
              <div className=" flex justify-between "> <button className="my-2 h-8 w-20 ml-4 rounded-lg border  text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50" onClick={()=>submit()} type="submit"> submit </button>
             <button className="my-2 h-8 w-36 rounded-lg border mr-4 text-center drop-shadow-2xl bg-cyan-300 hover:opacity-50" onClick={()=>{ 
                toast.info("Account not create ")
                    setsignup(false);
                
               
              }
            } type="submit"> Go to login </button>

            </div>
          </div>
          </div>
          </div> 
            
           )
      }
