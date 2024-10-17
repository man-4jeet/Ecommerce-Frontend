
import { deleteaddress,getalladdress,postaddress } from "../api/address";




export const addressfilter= async (product,type,userid)=>{


    switch(type){
    

        case 'post':{

            
            await postaddress({userid,product});
            
            const data= await getalladdress(userid);
        
            return data;

        }
        case 'delete':{
            const productid=product.pincode;
        
            await deleteaddress({userid,productid});
            const data= await getalladdress(userid);
            return data;

        }
        default :{
            
            const data= await getalladdress(userid);
            
            return data;
        }
    }
}