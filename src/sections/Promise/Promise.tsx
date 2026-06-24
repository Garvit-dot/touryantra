import Image from "next/image";

export default function Promise() {
  const promises = [
    {
      title: "Handcrafted Itineraries",

      description:
        "Every package is designed by us, never copied from templates.",

      media: "/images/promise/planning1.png",

      type: "image",
    },

    {
      title: "Curated Stays",

      description:
        "Carefully selected hotels and experiences for every journey.",

      media: "/images/promise/stays.mp4",

      type: "video",
    },

    {
      title: "Hassle-Free Planning",

      description:
        "We take care of the details so you can simply enjoy.",

      media: "/images/promise/planning2.png",

      type: "image",
    },

    {
      title: "End-to-End Support",

      description:
        "From booking to returning home, we're with you.",

      media: "/images/promise/support.mp4",

      type: "video",
    },

    {
      title: "Memories That Last",

      description:
        "Experiences built to be remembered for years to come.",

      media: "/images/promise/memories.mp4",

      type: "video",
    },
  ];

  const renderCard = (item: any) => (
    <div
      key={item.title}

      className="
      group

      w-full
      max-w-[360px]

      rounded-[36px]

      bg-white

      p-5

      transition
      duration-300

      hover:-translate-y-2
      hover:shadow-2xl
    "
    >

      {/* Media */}

      <div
        className="
        relative

        h-[340px]

        overflow-hidden

        rounded-[28px]
      "
      >

        {item.type === "image" ? (

          <Image
            src={item.media}

            alt={item.title}

            fill

            className="
            object-cover

            transition
            duration-700

            group-hover:scale-110
          "
          />

        ) : (

          <video
            autoPlay
            muted
            loop
            playsInline

            className="
            h-full
            w-full

            object-cover

            transition
            duration-700

            group-hover:scale-110
          "
          >

            <source
              src={item.media}
              type="video/mp4"
            />

          </video>

        )}

      </div>

      {/* Text */}

      <div className="pt-8 text-black">

        <h3 className="mb-4 text-3xl font-semibold">

          {item.title}

        </h3>

        <p className="text-gray-600">

          {item.description}

        </p>

      </div>

    </div>
  );

  return (
    <section
      id="promise"

      className="
      relative

      overflow-hidden

      px-8
      py-28

      text-white

      scroll-mt-32
    "
    >

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"

        style={{
          backgroundImage: "url('/images/promise-bg.jpg')",
        }}
      />

      {/* Overlay */}

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

            Every journey is thoughtfully engineered so you can focus on creating memories instead of planning logistics.

          </p>

        </div>

        {/* Top Row */}

        <div className="mb-10 grid gap-10 md:grid-cols-3">

          {promises.slice(0, 3).map(renderCard)}

        </div>

        {/* Bottom Row */}

        <div className="flex flex-wrap justify-center gap-14">

          {promises.slice(3).map(renderCard)}

        </div>

      </div>

    </section>
  );
}