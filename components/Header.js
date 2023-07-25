import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter()
  const [showSignUp, setShowSignUp] = useState(false)
  useEffect(() => {
    const checkToken = localStorage.getItem("token")
    if (!checkToken) {
      setShowSignUp(true)
    }
    else {
      setShowSignUp(true)
    }
  }, [router])
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
        {showSignUp ? 
        <ul>
          <li>
            <Link href={"/auth/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/auth/signup"}>Sign up</Link>
          </li>
        </ul>
        :"You are sign up"
        }
      </nav>
    </>
  );
};

export default Header;
