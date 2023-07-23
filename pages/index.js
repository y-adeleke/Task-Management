import Header from "@/components/LandingPageComponent/Header";
import Features from "@/components/LandingPageComponent/Features";
import Reviews from "@/components/LandingPageComponent/Reviews";
import Faq from "@/components/LandingPageComponent/Faq";
import Footer from "@/components/LandingPageComponent/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Features />
      <Reviews />
      <Faq />
      <Footer />
    </main>
  );
}
