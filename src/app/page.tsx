import Reviews from "@/sections/Reviews/Reviews";

import AboutUs from "@/sections/AboutUs/AboutUs";

import SocialButton from "@/components/SocialButton/SocialButton";

import Navbar from "@/components/Navbar/Navbar";

import Footer from "@/components/Footer/Footer";

import Hero from "@/sections/Hero/Hero";

import Promise from "@/sections/Promise/Promise";

import SignatureJourneys from "@/sections/SignatureJourneys/SignatureJourneys";


import HowItWorks from "@/sections/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#07111F]">

      <Navbar />

      <Hero />

      <AboutUs />

      <Promise />

      <SignatureJourneys />

      <Reviews />

      <HowItWorks />

      <Footer />

      <SocialButton />

    </main>
  );
}