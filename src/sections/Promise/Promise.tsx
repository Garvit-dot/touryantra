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

      rounded-[30px]
      md:rounded-[36px]

      bg-white

      p-4
      md:p-5

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

        h-[250px]
        sm:h-[300px]
        md:h-[340px]

        overflow-hidden

        rounded-[24px]
        md:rounded-[28px]
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

      <div className="pt-6 md:pt-8 text-black">

        <h3 className="mb-3 md:mb-4 text-2xl md:text-3xl font-semibold">

          {item.title}

        </h3>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">

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
    px-5
    md:px-8
    py-20
    md:py-28
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

      <div className="mb-14 md:mb-20 text-center">

        <p className="mb-4 text-xs md:text-sm uppercase tracking-[6px] md:tracking-[8px] text-[#D4AF37]">

          THE TOURYANTRA PROMISE

        </p>

        <h2 className="mb-5 md:mb-6 text-3xl md:text-5xl font-bold">

          Travel Without The Stress

        </h2>

        <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-300">

          Every journey is thoughtfully engineered so you can focus on
          creating memories instead of planning logistics.

        </p>

      </div>

      {/* Mobile */}

      <div className="flex flex-col items-center gap-8 lg:hidden">

        {promises.map(renderCard)}

      </div>

      {/* Desktop */}

      <div className="hidden lg:block">

        {/* Top Row */}

        <div className="mb-10 grid grid-cols-3 gap-10">

          {promises.slice(0, 3).map(renderCard)}

        </div>

        {/* Bottom Row */}

        <div className="flex justify-center gap-14">

          {promises.slice(3).map(renderCard)}

        </div>

      </div>

    </div>

  </section>
);
}