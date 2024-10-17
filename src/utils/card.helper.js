
import { getallcard,postcard,deletecard } from "../api"




export const cardfilter= async (product,type,userid)=>{
   
    
    switch(type){
    

        case 'post':{
            await postcard({userid,product});
            
            const data= await getallcard(userid);
            
            return data;

        }
        case 'delete':{
            const productid=product._id;
            
            await deletecard({userid,productid});
            const data= await getallcard(userid);
            return data;

        }
        default :{
            const data= await getallcard(userid);
            return data;
        }
    }
}