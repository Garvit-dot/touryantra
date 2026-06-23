import Image from "next/image";

import { FaInstagram } from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"

      className="
      relative

      overflow-hidden

      border-t
      border-[#D4AF37]/30

      bg-[#111111]

      px-8
      py-24

      text-white

      scroll-mt-32
    "
    >

      {/* Gold Glow */}

      <div
        className="
        absolute

        left-1/2
        top-0

        h-[300px]
        w-[300px]

        -translate-x-1/2

        rounded-full

        bg-[#D4AF37]/10

        blur-[120px]
      "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Logo */}

        <div className="mb-16 flex flex-col items-center">

          <Image
            src="/logos/logo.jpg"

            alt="TourYantra"

            width={90}
            height={90}

            className="mb-6 rounded-full"
          />

          <h2 className="mb-4 text-5xl font-bold">

            TourYantra

          </h2>

          <p className="text-center text-lg text-gray-400">

            Engineered journeys. Effortless memories.

          </p>

        </div>

        {/* Contact Cards */}

        <div
          className="
          mx-auto

          grid

          max-w-6xl

          gap-8

          md:grid-cols-4
        "
        >

          {/* Instagram */}

          <a
            href="https://instagram.com/touryantra"

            target="_blank"

            rel="noopener noreferrer"

            className="
            rounded-3xl

            border
            border-[#D4AF37]/20

            bg-white/5

            p-8

            text-center

            backdrop-blur-lg

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-[#D4AF37]/40
          "
          >

            <FaInstagram
              size={28}

              className="mx-auto mb-4 text-[#D4AF37]"
            />

            <h3 className="mb-3 text-xl font-semibold">

              Instagram

            </h3>

            <p className="text-gray-300">

              @touryantra

            </p>

          </a>

          {/* Email */}

          <a
            href="mailto:info@touryantra.com"

            className="
            rounded-3xl

            border
            border-[#D4AF37]/20

            bg-white/5

            p-8

            text-center

            backdrop-blur-lg

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-[#D4AF37]/40
          "
          >

            <Mail
              size={28}

              className="mx-auto mb-4 text-[#D4AF37]"
            />

            <h3 className="mb-3 text-xl font-semibold">

              Email

            </h3>

            <p className="text-gray-300 break-all">

              info@touryantra.com

            </p>

          </a>

          {/* Phone */}

          <a
            href="https://wa.me/918126452480"

            target="_blank"

            rel="noopener noreferrer"

            className="
            rounded-3xl

            border
            border-[#D4AF37]/20

            bg-white/5

            p-8

            text-center

            backdrop-blur-lg

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-[#D4AF37]/40
          "
          >

            <Phone
              size={28}

              className="mx-auto mb-4 text-[#D4AF37]"
            />

            <h3 className="mb-3 text-xl font-semibold">

              Phone

            </h3>

            <p className="text-gray-300">

              +91 81264 52480

            </p>

          </a>

          {/* Address */}

          <div
            className="
            rounded-3xl

            border
            border-[#D4AF37]/20

            bg-white/5

            p-8

            text-center

            backdrop-blur-lg

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-[#D4AF37]/40
          "
          >

            <MapPin
              size={28}

              className="mx-auto mb-4 text-[#D4AF37]"
            />

            <h3 className="mb-3 text-xl font-semibold">

              Address

            </h3>

            <p className="text-gray-300">

              H-139 Malik Colony, Near Gurudwara,

              <br />

              Adarsh colony, Rudrapur, Uttarakhand, India

            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-white/10" />

        {/* Copyright */}

        <div className="text-center text-sm text-gray-500">

          © 2026 TourYantra. All rights reserved.

        </div>

      </div>

    </footer>
  );
}