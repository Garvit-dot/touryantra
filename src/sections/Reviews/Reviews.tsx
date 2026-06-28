import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      name: "Arun Mittal",
      media: "/reviews/review1_.jpg",
      review:
        "An unforgettable experience planned with exceptional attention to detail.",
      type: "image",
    },

    {
      name: "Aneeka Singh",
      media: "/reviews/review2.mp4",
      review:
        "Everything was seamless from start to finish. We only had to enjoy ourselves.",
      type: "video",
    },

    {
      name: "Ajit Jain",
      media: "/reviews/review3_.jpg",
      review:
        "Professional, reliable and extremely easy to work with.",
      type: "image",
    },

    {
      name: "Riya Verma",
      media: "/reviews/review4_.jpg",
      review:
        "One of the smoothest international trips we have ever had.",
      type: "image",
    },

    {
      name: "Siddharth Sharma",
      media: "/reviews/review6.mp4",
      review:
        "Every little detail was thoughtfully planned and executed perfectly.",
      type: "video",
    },

    {
      name: "Priya Mehta",
      media: "/reviews/review7_.jpg",
      review:
        "An incredibly well-organized journey with beautiful experiences and zero stress throughout the trip.",
      type: "image",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-20 md:py-28"
    >

      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/reviews-bg.jpg"
          alt="Reviews Background"
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-[#07111F]/90" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">

        {/* Heading */}

        <div className="mb-14 md:mb-20 text-center">

          <p className="mb-4 text-xs md:text-sm uppercase tracking-[6px] md:tracking-[8px] text-[#D4AF37]">

            TRAVELLER STORIES

          </p>

          <h2 className="mb-5 md:mb-6 text-3xl md:text-5xl font-bold text-white">

            Hear it from our travellers

          </h2>

          <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-300">

            Every journey tells a story. Here are a few memories created with TourYantra.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((item) => (

            <div
              key={item.name}
              className="
              overflow-hidden

              rounded-[28px]
              md:rounded-3xl

              border
              border-[#D4AF37]/20

              bg-white/5

              backdrop-blur-lg

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-[#D4AF37]/40
              hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]
            "
            >

              {/* Media */}

              <div className="relative h-[240px] sm:h-[280px] md:h-[300px]">

                {item.type === "image" ? (

                  <Image
                    src={item.media}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                ) : (

                  <video
                    controls
                    muted={item.name === "Siddharth Sharma"}
                    className="h-full w-full object-cover"
                  >

                    <source
                      src={item.media}
                      type="video/mp4"
                    />

                  </video>

                )}

              </div>

              {/* Content */}

              <div className="p-6 md:p-8">

                <div className="mb-3 md:mb-4 text-[#D4AF37] text-lg">

                  ★★★★★

                </div>

                <p className="mb-5 md:mb-6 text-sm md:text-base leading-relaxed text-gray-300">

                  "{item.review}"

                </p>

                <h3 className="text-base md:text-lg font-semibold text-white">

                  {item.name}

                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}