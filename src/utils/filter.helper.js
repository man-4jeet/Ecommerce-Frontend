export const productfilterbyprice=(products,type)=>{
    if(type==='lth'){
        return[...products].sort((a,b)=>a.price-b.price);
    }
    else if(type==='htl'){
        return[...products].sort((a,b)=> b.price-a.price);
    }
    else if(type==='15'){
      return products.filter((a)=>a.discountPercentage > 15)
    }
    else if(type==='10'){
        return products.filter((a)=>a.discountPercentage > 10)
    }
    else if(type==='5'){
        return products.filter((a)=>a.discountPercentage > 5)
    }
    else{
        return products
    }

}