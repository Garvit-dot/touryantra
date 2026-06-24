export default function AboutUs() {
  const values = [
    {
      number: "01",
      title: "Meaningful Affordability",
      description:
        "We believe great travel doesn’t need to be expensive. Every experience we create is designed to offer high value without compromising on quality, comfort, or care.",
    },

    {
      number: "02",
      title: "Life-Balanced Experiences",
      description:
        "We design travel that supports a fuller life—helping people step away from routine, recharge from work, reconnect with themselves, and spend meaningful time with family and friends.",
    },

    {
      number: "03",
      title: "Personalized Freedom",
      description:
        "We understand that every traveler has a different story. Whether it’s a solo escape, a new beginning, a milestone celebration, or a thoughtful gift, we shape every journey around individual intent—not fixed templates.",
    },

    {
      number: "04",
      title: "Authentic Experiences Over Tourism",
      description:
        "We focus on real, memorable moments rather than commercialized sightseeing. Our aim is to make travel feel lived, not just visited.",
    },

    {
      number: "05",
      title: "Joy in Every Journey",
      description:
        "At the heart of everything we do is joy—creating journeys that feel light, fulfilling, and emotionally lasting, long after the trip ends.",
    },
  ];

  return (
    <section
      id="about-us"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      {/* Background Video */}

      <div className="absolute inset-0 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >

          <source src="/images/about-bg1.mp4" type="video/mp4" />

        </video>

        {/* Dark Overlay */}

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

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[8px] text-[#D4AF37]">

            ABOUT TOURYANTRA

          </p>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">

            Experiences crafted with purpose.

          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">

            TourYantra exists to make travel more meaningful, accessible,
            and deeply personal. We believe that exploring the world should
            not come at the cost of balance in life, but rather enhance it—
            whether it’s finding peace in solitude, strengthening bonds with
            loved ones, celebrating new beginnings, or simply rediscovering
            joy in everyday living.

          </p>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-gray-300">

            Our mission is to design thoughtfully curated travel experiences
            that combine quality, affordability, and emotional value, so every
            journey adds something lasting to the way people live, work,
            connect, and grow.

          </p>

        </div>

        {/* Values */}

        <div className="mb-24">

          {/* Mobile + Tablet */}

          <div className="grid gap-8 md:grid-cols-2 xl:hidden">

            {values.map((item) => (

              <div
                key={item.title}
                className="
                relative

                rounded-3xl

                border
                border-[#D4AF37]/20

                bg-white/5

                p-10

                text-center

                backdrop-blur-lg

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-[#D4AF37]/40
              "
              >

                <div
                  className="
                  absolute

                  left-8
                  top-6

                  text-5xl

                  font-bold

                  text-[#D4AF37]/20

                  select-none
                "
                >

                  {item.number}

                </div>

                <div className="pt-12">

                  <h3 className="mb-5 text-2xl font-semibold text-white">

                    {item.title}

                  </h3>

                  <p className="leading-relaxed text-gray-300">

                    {item.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Desktop Olympic Rings */}

          <div className="hidden xl:block">

            {/* Top Row */}

            <div className="mb-10 grid grid-cols-3 gap-10">

              {values.slice(0, 3).map((item) => (

                <div
                  key={item.title}
                  className="
                  relative

                  rounded-3xl

                  border
                  border-[#D4AF37]/20

                  bg-white/5

                  p-10

                  text-center

                  backdrop-blur-lg

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-[#D4AF37]/40
                "
                >

                  <div
                    className="
                    absolute

                    left-8
                    top-6

                    text-5xl

                    font-extrabold

                    text-[#D4AF37]
                    opacity-60
                    select-none
                  "
                  >

                    {item.number}

                  </div>

                  <div className="pt-12">

                    <h3 className="mb-5 text-2xl font-semibold text-white">

                      {item.title}

                    </h3>

                    <p className="leading-relaxed text-gray-300">

                      {item.description}

                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* Bottom Row */}

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-10">

              {values.slice(3).map((item) => (

                <div
                  key={item.title}
                  className="
                  relative

                  rounded-3xl

                  border
                  border-[#D4AF37]/20

                  bg-white/5

                  p-10

                  text-center

                  backdrop-blur-lg

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-[#D4AF37]/40
                "
                >

                  <div
                    className="
                    absolute

                    left-8
                    top-6

                    text-5xl

                    font-extrabold

                    text-[#D4AF37]
                    opacity-60
                    select-none
                  "
                  >

                    {item.number}

                  </div>

                  <div className="pt-12">

                    <h3 className="mb-5 text-2xl font-semibold text-white">

                      {item.title}

                    </h3>

                    <p className="leading-relaxed text-gray-300">

                      {item.description}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

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

          <h3 className="mb-2 text-6xl font-bold text-[#D4AF37]">

            5+

          </h3>

          <h4 className="mb-8 text-3xl font-semibold text-white">

            Years of Experience

          </h4>

          <div className="mx-auto max-w-4xl space-y-5 text-lg leading-relaxed text-gray-300">

            <p>

              For over five years, TourYantra has been thoughtfully crafting
              journeys that go beyond traditional travel. Our experience has
              been built on understanding people—their need to pause,
              reconnect, celebrate milestones, and create meaningful memories
              with those who matter most.

            </p>

            <p>

              Every itinerary is designed with care, balancing affordability,
              comfort, and authenticity to ensure each traveller experiences
              destinations in a more personal and fulfilling way. From solo
              escapes and family getaways to special celebrations and
              once-in-a-lifetime adventures, we focus on creating seamless
              experiences that leave a lasting emotional impact long after
              the journey ends.

            </p>

            <p>

              With a strong commitment to trust, quality, and human-centered
              travel, we continue to transform ordinary trips into purposeful
              experiences that enrich everyday life.

            </p>

          </div>

        </div>

        {/* Review */}

        <div>

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

        </div>

      </div>

    </section>
  );
}