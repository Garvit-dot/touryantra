import Image from "next/image";

export default function FeaturedEscapes() {
  const destinations = [
    {
      name: "Bali",
      image: "/flyers/flyer1.png",
    },

    {
      name: "Dubai",
      image: "/flyers/flyer2.png",
    },

    {
      name: "Thailand",
      image: "/flyers/flyer3.png",
    },
  ];

  return (
    <section
      id="experiences"
      className="relative overflow-hidden py-32 scroll-mt-32"
    >

      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/airport-bg.jpg"
          alt="Airport Background"
          fill
          priority
          className="object-cover scale-105 blur-[1px]"
        />

        <div className="absolute inset-0 bg-[#07111F]/88" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[8px] text-[#D4AF37]">

            FEATURED ESCAPES

          </p>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">

            Our Signature Experiences

          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-300">

            Handcrafted international journeys designed exclusively by TourYantra.

          </p>

        </div>

        {/* Flyers */}

        <div className="flex flex-wrap justify-center gap-10">

          {destinations.map((item) => (

            <div
              key={item.name}
              className="group w-[400px]"
            >

              <div
                className="
                relative
                aspect-[9/16]
                overflow-hidden
                rounded-[28px]
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-[1.02]
                hover:shadow-[0_0_45px_rgba(212,175,55,0.25)]
              "
              >

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}