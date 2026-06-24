"use client";

export default function Navbar() {
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

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[90%] max-w-6xl -translate-x-1/2">

      <div className="flex h-20 items-center justify-between rounded-full border border-[#D4AF37]/20 bg-black/45 px-8 backdrop-blur-xl">

        {/* Brand Name */}

        <button
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}

          className="text-2xl font-bold tracking-wide text-white transition duration-300 hover:text-[#D4AF37]"
        >

          TourYantra

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