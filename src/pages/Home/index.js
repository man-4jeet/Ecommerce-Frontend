import Productcard from "../../component/productcard";
import { useEffect, useState } from "react";
import { getallproduct } from "../../api";
import { Header } from "../../component/Header";
import { Sidebar } from "../../component/Sidebar";
import { productfilterbyprice } from "../../utils/filter.helper";
import { useFilter } from "../../context/filter.context";
import { Loader } from "../../component/Loader";
export const Homepage = () => {
    const [products,setproduct]=useState([])
  const getdata = async () => {
    const data = await getallproduct();
    setproduct(data);
  };
  useEffect(() => {
    getdata();
  });
  
  const {sortbyprice,discount}=useFilter();
  const productsfilterbyprice = productfilterbyprice(products,sortbyprice);
  const filterproduct = productfilterbyprice(productsfilterbyprice,discount)
  return (<>
  <Header></Header>
  <main className="mt-16">
    <Sidebar></Sidebar>
  <div className="flex flex-wrap gap-3  ml-56">
  {
    filterproduct?.length>0 ? filterproduct.map(product => <Productcard key={product._id} product={product}/>):<Loader></Loader>
  }
  </div>
  </main>
  </>);
};
