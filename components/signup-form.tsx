"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <img className=" size-14" src="/brand/uwrite-logo.webp" alt="" />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <form
            className={cn("flex flex-col gap-5 w-full max-w-sm", className)}
            {...props}
          >
            <FieldGroup>
              {/* Header */}
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Start your own <span className="text-primary">UWRITE</span>
                </h1>
                <p className="text-muted-foreground text-sm">
                  Fill in the form below to create your account
                </p>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-3 mt-3">
                <Field>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    required
                  />
                </Field>

                <Field>
                  <Input id="email" type="email" placeholder="Email" required />
                </Field>

                <Field>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Field>

                <Field>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                </Field>

                <Field>
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </Field>
              </div>

              {/* Separator */}
              <FieldSeparator>or continue with</FieldSeparator>

              {/* Social Buttons */}
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  type="button"
                  className="flex items-center justify-center gap-2 w-full hover:bg-muted/50 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-
                4.042-1.61C4.422 18.07 3.633 17.7 
                3.633 17.7c-1.087-.744.084-.729.084-.729 
                1.205.084 1.838 1.236 1.838 1.236 
                1.07 1.835 2.809 1.305 3.495.998.108-.776.417-
                1.305.76-1.605-2.665-.3-5.466-1.332-
                5.466-5.93 0-1.31.465-2.38 
                1.235-3.22-.135-.303-.54-1.523.105-
                3.176 0 0 1.005-.322 3.3 
                1.23.96-.267 1.98-.399 3-.405 
                1.02.006 2.04.138 3 .405 2.28-
                1.552 3.285-1.23 3.285-1.23.645 
                1.653.24 2.873.12 3.176.765.84 
                1.23 1.91 1.23 3.22 0 4.61-
                2.805 5.625-5.475 5.92.42.36.81 
                1.096.81 2.22 0 1.606-.015 
                2.896-.015 3.286 0 .315.21.69.825.57C20.565 
                22.092 24 17.592 24 12.297c0-6.627-
                5.373-12-12-12"
                      fill="currentColor"
                    />
                  </svg>
                  Sign up with GitHub
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="flex items-center justify-center gap-2 w-full hover:bg-muted/50 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-sky-600"
                  >
                    <path
                      d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 
            5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11.86 
            19.42h-2.62v-8.62h2.62v8.62zm-1.31-9.82a1.52 
            1.52 0 1 1 0-3.04 1.52 1.52 0 0 1 
            0 3.04zm12.17 9.82h-2.61v-4.58c0-1.09-.39-1.84-
            1.36-1.84-.74 0-1.18.5-1.37.99-.07.17-
            .08.41-.08.65v4.78h-2.62s.03-7.76 
            0-8.62h2.62v1.22c.35-.54.97-1.31 
            2.37-1.31 1.73 0 3.05 1.13 
            3.05 3.56v5.15z"
                    />
                  </svg>
                  Sign up with LinkedIn
                </Button>
              </div>

              {/* Footer */}
              <FieldDescription className="text-center mt-3 text-sm text-muted-foreground">
                Already have an account?{" "}
                <a href="#" className="text-primary hover:underline">
                  Sign in
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Signup illustration"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
