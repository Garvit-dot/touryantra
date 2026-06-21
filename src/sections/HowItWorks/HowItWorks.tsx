import {
  Briefcase,
  Map,
  Plane,
  Camera,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Briefcase,
      number: "01",
      title: "Tell Us Your Dream Trip",
    },

    {
      icon: Map,
      number: "02",
      title: "We Curate Your Journey",
    },

    {
      icon: Plane,
      number: "03",
      title: "Pack & Fly",
    },

    {
      icon: Camera,
      number: "04",
      title: "Make Memories Forever",
    },
  ];

  return (
    <section
    id = "how-it-works"
    className="relative overflow-hidden px-8 py-32 text-white">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/howitworks-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#07111F]/88" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-24 text-center">

          <p className="mb-4 text-sm uppercase tracking-[8px] text-[#D4AF37]">

            HOW IT WORKS

          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">

            Your Journey In Four Steps

          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-300">

            From your first message to unforgettable memories.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Connecting Line */}

          <div className="absolute left-[8%] right-[8%] top-14 hidden h-[2px] bg-[#D4AF37]/30 lg:block" />

          <div className="grid gap-16 lg:grid-cols-4">

            {steps.map((step) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.number}
                  className="relative text-center"
                >

                  {/* Circle */}

                  <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-black/30 backdrop-blur-md transition duration-300 hover:scale-110">

                    <Icon
                      size={40}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  {/* Number */}

                  <div className="mb-4 text-sm font-semibold tracking-[4px] text-[#D4AF37]">

                    {step.number}

                  </div>

                  {/* Title */}

                  <h3 className="text-2xl font-semibold">

                    {step.title}

                  </h3>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}