"use client";

import { FaInstagram } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

export default function SocialButton() {
  return (
    <div
      className="
      fixed
      bottom-8
      right-8
      z-50

      flex
      flex-col
      gap-4
    "
    >

      {/* Leave a Message */}

      <a
        href="https://wa.me/918126452480?text=Hi%20TourYantra,%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20experiences."
        target="_blank"
        rel="noopener noreferrer"

        className="
        flex

        w-[210px]

        items-center
        justify-center

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

        <FiMessageCircle
          size={22}
          className="text-[#D4AF37]"
        />

        <span className="font-medium">

          Leave a Message

        </span>

      </a>

      {/* Follow Us */}

      <a
        href="https://instagram.com/touryantra"
        target="_blank"
        rel="noopener noreferrer"

        className="
        flex

        w-[210px]

        items-center
        justify-center

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

    </div>
  );
}