import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContex=createContext()
function Context(props) {
    const [ products,setproducts]=useState([]);

    const getProduct=async() =>{
        try{
          const {data}= await axios("/products");
          setproducts(data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
      getProduct();
    },[])
  return (
    <ProductContex.Provider value={[products,setproducts]}>
      {props.children}
    </ProductContex.Provider>
  )
}

export default Context;