import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from './Axios'
import Loading from './Loading'

function Details() {
  const [products,setproducts] =useState(null)
  const {id} =useParams()
  const getsingleproducts=async()=>{
    try{
      const {data}= await axios.get(`/products/${id}`);
      setproducts(data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getsingleproducts();
  },[])
  return products? (
    <div className='w-[80%] flex items-center justify-center gap-10 h-full  m-auto'>
        <img src={products.image} alt="img"  className='w-[20%] h-[50%s]'/>
        <div className='flex flex-col'>
            <h1>{products.title}</h1>
            <h2>{products.catigory}</h2>
            <p>{products.decsripition}</p>
            <Link className='border px-3  bg-lime-100 m-3'>Edit</Link>
            <Link className='border px-3  bg-lime-100 m-3'>Delete</Link>
        </div>
    </div>
  ):(<Loading/>)
}

export default Details