import Image from "next/image";

export default function SignatureJourneys() {
  const journeys = [
    {
      title: "Dubai",
      description: "Skyline luxury and desert adventures.",
      media: "/images/journeys/bali1.mp4",
      type: "video",
    },

    {
      title: "Bali",
      description: "Paradise, temples and serenity.",
      media: "/images/journeys/bali.mp4",
      type: "video",
    },

    {
      title: "Vietnam",
      description: "Lanterns, culture and hidden gems.",
      media: "/images/journeys/vietnam1.mp4",
      type: "video",
    },

    {
      title: "Thailand",
      description: "Island escapes and vibrant nightlife.",
      media: "/images/journeys/thailand.mp4",
      type: "video",
    },
  ];

  const renderCard = (item: any) => (

    <div
      key={item.title}
      className="
      group

      rounded-[30px]
      md:rounded-[36px]

      bg-white

      p-4
      md:p-6

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

        h-[320px]
        sm:h-[420px]
        md:h-[550px]

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

        <h3 className="mb-3 text-2xl md:text-4xl font-semibold">

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
    id="journeys"
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

    {/* Background Video */}

    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/journeys-poster.png"
      className="absolute inset-0 h-full w-full object-cover"
    >

      <source
        src="/videos/journeys1.mp4"
        type="video/mp4"
      />

    </video>

    {/* Overlay */}

    <div className="absolute inset-0 bg-[#07111F]/85" />

    {/* Content */}

    <div className="relative z-10 mx-auto max-w-7xl">

      {/* Heading */}

      <div className="mb-14 md:mb-20 text-center">

        <p className="mb-4 text-xs md:text-sm uppercase tracking-[6px] md:tracking-[8px] text-[#D4AF37]">

          EXPERIENCES

        </p>

        <h2 className="mb-5 md:mb-6 text-3xl md:text-5xl font-bold">

          Where Will You Go Next?

        </h2>

        <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-300">

          Explore handcrafted journeys designed exclusively by TourYantra.

        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:gap-12 md:grid-cols-2">

        {journeys.map(renderCard)}

      </div>

    </div>

  </section>
);
}