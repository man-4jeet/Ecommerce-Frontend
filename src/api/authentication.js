
import  axios  from "axios"
const api="https://shop-list-2.onrender.com"
const sinupurl= api+ "/api/auth/signup";
const loginurl= api+"/api/auth/login";


export const signupfxn = async (user) => {
    try {
    
      await axios.post(sinupurl, user);
      
      
     return true;
    } catch (err) {
    
      console.log("error occured ", err);
      return false;
    }
  }
  export const loginfxn = async (user) => {
    try {
      
      const {
        data: { data },
      } = await axios.post(loginurl, user);
      localStorage.setItem("token",data.token);
      sessionStorage.setItem("token",data.token);
      
     return true;
    } catch (err) {
     
      console.log("error occured", err);
      return false;
    }
  }

  