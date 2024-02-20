import React, { useContext, useEffect, useState } from "react";
import { ProductContex } from "./Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContex);


  let distinct_products =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
    distinct_products=[...new Set(distinct_products)];
  return (
    <div>
      <nav className="w-full h-full bg-zinc-100 flex flex-col  items-center  pt-5">
        <a
          href="/create"
          className="py-3 px-0 border rounded border-blue-100 text-zinc-800"
        >
          Add new Products
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-[3vw] w-[80%]">Category</h1>

        {distinct_products.map((d, i) => (
          <div className=" bg-red-100 w-[80%] mb-3">
            <Link key={i} to={`/?category=${d}`} className=" bg-red-100">{d}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
