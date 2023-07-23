import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Enable smooth scrolling when the component mounts
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      // Disable smooth scrolling when the component unmounts
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return <Component {...pageProps} />;
}
