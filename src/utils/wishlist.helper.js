
import { deletewishlist,postwishlist,getallwishlist } from "../api"




export const wishfilter= async (product,type,userid)=>{
    



    switch(type){
    

        case 'post':{
            await postwishlist({userid,product});
            
            const data= await getallwishlist(userid);
        
            return data;

        }
        case 'delete':{
            const productid=product._id;
        
            await deletewishlist({userid,productid});
            const data= await getallwishlist(userid);
            return data;

        }
        default :{
            
            const data= await getallwishlist(userid);
            
            return data;
        }
    }
}