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
    className="relative overflow-hidden border-t border-[#D4AF37]/30 bg-[#111111] px-8 py-24 text-white scroll-mt-32">

      {/* Gold glow */}

      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Logo */}

        <div className="mb-12 flex flex-col items-center">

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

        {/* Contact Details */}

        <div className="mx-auto flex max-w-3xl flex-col gap-6">

          {/* Instagram */}

          <div className="flex items-center gap-4">

            <FaInstagram
                size={22}
                className="text-[#D4AF37]"
            />

            <a
              href="https://instagram.com/touryantra"
              target="_blank"
              className="text-gray-300 transition hover:text-white"
            >

              @touryantra

            </a>

          </div>

          {/* Email */}

          <div className="flex items-center gap-4">

            <Mail
              size={24}
              className="text-[#D4AF37]"
            />

            <a
              href="mailto:info@touryantra.com"
              className="text-gray-300 transition hover:text-white"
            >

              info@touryantra.com

            </a>

          </div>

          {/* Phone */}

          <div className="flex items-center gap-4">

            <Phone
              size={24}
              className="text-[#D4AF37]"
            />

            <a
              href="https://wa.me/918126452480"
              target="_blank"
              className="text-gray-300 transition hover:text-white"
            >

              +91 81264 52480

            </a>

          </div>

          {/* Address */}

          <div className="flex items-start gap-4">

            <MapPin
              size={24}
              className="mt-1 text-[#D4AF37]"
            />

            <div className="text-gray-300">

              <p>

                H-139, Malik Colony

              </p>

              <p>

                near Gurudwara, Adarsh Colony

              </p>

              <p>

                Rudrapur, Uttarakhand, India

              </p>

            </div>

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