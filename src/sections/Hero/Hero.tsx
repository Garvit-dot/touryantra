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
        preload="auto"
        poster="/images/hero-poster.png"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Golden Glow */}

      <div className="absolute left-1/2 top-1/3 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px] md:h-[500px] md:w-[500px] md:blur-[140px]" />

      {/* Content */}

      <div className="relative z-10 mt-28 md:mt-24 mx-auto max-w-5xl px-6 text-center text-white">

        {/* Logo */}

        <Image
          src="/logos/logo-transparent2.png"
          alt="TourYantra Logo"
          width={220}
          height={220}
          priority
          className="mx-auto mb-6 w-36 md:w-[220px] drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]"
        />

        {/* Company Name */}

        <h1 className="mb-4 text-4xl font-extrabold tracking-[3px] text-[#D4AF37] sm:text-5xl md:text-8xl md:tracking-[6px]">

          TOURYANTRA

        </h1>

        {/* Tagline */}

        <h2 className="mb-6 text-xl font-semibold leading-snug text-gray-200 sm:text-2xl md:mb-8 md:text-5xl">

          Where Every Journey Becomes a Story.

        </h2>

        {/* Description */}

        <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-gray-300 sm:max-w-xl sm:text-lg md:mb-12 md:max-w-3xl">

          Handcrafted international experiences across Dubai, Bali, Vietnam and Thailand.

        </p>

        {/* Buttons */}

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

          <button className="w-full rounded-full bg-[#D4AF37] px-8 py-3 text-base font-medium text-black transition duration-300 hover:scale-105 sm:w-auto">

            Explore Journeys

          </button>

          <a
            href="https://wa.me/918126452480"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-white px-8 py-3 text-center text-base font-medium transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] sm:w-auto"
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