import Header from "@/components/Header/Header_old";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="home loaded">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
