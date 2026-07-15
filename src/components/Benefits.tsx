import Reveal from "@/components/Reveal";

const benefits = [
  {
    number: "01",
    title: "Access to elite talent",
    description:
      "Tap into a curated network of pre-screened candidates across IT, healthcare, finance, and more.",
  },
  {
    number: "02",
    title: "Reduced time-to-hire",
    description:
      "Our recruiting process shortens hiring cycles so critical roles get filled without delay.",
  },
  {
    number: "03",
    title: "Scalable workforce solutions",
    description:
      "From one hire to full team build-outs, we adapt staffing support to match your demand.",
  },
  {
    number: "04",
    title: "Expert industry insights",
    description:
      "Work with recruiters who understand market salaries, skills trends, and hiring competition.",
  },
];

export default function Benefits() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[960px]">
        <h2 className="text-center text-[32px] font-bold tracking-[-0.03em] text-[#081B4B] sm:text-[40px]">
          Benefits
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.number} delay={index * 100} direction="up">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#1F6BFF] text-[14px] font-bold text-white">
                  {benefit.number}
                </div>
                <div>
                  <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#111827]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#6b7280]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
