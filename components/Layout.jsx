import Head from "next/head";
import Navbar from "./Navbar";
import { Container } from "@nextui-org/react";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
