import { ArrowLeft, ArrowRight, ArrowUpRight, Wifi, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero115Props {
  heading: string;
  description: string;
  trustText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero115 = ({
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  trustText = "Trusted by 500+ developers & creators worldwide",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "placeholder",
}: Hero115Props) => {
  return (
    <section className="overflow-hidden pb-32 pt-44 relative ">
      <div className="bg-primary/50 h-44 w-72 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 rounded-full blur-3xl" />

      {/* Soft green accent blob */}
      <div className="bg-[#A7D477]/50 h-64 w-64 absolute top-32 left-1/4 rounded-full blur-3xl opacity-80" />

      {/* Blue glow for contrast */}
      <div className="bg-blue-400/40 h-72 w-72 absolute top-60 right-1/4 rounded-full blur-3xl opacity-70" />

      <div className="container mx-auto">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>
            <img
              className=" size-14 mx-auto"
              src="/brand/uwrite-logo.webp"
              alt=""
            />
            <h2 className="mx-auto max-w-5xl text-balance text-center text-3xl font-medium md:text-6xl">
              {heading}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-center md:text-lg">
              {description}
            </p>
            <div className="flex  items-center justify-center gap-1.5 pb-4 pt-3">
              <Button size="lg">
                Get Started Free <ArrowRight />
              </Button>
              <Button variant={"secondary"} size="lg">
                Know more <ArrowUpRight />
              </Button>
            </div>
            <div className=" mx-auto">
              {trustText && (
                <div className="text-muted-foreground text-xs">{trustText}</div>
              )}
            </div>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="mx-auto h-full  w-full max-w-5xl rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero115 };
