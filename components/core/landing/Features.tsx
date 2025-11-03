"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AnimatePresence, motion } from "motion/react";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Feature197Props {
  features?: FeatureItem[];
}

const Feature197 = ({
  features = [
    {
      id: 1,
      title: "Build Your Portfolio Effortlessly",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      description:
        "Create a beautiful and professional online portfolio in minutes — no coding needed. Highlight your skills, experiences, and achievements in a clean, minimal design that reflects your personality.",
    },
    {
      id: 2,
      title: "Integrated Blogging Experience",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      description:
        "Add your personal blog directly to your portfolio. Share your thoughts, tutorials, and insights in an elegant layout that complements your portfolio content seamlessly.",
    },
    {
      id: 3,
      title: "Showcase Projects & Ideas",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      description:
        "Display your projects, case studies, and creative work beautifully. Each project page is thoughtfully designed to let your work speak for itself — simple, modern, and distraction-free.",
    },
    {
      id: 4,
      title: "Link in Bio Made Smarter",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      description:
        "Use your portfolio as your universal ‘link in bio’. Showcase who you are, what you’ve built, and where people can find you — all from one sleek, shareable link.",
    },
    {
      id: 5,
      title: "Join a Creative Community",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      description:
        "Be part of a growing network of creators, developers, and designers. Explore other portfolios, get inspired, and connect with like-minded people who share your passion.",
    },
  ],
}: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const [prevTabId, setPrevTabId] = useState<number>(1);

  const activeFeature = features.find((f) => f.id === activeTabId)!;
  const direction = activeTabId > prevTabId ? 1 : -1; // 1 = down, -1 = up

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          {/* Accordion Section */}
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className="transition-opacity hover:opacity-80"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setPrevTabId(activeTabId);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 transition"
                  >
                    <h4
                      className={`text-xl font-semibold ${
                        tab.id === activeTabId
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tab.title}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-base">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Animated Image Preview */}
          <div className="bg-muted relative m-auto hidden w-1/2 overflow-hidden rounded-xl md:block h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={activeFeature.image}
                src={activeFeature.image}
                alt={activeFeature.title}
                className="absolute inset-0 h-full w-full rounded-xl object-cover"
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    y: dir * 50,
                    opacity: 0,
                    filter: "blur(10px)",
                  }),
                  center: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.45,
                      ease: [0.25, 1, 0.5, 1],
                    },
                    filter: "blur(0px)",
                  },
                  exit: (dir) => ({
                    y: -dir * 50,
                    opacity: 0,
                    transition: {
                      duration: 0.35,
                      ease: [0.5, 0, 0.75, 0],
                    },
                    filter: "blur(10px)",
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature197 };
