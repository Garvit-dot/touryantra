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
      className="relative overflow-hidden py-28"
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

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[8px] text-[#D4AF37]">

            TRAVELLER STORIES

          </p>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">

            Hear it from our travellers

          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-300">

            Every journey tells a story. Here are a few memories created with TourYantra.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((item) => (

            <div
              key={item.name}

              className="
              overflow-hidden

              rounded-3xl

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

              <div className="relative h-[300px]">

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

              <div className="p-8">

                <div className="mb-4 text-[#D4AF37]">

                  ★★★★★

                </div>

                <p className="mb-6 text-gray-300">

                  "{item.review}"

                </p>

                <h3 className="font-semibold text-white">

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