import Image from "next/image";

export default function SignatureJourneys() {
  const journeys = [
    {
      title: "Dubai",
      description: "Skyline luxury and desert adventures.",
      image: "/images/journeys/dubai.jpg",
    },

    {
      title: "Bali",
      description: "Paradise, temples and serenity.",
      image: "/images/journeys/bali.jpg",
    },

    {
      title: "Vietnam",
      description: "Lanterns, culture and hidden gems.",
      image: "/images/journeys/vietnam.jpg",
    },

    {
      title: "Thailand",
      description: "Island escapes and vibrant nightlife.",
      image: "/images/journeys/thailand.jpg",
    },
  ];

  return (
    <section
    id = "journeys"
    className="relative overflow-hidden px-8 py-28 text-white scroll-mt-32">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >

        <source src="/videos/journeys1.mp4" type="video/mp4" />

      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#07111F]/85" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[8px] text-[#D4AF37]">

            SIGNATURE JOURNEYS

          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">

            Where Will You Go Next?

          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-300">

            Explore handcrafted journeys designed exclusively by TourYantra.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-12 md:grid-cols-2">

          {journeys.map((item) => (

            <div
              key={item.title}
              className="group rounded-[36px] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-[550px] overflow-hidden rounded-[28px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="pt-8 text-black">

                <h3 className="mb-3 text-4xl font-semibold">

                  {item.title}

                </h3>

                <p className="text-gray-600">

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}