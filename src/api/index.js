import axios from "axios";
const api="https://shop-list-2.onrender.com"
const productUrl = api+"/api/products";
export const getallproduct = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(productUrl);

    return data;
  } catch (err) {
    console.log("error occured", err);
  }
};

const wishlistUrl = api+"/api/wishlist";
export const getallwishlist = async (userid) => {
  try {
    
   
    const  {data : {data}} = await axios.get(`${wishlistUrl}/${userid}`
      
    );
    
    
    return data;
  } catch (err) {
    console.log("error occured", err);
  }
};

export const postwishlist = async (obj) => {
  try {
    await axios.post(wishlistUrl, {userid:obj.userid,product:obj.product});
    
  } catch (err) {
    console.log("error occured", err);
  }
};
export const deletewishlist = async ({userid,productid}) => {
  try { 
    
     await axios.delete(`${wishlistUrl}/${userid}+${productid}`);
  } catch (err) {
    console.log("error occured", err);
  }
};

const cardUrl = api+"/api/card";

export const getallcard = async (userid) => {
  try {
    
   
    const  {data : {data}} = await axios.get(`${cardUrl}/${userid}`
      
    );
    
    

    return data;
  } catch (err) {
    console.log("error occured", err);
  }
};

export const postcard = async ({userid,product}) => {
  
  try {
    await axios.post(cardUrl, {userid,product});
    
  } catch (err) {
    console.log("error occured", err);
  }
};
export const deletecard = async ({userid,productid}) => {
  try {
    console.log("productid-----------------",productid)
   
   await axios.delete(`${cardUrl}/${userid}+${productid}`);
 } catch (err) {
   console.log("error occured", err);
 }
};
