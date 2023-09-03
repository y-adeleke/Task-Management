import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { StoreContextProvider } from "@/store/mystore";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Enable smooth scrolling when the component mounts
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      // Disable smooth scrolling when the component unmounts
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <StoreContextProvider>
      <Component {...pageProps} />
    </StoreContextProvider>
  );
}
