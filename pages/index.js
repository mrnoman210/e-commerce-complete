import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React from 'react'

const home = ({ data }) =>  {
  const { main_home, main_heading, price_p, loader } = styles;
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={main_home}>
        {!data ? <div className={loader}></div> : data.map((item, i) =>
          <Link href={`/product/${item.id}`} key={i}>
            <h1 className={main_heading}>{item.productname}</h1>
            <p>{item.description}</p>
            <p className={price_p}> Rs.<b>{item.price}</b></p>
          </Link>
        )}

      </div>
    </>
  );
}
export default home
export async function getStaticProps() {
  // Fetch data from the API
  const apiURL = "http://localhost:3000/api/getAllProducts";
  const response = await fetch(apiURL, { method: "GET" });
  const data = await response.json();
  return {
    props: {
      data,
    },
    revalidate: 120,
  };
}
