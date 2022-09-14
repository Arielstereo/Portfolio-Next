import Head from "next/head";
import Navbar from "./Navbar";
import { Container } from "@nextui-org/react";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>Ariel Martinez | Portfolio</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
