import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/create_product"}>Create Products</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
