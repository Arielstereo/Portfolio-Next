import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
