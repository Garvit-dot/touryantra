import SocialButton from "@/components/SocialButton/SocialButton";

import Navbar from "@/components/Navbar/Navbar";

import Footer from "@/components/Footer/Footer";

import Hero from "@/sections/Hero/Hero";

import Promise from "@/sections/Promise/Promise";

import SignatureJourneys from "@/sections/SignatureJourneys/SignatureJourneys";

import FeaturedEscapes from "@/sections/FeaturedEscapes/FeaturedEscapes";

import HowItWorks from "@/sections/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#07111F]">

      <Navbar />

      <Hero />

      <Promise />

      <SignatureJourneys />

      <FeaturedEscapes />

      <HowItWorks />

      <Footer />

      <SocialButton />

    </main>
  );
}