export default function Hero() {
  return (
    <section 
    id = "home"
    className="relative flex min-h-screen items-center justify-center overflow-hidden scroll-mt-32">

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

      <div className="relative z-10 -mt-10 mx-auto max-w-5xl px-6 text-center text-white">

        <p className="mb-6 text-sm uppercase tracking-[12px] text-[#D4AF37]">

          TOURYANTRA

        </p>

        <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">

          Engineered journeys.

          <br />

          Effortless memories.

        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-300">

          Handcrafted international experiences across Dubai, Bali, Vietnam and Thailand.

        </p>

        <div className="flex items-center justify-center gap-4">

          <button className="rounded-full bg-[#D4AF37] px-8 py-3 text-base font-medium text-black transition duration-300 hover:scale-105">

            Explore Journeys

          </button>

          <a
            href="https://wa.me/918126452480"
            target="_blank"
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