"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      href: "home",
    },
    {
      label: "Our Story",
      href: "about-us",
    },
    {
      label: "Our Promise",
      href: "promise",
    },
    {
      label: "Experiences",
      href: "journeys",
    },
    {
      label: "Traveller Stories",
      href: "reviews",
    },
    {
      label: "Begin Your Journey",
      href: "how-it-works",
    },
    {
      label: "Let's Connect",
      href: "contact",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[92%] max-w-6xl -translate-x-1/2">

      <div className="flex h-16 md:h-20 items-center justify-between rounded-full border border-[#D4AF37]/20 bg-black/45 px-5 md:px-8 backdrop-blur-xl">

        {/* Brand */}

        <button
          onClick={() => scrollToSection("home")}
          className="text-xl md:text-2xl font-bold tracking-wide text-white transition duration-300 hover:text-[#D4AF37]"
        >
          TourYantra
        </button>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (

            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-white transition duration-300 hover:text-[#D4AF37]"
            >
              {item.label}
            </button>

          ))}

        </div>

        {/* Desktop CTA */}

        <a
          href="https://wa.me/918126452480"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105"
        >
          Plan Journey
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="mt-3 rounded-3xl border border-[#D4AF37]/20 bg-black/90 backdrop-blur-xl md:hidden">

          <div className="flex flex-col p-6">

            {navItems.map((item) => (

              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="py-4 text-left text-white transition hover:text-[#D4AF37]"
              >
                {item.label}
              </button>

            ))}

            <a
              href="https://wa.me/918126452480"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-full bg-[#D4AF37] py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
            >
              Plan Journey
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}