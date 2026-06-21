"use client";
import Image from "next/image";

export default function Navbar() {
  const navItems = [
    {
      label: "Home",
      href: "home",
    },

    {
      label: "Promise",
      href: "promise",
    },

    {
      label: "Journeys",
      href: "journeys",
    },

    {
      label: "Experiences",
      href: "experiences",
    },

    {
      label: "How It Works",
      href: "how-it-works",
    },

    {
      label: "Contact",
      href: "contact",
    },
  ];

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[90%] max-w-6xl -translate-x-1/2">

      <div className="flex h-20 items-center justify-between rounded-full border border-[#D4AF37]/20 bg-black/45 px-8 backdrop-blur-xl">

        {/* Logo */}

        <button
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}

          className="flex items-center gap-4"
        >

          <Image
            src="/logos/logo.jpg"
            alt="TourYantra"
            width={42}
            height={42}
            className="rounded-full"
          />

          <h1 className="text-2xl font-bold text-white">

            TourYantra

          </h1>

        </button>

        {/* Navigation */}

        <div className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (

            <button
              key={item.label}

              onClick={() => {
                document
                  .getElementById(item.href)
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}

              className="text-sm font-medium text-white transition duration-300 hover:text-[#D4AF37]"
            >

              {item.label}

            </button>

          ))}

        </div>

        {/* CTA */}

        <a
          href="https://wa.me/918126452480"
          target="_blank"
          rel="noopener noreferrer"

          className="rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105"
        >

          Plan Journey

        </a>

      </div>

    </nav>
  );
}