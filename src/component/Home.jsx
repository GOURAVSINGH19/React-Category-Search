import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContex } from "./Context";
import { useContext } from "react";
import Loading from "./Loading";
import axios from './Axios'


function Home() {
  const [products]= useContext(ProductContex);
  const {search}=useLocation();
  const category=decodeURIComponent(search.split("=")[1]);

  const[filteredProducts,setfilterproducts]=useState(null);

  const getProductcategory = async()=>{
    try{
      const {data}= await axios.get(`/products/category/${category}`);
      setfilterproducts(data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    if(!filteredProducts) setfilterproducts(products)
    if(category != "undefined") getProductcategory();
  },[category , products])
  
  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%]pt-[5%] p-10 overflow-y-auto overflow-x-hidden ">
        {filteredProducts && filteredProducts.map((p, i) => (
            <Link 
              to={`/details/${p.id}`}
              key={p.id}
              className="mr-3 mb-3 card p-5 border shadow rounded w-[50%] h-[50vh] flex flex-col  justify-center items-center"
            >
              <div
                className="hover:scale-105 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="text-center">
                {p.title}
              </h1>
            </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
