"use client";

import Image from "next/image";

const startups = [
  {
    name: "Ajnhawk",
    logo: "/ajnhawk.png",
  },
  {
    name: "Ctruh",
    logo: "/crtuh-removebg-preview.png",
    logoScale: 1.12,
  },
  {
    name: "Daten & Wissen",
    logo: "/dats-and-wittson-removebg-preview.png",
    logoScale: 1.18,
  },
  {
    name: "Indecimal",
    logo: "/indecimal_logo.jpeg",
  },
  {
    name: "Micob",
    logo: "/micob-removebg-preview.png",
    logoScale: 1.12,
  },
  {
    name: "Saltech Design Labs",
    logo: "/recyclersaltech_logo-removebg-preview.png",
    logoScale: 1.08,
  },
  {
    name: "Sitepace AI",
    logo: "/sitepace-removebg-preview%20.png",
    logoScale: 1.1,
  },
  {
    name: "Strawcture",
    logo: "/strawcture_eco_cover-removebg-preview.png",
    logoScale: 1.08,
  },
  {
    name: "Townplanmap",
    logo: "/townplanmap.png",
    logoScale: 1.06,
  },
];

export function JoinedStartupsSection() {
  const marqueeStartups = [...startups, ...startups];

  return (
    <section
      id="joined-startups"
      className="px-4 py-16 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, #F7FAFE 0%, #EEF4FB 45%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#3F64AB] sm:text-2xl">
            STARTUPS THAT JOINED
          </h2>
          <h3 className="mb-6 text-3xl font-normal uppercase tracking-wide text-black sm:text-4xl lg:text-5xl">
            Builders Already In The LeapFWD Network
          </h3>
          <div className="mx-auto mb-8 h-0.5 w-16 bg-[#3F64AB]"></div>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-black sm:text-lg">
            A strong cohort makes the program sharper. These emerging brands add
            fresh thinking across construction workflows, material innovation,
            sustainability, data-led planning, and the future of built spaces.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_2.05fr]">
          <div className="h-full max-w-lg overflow-hidden rounded-[28px] bg-[#123C6B] p-6 text-white shadow-[0_20px_60px_rgba(18,60,107,0.18)] sm:p-7 lg:p-8">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-4xl font-semibold leading-none sm:text-5xl">09</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/70 sm:text-sm">
                  Startup Brands Featured
                </p>
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/80">
                The mix reflects what LeapFWD is built for: practical innovation
                with real-world relevance for proptech, contech, circularity, and
                smarter urban systems.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-[#DCE7F5] bg-white/75 py-6 shadow-[0_18px_55px_rgba(63,100,171,0.10)] backdrop-blur-sm">
            <div className="marquee-fade pointer-events-none absolute"></div>
            <div className="marquee-track hover:[animation-play-state:paused]">
              {marqueeStartups.map((startup, index) => (
                <div
                  key={`${startup.name}-${index}`}
                  className="group mx-3 flex w-[230px] flex-shrink-0 flex-col justify-between rounded-[24px] border border-[#D9E6F6] bg-white p-5 shadow-[0_12px_36px_rgba(63,100,171,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9EB7DD] hover:shadow-[0_18px_48px_rgba(63,100,171,0.16)] sm:w-[250px]"
                >
                  <div className="flex items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#F9FBFE_0%,#EEF4FB_100%)] p-5">
                    <div className="relative h-[104px] w-full">
                      <Image
                        src={startup.logo}
                        alt={`${startup.name} logo`}
                        fill
                        sizes="(max-width: 640px) 180px, 200px"
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                        style={{
                          transform: `scale(${startup.logoScale ?? 1})`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#123C6B] sm:text-base">
                      {startup.name}
                    </p>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3F64AB]"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
