"use client";
import React, { useEffect, useState } from "react";
import type { JSX } from "react";
import { LayoutGroup, motion } from "motion/react";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

export default function Hero(): JSX.Element {
  return (
    <section className="relative md:h-[calc(100vh-84px)] max-h-[1440px] md:mt-[30px] lg:mt-2 mt flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <HeroLeft />
          </div>
          <div className="lg:col-span-2">
            <HeroRight />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroLeft(): JSX.Element {
  return (
    <div className="relative">
      <Title />
      <Strapline />
    </div>
  );
}

function Title(): JSX.Element {
  const variantsTextBlurIn = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <div className="relative">
      <div
        className="leading-none text-foreground"
        style={{
          fontFamily: "'League Spartan', ui-sans-serif, Inter, system-ui",
          letterSpacing: "-0.02em",
        }}
      >
        <div className="flex items-center flex-wrap max-sm:justify-center text-7xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-9xl font-semibold tracking-tight">
          <span>gud for us</span>
        </div>
      </div>
    </div>
  );
}

function Strapline(): JSX.Element {
  return (
    <div className="mt-0 text-4xl md:text-5xl lg:text-6xl text-center">
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        staggerFrom="first"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
        }}
        containerClassName="max-sm:pl-4"
        elementLevelClassName="pb-[6px]" // Add this padding to prevent cutoff
      >
        {`non negotiables`}
      </VerticalCutReveal>
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        staggerFrom="last"
        reverse={true}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 0.5,
        }}
        containerClassName="max-sm:pl-4"
      >
        {`of Health ❤️`}
      </VerticalCutReveal>
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        staggerFrom="center"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 1.1,
        }}
        containerClassName="max-sm:pl-4"
        elementLevelClassName="pb-[6px]" // Add this padding to prevent cutoff
      >
        {`and ✨ wellbeing`}
      </VerticalCutReveal>
    </div>
  );
}

function HeroRight(): JSX.Element {
  return (
    <div className="relative">
      <BookCard />
    </div>
  );
}

function BookCard(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleClick = () => setIsOpen((v) => !v);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  }, []);

  return (
    <div className="relative lg:ml-auto max-lg:mx-auto w-full max-w-sm aspect-[10.2/16]">
      <GlowFloor />
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={isOpen ? "Close book preview" : "Open book preview"}
        className="relative w-full h-full cursor-pointer rounded-xl bg-background ring-1 ring-foreground/10 shadow-2xl transition-all duration-700 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 overflow-hidden"
        style={{
          transform: isOpen
            ? ("perspective(1600px) rotateY(-25deg) scale(0.95)" as React.CSSProperties["transform"])
            : ("perspective(1600px) rotateY(0deg) scale(1)" as React.CSSProperties["transform"]),
        }}
      >
        <CoverFront isOpen={isOpen} />
        <PageStack isOpen={isOpen} />
        <NeonOutline isOpen={isOpen} />
      </button>
    </div>
  );
}

function GlowFloor(): JSX.Element {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-6 -bottom-6 h-24 rounded-full blur-2xl bg-emerald-500/20"
    />
  );
}

type CoverFrontProps = {
  isOpen: boolean;
};

function CoverFront({ isOpen }: CoverFrontProps): JSX.Element {
  const [showFallback, setShowFallback] = useState<boolean>(false);

  return (
    <div
      className="absolute inset-0 rounded-xl overflow-hidden transition-all duration-700 ease-out"
      style={{
        transform: isOpen ? "rotateY(-140deg)" : "rotateY(0deg)",
        transformOrigin: "left center",
      }}
    >
      {!showFallback ? (
        <img
          src="https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/envo/temp-gud-for-us.jpeg"
          alt="Good For Us — cover art"
          className="h-full w-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const img = e.currentTarget;
            img.style.display = "none";
            const next = img.nextElementSibling as HTMLElement | null;
            if (next) next.style.display = "flex";
            setShowFallback(true);
          }}
        />
      ) : null}

      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 items-center justify-center text-foreground text-6xl font-bold hidden"
        style={{ display: showFallback ? "flex" : "none" }}
      >
        <div className="text-center">
          <div className="text-7xl font-bold mb-2">gud</div>
          <div className="text-7xl font-bold mb-2">for</div>
          <div className="text-7xl font-bold">us</div>
        </div>
      </div>
    </div>
  );
}

type PageStackProps = {
  isOpen: boolean;
};

function PageStack({ isOpen }: PageStackProps): JSX.Element {
  return (
    <div
      className="absolute inset-0 rounded-xl bg-amber-100/30 transition-opacity duration-700"
      style={{
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div className="absolute inset-0 p-12 overflow-auto flex items-start justify-center">
        <div
          style={{
            maxWidth: 540,
            fontFamily: "'Dancing Script', 'Segoe UI', Georgia, serif",
            lineHeight: 1.7,
            color: "#0f172a", // neutral-900
            textAlign: "left",
            transform: "translateY(12%)",
            whiteSpace: "pre-wrap",
          }}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        >
          <p>
            Microplastics are everywhere — in the seas we love, the air we
            breathe, and the food we eat. Learn how they reach our bodies, what
            they may do, and how small, steady choices can help set us free.
          </p>
        </div>
      </div>
    </div>
  );
}

type NeonOutlineProps = {
  isOpen: boolean;
};

function NeonOutline({ isOpen }: NeonOutlineProps): JSX.Element {
  return (
    <div
      aria-hidden="true"
      className="absolute -inset-1 rounded-xl transition-opacity duration-700 blur-xl pointer-events-none"
      style={{
        opacity: isOpen ? 1 : 0.3,
      }}
    />
  );
}
