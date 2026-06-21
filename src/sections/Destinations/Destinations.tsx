export default function Destinations() {
  const destinations = [
    {
      name: "Dubai",
      description: "Skyline luxury and desert adventures.",
    },

    {
      name: "Bali",
      description: "Paradise, temples and serenity.",
    },

    {
      name: "Vietnam",
      description: "Culture, lanterns and hidden gems.",
    },

    {
      name: "Thailand",
      description: "Beaches, nightlife and island escapes.",
    },
  ];

  return (
    <section className="bg-[#07111F] px-8 py-32 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">

          <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">

            Destinations

          </p>

          <h2 className="mb-6 text-5xl font-bold">

            Curated Experiences

          </h2>

          <p className="text-lg text-gray-400">

            Explore our handpicked international journeys.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {destinations.map((place) => (

            <div
              key={place.name}
              className="group rounded-3xl border border-white/10 bg-white/5 p-10 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]"
            >

              <h3 className="mb-4 text-4xl font-bold">

                {place.name}

              </h3>

              <p className="text-gray-400">

                {place.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}