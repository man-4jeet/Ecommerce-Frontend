import { Navigate } from "react-router-dom"
import { useCard } from "../card.context"
export const ProtectedRoute=({children})=>{
   const {token}=useCard();

   return( token?.length>0?children:<Navigate to={"/auth"} replace={true}></Navigate>)
}