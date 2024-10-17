import { Header } from "../../component/Header";
import { SignUp } from "../../component/SignUp";
import { Login } from "../../component/Login";
import { useCard } from "../../context/card.context";
export const Authpage=()=>{
    const {signup} =useCard()
    return(
        <div>
            <Header></Header><main className="mt-20">
           { signup?<SignUp></SignUp>:<Login></Login>}
            </main>
            
        </div>
    )
}