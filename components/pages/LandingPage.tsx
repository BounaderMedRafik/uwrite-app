"use client";
import { SignUp } from "@clerk/nextjs";
import { ChevronDown, Github } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "../ui/Logo";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

const LandingPage = () => {
  return (
    <>
      <main className="h-[calc(100vh-1.5rem)] bg-muted m-3 rounded-md flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Logo */}
          <motion.div
            className="py-4 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <Logo className="size-14 drop-shadow" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl text-center font-serif max-w-lg mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.2,
            }}
          >
            open-source social portfolio platform, for everyone.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-center mt-4 opacity-75 text-sm max-w-xs mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.75, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.4,
            }}
          >
            Browse and follow portfolios, showcase projects, blogs, and
            galleries, and engage with likes and updates.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mx-auto mt-6 flex items-center justify-center gap-1.5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.6,
            }}
          >
            <a href="#auth">
              <Button size="sm">
                <div className="flex items-center gap-2">
                  <p>Engage Now!</p>
                  <ChevronDown size={10} />
                </div>
              </Button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/BounaderMedRafik/pothos"
            >
              <Button variant="outline" size="sm">
                <div className="flex items-center gap-2">
                  <Github size={10} />
                  <p>Star on GitHub</p>
                </div>
              </Button>
            </a>
          </motion.div>

          {/* Footer note */}
          <motion.div
            className="mt-5 text-center text-xs opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.8,
            }}
          >
            Made with 🤎 by{" "}
            <a
              href="https://bmed.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wavy"
            >
              BounaderMedRafik
            </a>
          </motion.div>
        </motion.div>
      </main>
      <AuthComp />
      <Footer />
    </>
  );
};

const AuthComp = () => {
  const [signup, setSignup] = useState(true);
  return (
    <div id="auth" className=" min-h-screen flex items-center justify-center">
      <SignUp
        routing="hash"
        appearance={{
          variables: {
            colorBackground: "#f3f3f3",
            colorText: "#545454",
          },
          elements: {
            cardBox: {
              boxShadow: "none",
              background: "transparent",
            },
            card: {
              backgroundColor: "transparent",
              color: "#545454",
              borderRadius: "1rem",
            },
            rootBox: {
              boxShadow: "none",
            },
            formFieldInput: {
              backgroundColor: "white",
              color: "#545454",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              padding: "0.75rem",
            },
            formButtonPrimary: {
              backgroundColor: "#545454",
              color: "#f3f3f3",
              borderRadius: "0.5rem",
              padding: "0.75rem 1rem",
              fontWeight: "bold",
            },

            footer: {
              display: "none",
            },
            footerAction: {
              display: "none",
            },
            footerActionText: {
              display: "none",
            },
          },
        }}
      />
    </div>
  );
};

const Footer = () => {
  const links: {
    label: string;
    href: string;
  }[] = [
    {
      label: "Terms",
      href: "/terms",
    },
    {
      label: "Privacy",
      href: "/privacy",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];
  return (
    <footer className="bg-muted m-3 rounded-md">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center ">
          <Logo />
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-sm opacity-75 ">
          <span>
            Uwrite is an open-source platform for creators and developers to
            share their portfolios, showcase projects, publish blogs, and
            connect with others through a simple, community-driven experience.
          </span>
        </p>

        {/* Links */}
        <div>
          <ul className="flex items-center justify-center gap-2 mt-6 text-sm opacity-75">
            {links.map((item, i) => (
              <React.Fragment key={i}>
                <li className=" hover:underline underline-offset-4 ">
                  <Link href={item.href}>{item.label}</Link>
                </li>
                {i < links.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className="text-center text-sm opacity-50 mt-6">
          <p>
            © 2025{" "}
            <a
              className=" hover:underline underline-offset-4"
              href="https://bmed.vercel.app/"
              target="_blank"
            >
              BMED ↗
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingPage;
