import ProductsData from "@/pages/api/getAllProducts";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
//   const [data, setData] = useState(null)
//   useEffect(() => {
//     fetch("localhost:3000/api/getAllProducts").then(response => response.json()).then(data => setData(data)).catch(error => console.log(error))
//   }, [])
// console.log(data);
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Posts</Link>
        </li>
        <li>
          <Link href={"/create_product"}>Create Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
