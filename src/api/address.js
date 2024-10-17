
import axios from "axios";


const url="https://shop-list-2.onrender.com/api/address"


export const getalladdress = async (userid) => {
    try {
      
     
      const  {data : {data}} = await axios.get(`${url}/${userid}`);
      
      
      return data;
    } catch (err) {
      console.log("error occured", err);
    }
  };
  
  export const postaddress = async (obj) => {
    console.log("post addr",obj)
    try {
      await axios.post(url, {id: obj.userid,product:obj.product});
      
    } catch (err) {
      console.log("error occured", err);
    }
  };
  export const deleteaddress = async ({userid,productid}) => {
    try {
      
       await axios.delete(`${url}/${userid}+${productid}`);
    } catch (err) {
      console.log("error occured", err);
    }
  };