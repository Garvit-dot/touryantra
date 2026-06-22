export default function AboutUs() {
  const values = [
    {
      icon: "✈️",
      title: "Curated Experiences",
    },

    {
      icon: "🤝",
      title: "Trust & Transparency",
    },

    {
      icon: "🌏",
      title: "Meaningful Memories",
    },
  ];

  return (
    <section
      id="about-us"

      className="
      relative

      overflow-hidden

      py-28
    "
    >

      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="h-full w-full bg-cover bg-center"

          style={{
            backgroundImage: "url('/images/about-bg.png')",
          }}
        />

        <div className="absolute inset-0 bg-[#07111F]/78" />

      </div>

      {/* Golden Glow */}

      <div
        className="
        absolute

        left-1/2
        top-1/2

        h-[400px]
        w-[400px]

        -translate-x-1/2
        -translate-y-1/2

        rounded-full

        bg-[#D4AF37]/5

        blur-[120px]
      "
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="mb-4 text-sm uppercase tracking-[8px] text-[#D4AF37]">

            ABOUT TOURYANTRA

          </p>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">

            Experiences crafted with purpose.

          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">

            At TourYantra, we engineer seamless international experiences that blend luxury, authenticity and convenience. Every journey is thoughtfully designed to create meaningful memories while ensuring complete transparency and peace of mind.

          </p>

        </div>

        {/* Values */}

        <div className="mb-16 grid gap-8 md:grid-cols-3">

          {values.map((item) => (

            <div
              key={item.title}

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

              hover:-translate-y-2
              hover:border-[#D4AF37]/40
            "
            >

              <div className="mb-4 text-5xl">

                {item.icon}

              </div>

              <h3 className="text-xl font-semibold text-white">

                {item.title}

              </h3>

            </div>

          ))}

        </div>

        {/* Experience */}

        <div
          className="
          mb-16

          rounded-3xl

          border
          border-[#D4AF37]/20

          bg-white/5

          p-12

          text-center

          backdrop-blur-lg

          transition-all
          duration-300

          hover:border-[#D4AF37]/40
        "
        >

          <div className="mb-4 text-6xl">

            ✈️

          </div>

          <h3 className="mb-2 text-6xl font-bold text-[#D4AF37]">

            5+

          </h3>

          <h4 className="mb-6 text-3xl font-semibold text-white">

            Years of Experience

          </h4>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">

            Delivering thoughtfully curated international journeys with a strong focus on comfort, reliability and unforgettable memories. Every experience is designed to ensure travellers enjoy a seamless journey from start to finish.

          </p>

        </div>

        {/* Review + Motto */}

        <div className="grid gap-8 md:grid-cols-2">

          {/* Review */}

          <div
            className="
            rounded-3xl

            border
            border-[#D4AF37]/20

            bg-white/5

            p-10

            text-center

            backdrop-blur-lg
          "
          >

            <div className="mb-4 text-2xl text-[#D4AF37]">

              ★★★★★

            </div>

            <p className="mb-4 text-lg italic text-gray-300">

              "A seamless Bali experience from start to finish."

            </p>

            <p className="text-sm text-gray-400">

              - TourYantra Traveller

            </p>

          </div>

          {/* Motto */}

          <div
            className="
            rounded-3xl

            border
            border-[#D4AF37]/20

            bg-white/5

            p-10

            text-center

            backdrop-blur-lg
          "
          >

            <h3 className="mb-6 text-3xl font-bold text-[#D4AF37]">

              Our Motto

            </h3>

            <p className="text-3xl font-semibold leading-relaxed text-white">

              Engineered journeys.

              <br />

              Effortless memories.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}