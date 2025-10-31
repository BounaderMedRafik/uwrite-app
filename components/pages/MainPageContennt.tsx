"use client";
import { useCheckUserInSupabase } from "@/db-actions/useCheckUserInSupabase";
import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { socialsList } from "../consts/socialsQuestionnaire";
import { Button } from "../ui/button";

const MainPageContennt = () => {
  const { exists, loading } = useCheckUserInSupabase();

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex  items-center gap-2">
          <Loader size={12} className=" animate-spin" />
          <h1 className=" text-xs">Loading...</h1>
        </div>
      </div>
    );

  return exists ? <MainComp /> : <Questionnaire />;
};

const Questionnaire = () => {
  const { user } = useUser();
  const [socials, setSocials] = useState(
    Object.fromEntries(socialsList.map((s) => [s.key, ""]))
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-3xl rounded-2xl p-8 backdrop-blur-md">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={user?.imageUrl}
            alt="User avatar"
            className="size-14 rounded-full border border-border/30 object-cover shadow-sm"
          />
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Connect your socials
            </h1>
            <p className="text-sm text-muted-foreground">
              Add your usernames — keep it simple and clean
            </p>
          </div>
        </div>

        {/* Socials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {socialsList.map((item) => {
            const value = socials[item.key as keyof typeof socials];
            const isFilled = value.trim().length > 0;

            return (
              <div
                key={item.key}
                className={`group flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 ${
                  isFilled
                    ? "border-primary/60 bg-primary/5"
                    : "border-border/30 bg-background/40 hover:border-border/50"
                }`}
              >
                <div
                  className={`text-lg transition-colors ${
                    isFilled
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground/80"
                  }`}
                >
                  {item.icon}
                </div>

                <div className="flex flex-1 items-center gap-1 text-sm text-muted-foreground overflow-hidden">
                  <span
                    className={`whitespace-nowrap transition-colors ${
                      isFilled ? "text-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {item.baseUrl}
                  </span>
                  <input
                    value={value}
                    onChange={(e) =>
                      setSocials({ ...socials, [item.key]: e.target.value })
                    }
                    placeholder={item.baseUrl ? "@username" : "www.website.com"}
                    className={`min-w-0 flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors ${
                      isFilled ? "text-primary font-medium" : ""
                    }`}
                    type="text"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end">
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

const MainComp = () => {
  return <div>Main</div>;
};

export default MainPageContennt;
