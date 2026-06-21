import Image from "next/image";

export default function Promise() {
  const promises = [
    {
      title: "Handcrafted Itineraries",

      description:
        "Every package is designed by us, never copied from templates.",

      image: "/images/promise/itinerary.png",
    },

    {
      title: "Curated Stays",

      description:
        "Carefully selected hotels and experiences for every journey.",

      image: "/images/promise/stays.png",
    },

    {
      title: "Hassle-Free Planning",

      description:
        "We take care of the details so you can simply enjoy.",

      image: "/images/promise/planning.png",
    },

    {
      title: "End-to-End Support",

      description:
        "From booking to returning home, we're with you.",

      image: "/images/promise/support.png",
    },

    {
      title: "Memories That Last",

      description:
        "Experiences built to be remembered for years to come.",

      image: "/images/promise/memories.png",
    },
  ];

  return (
    <section
    id = "promise"
    className="relative overflow-hidden px-8 py-28 text-white scroll-mt-32">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/promise-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#07111F]/90" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[8px] text-[#D4AF37]">

            THE TOURYANTRA PROMISE

          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">

            Travel Without The Stress

          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-300">

            Every journey is thoughtfully engineered so you can focus on
            creating memories instead of planning logistics.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {promises.map((item) => (

            <div
              key={item.title}
              className="group rounded-[36px] bg-white p-5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-[340px] overflow-hidden rounded-[28px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="pt-8 text-black">

                <h3 className="mb-4 text-3xl font-semibold">

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