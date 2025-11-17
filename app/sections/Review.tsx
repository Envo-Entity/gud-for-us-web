export default function Review() {
  return (
    <section
      id="testimonials"
      className="relative border-t border-foreground/20m"
    >
      <div className="mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader />
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className=" flex items-end justify-between">
      <h2
        className="text-2xl sm:text-3xl text-foreground tracking-tight font-semibold"
        style={{
          fontFamily: "'League Spartan', ui-sans-serif, Inter, system-ui",
        }}
      >
        What readers say
      </h2>
    </div>
  );
}

function TestimonialCarousel() {
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=120&auto=format&fit=crop",
      name: "Sarah M.",
      role: "Wellness Coach",
      quote: "GoodForUs helped me reconnect with what truly matters in life.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop",
      name: "James K.",
      role: "Sustainable Living Advocate",
      quote: "A beautiful guide to living intentionally in our modern world.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=120&auto=format&fit=crop",
      name: "Elena R.",
      role: "Mindfulness Teacher",
      quote: "The non-negotiables became my daily compass.",
    },
  ];

  return (
    <div className="relative">
      <Marquee>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative w-fit mx-2 flex items-center justify-start"
          >
            <TestimonialCard key={index} {...testimonial} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

function TestimonialCard({
  image,
  name,
  role,
  quote,
}: {
  image: string;
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <figure className="snap-start min-w-[280px] md:min-w-[360px] rounded-2xl bg-background/60 ring-1 ring-foreground/20 p-6 transition hover:-translate-y-1 hover:ring-emerald-400/30 transform-gpu">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt=""
          className="h-9 w-9 rounded-full object-cover ring-1 ring-foreground/20"
        />
        <div>
          <figcaption className="text-sm text-foreground font-medium">
            {name}
          </figcaption>
          <div className="text-xs text-foreground">{role}</div>
        </div>
      </div>
      <blockquote
        className="mt-4 text-sm text-foreground"
        style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
      >
        "{quote}"
      </blockquote>
    </figure>
  );
}

export const Marquee: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full overflow-hidden sm:mt-4 z-10">
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
        <div className="flex w-max animate-marquee [--duration:30s]">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};
