import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden scroll-mt-32"
    >
      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Golden Glow */}

      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      {/* Content */}

      <div className="relative z-10 mt-24 mx-auto max-w-5xl px-6 text-center text-white">

        {/* Big Logo */}

        <Image
          src="/logos/logo.jpg"
          alt="TourYantra Logo"
          width={180}
          height={180}
          priority
          className="
          mx-auto
          mb-6
          rounded-full
          border-4
          border-[#D4AF37]/40
          shadow-[0_0_40px_rgba(212,175,55,0.25)]
        "
        />

        {/* Company Name */}

        <h1 className="mb-4 text-5xl font-extrabold tracking-[6px] text-[#D4AF37] md:text-8xl">

          TOURYANTRA

        </h1>

        {/* Tagline */}

        <h2 className="mb-8 text-2xl font-semibold leading-tight text-gray-200 md:text-5xl">

          Engineered journeys.

          <br />

          Effortless memories.

        </h2>

        {/* Description */}

        <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-300">

          Handcrafted international experiences across Dubai, Bali, Vietnam and Thailand.

        </p>

        {/* Buttons */}

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

          <button className="rounded-full bg-[#D4AF37] px-8 py-3 text-base font-medium text-black transition duration-300 hover:scale-105">

            Explore Journeys

          </button>

          <a
            href="https://wa.me/918126452480"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-8 py-3 text-base font-medium transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >

            WhatsApp Us

          </a>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#07111F] to-transparent" />

    </section>
  );
}