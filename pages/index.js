import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Пиццерия</title>
        <meta name="description" content="Лучшая пицца в городе" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("https://pizza-with-backend.vercel.app/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
