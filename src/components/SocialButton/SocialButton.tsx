"use client";

import { FaInstagram } from "react-icons/fa";

export default function SocialButton() {
  return (
    <a
      href="https://instagram.com/touryantra"
      target="_blank"
      rel="noopener noreferrer"

      className="
      fixed
      bottom-8
      right-8
      z-50

      flex
      items-center
      gap-3

      rounded-full

      bg-[#07111F]/85

      px-5
      py-3

      text-white

      shadow-2xl

      backdrop-blur-lg

      border
      border-[#D4AF37]/30

      transition-all
      duration-300

      hover:scale-105
      hover:border-[#D4AF37]
      hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]
    "
    >

      <FaInstagram
        size={22}
        className="text-[#D4AF37]"
      />

      <span className="font-medium">

        Follow Us

      </span>

    </a>
  );
}