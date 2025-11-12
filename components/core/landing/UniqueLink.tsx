"use client";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const usernames = [
  "kousseila",
  "ramzi",
  "islem",
  "aymen",
  "yassir",
  "fatima",
  "jay",
  "mona",
  "hussein",
  "melissa",
  "manel",
  "tellia",
  "adam",
  "lina",
  "sami",
  "amira",
  "noah",
  "karim",
  "nora",
  "mohcine",
  "reda",
  "rachid",
  "layla",
  "ilyes",
  "amal",
  "marwan",
  "salma",
  "amine",
  "sofia",
  "mehdi",
  "nadia",
  "omar",
  "sarah",
  "hajar",
  "samir",
  "farah",
  "ines",
  "younes",
  "selma",
];

const UniqueLink = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // animate while in view
  });

  // Parallax transforms
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "160%"]);
  const bottomY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const refScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  return (
    <motion.div
      style={{ scale: refScale }}
      ref={ref}
      className="min-h-screen pointer-events-none max-w-5xl mx-auto flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Floating mascot (top-left) */}
      <motion.img
        style={{ marginTop: leftY }}
        transition={{ type: "spring", stiffness: 80 }}
        className="w-44 absolute top-24 left-24"
        src="/illus/mascor/holding-pen.png"
        alt="Mascot holding pen"
      />

      {/* Floating mascot (bottom-right) */}
      <motion.img
        style={{ marginBottom: rightY }}
        transition={{ type: "spring", stiffness: 80 }}
        className="w-64 absolute right-24 z-50 bottom-24"
        src="/illus/mascor/using-pc.png"
        alt="Mascot using PC"
      />

      {/* Top blob */}
      <motion.svg
        style={{ scale: scale }}
        className="w-64 absolute right-24 top-24 drop-shadow-2xl"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M47.9,-49.9C55.1,-40.7,49.1,-20.4,49.6,0.5C50.1,21.4,57.1,42.8,50,58.7C42.8,74.5,21.4,84.9,2.6,82.4C-16.3,79.8,-32.6,64.3,-46.2,48.5C-59.9,32.6,-71,16.3,-67.7,3.3C-64.4,-9.7,-46.7,-19.4,-33,-28.5C-19.4,-37.6,-9.7,-46.2,5.3,-51.6C20.4,-56.9,40.7,-59,47.9,-49.9Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* Bottom blob */}
      <motion.svg
        style={{ marginBottom: bottomY }}
        className="w-72 absolute left-24 bottom-24 drop-shadow-2xl"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#A7F0BA"
          d="M50.8,-54.7C55,-46.5,40.3,-23.3,37.6,-2.7C34.9,17.9,44.2,35.7,40,52.2C35.7,68.7,17.9,83.8,1.5,82.3C-14.9,80.8,-29.8,62.8,-42.9,46.3C-56.1,29.8,-67.5,14.9,-66,1.5C-64.5,-12,-50.2,-24,-37.1,-32.1C-24,-40.2,-12,-44.5,5.6,-50.1C23.3,-55.8,46.5,-62.8,50.8,-54.7Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-4xl font-semibold opacity-80">
          Create your own unique link
        </div>
        <p className="max-w-xs opacity-60 text-center mt-3 mx-auto">
          Turn your portfolio into a single unique link to share anywhere. The
          cute ones are still <span className="font-bold">free</span> 😉
        </p>
      </div>

      {/* Link preview */}
      <div className="text-5xl pl-24 font-bold flex items-center justify-center select-none">
        <span className="opacity-80 select-none">uwrite.me/</span>

        <div className="overflow-hidden relative w-64 h-44 pointer-events-none">
          <ProgressiveBlur
            direction="bottom"
            blurIntensity={0.5}
            className="bottom-0 left-0 w-full h-1/2 absolute z-30"
          />
          <ProgressiveBlur
            direction="top"
            blurIntensity={0.5}
            className="top-0 left-0 w-full h-1/2 absolute z-30"
          />
          <div className="absolute top-0 left-0 w-full h-full z-40 bg-linear-to-b from-background via-transparent to-background" />
          <motion.div
            className="absolute flex flex-col gap-3 pl-4 mt-1.5"
            animate={{ y: ["0%", "-100%"] }}
            transition={{
              duration: 200,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...usernames, ...usernames].map((name, index) => (
              <span
                key={index}
                className="text-5xl font-bold opacity-50 whitespace-nowrap italic"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UniqueLink;
