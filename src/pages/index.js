import MainPage from "@/components/MainPage/MainPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>فروشگاه شاپ.آی آر</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <MainPage />
    </>
  );
}
