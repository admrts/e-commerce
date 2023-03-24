import Basket from "@/Components/Basket";
import Navbar from "@/Components/Navbar";
import React from "react";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Navbar />
      <Basket />
    </>
  );
}

export default Index;
