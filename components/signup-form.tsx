import React from "react";
import { Button } from "./ui/button";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const SignUpForm = () => {
  return (
    <div className=" min-h-[75vh] flex items-center justify-center">
      <div className=" max-w-sm w-full flex flex-col items-center ">
        <img className=" size-14" src="/brand/uwrite-logo.webp" alt="" />
        <h2 className=" text-3xl max-w-xs text-center mt-4">Join UWRITE</h2>
        <p className=" max-w-2xs text-center opacity-75 ">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
        </p>
        <div className=" max-w-2xs w-full flex items-center justify-center flex-col gap-1 mt-5">
          <Button className="w-full">
            <FaGoogle className=" size-3" />
            <div className=" h-px bg-background w-2.5 rounded-full opacity-50" />
            Continue with Google
          </Button>
          <Button variant={"outline"} className="w-full">
            <FaFacebook className=" size-3" />
            <div className=" h-px bg-foreground w-2.5 rounded-full opacity-50" />
            Continue with Facebook
          </Button>
          <Button variant={"outline"} className="w-full">
            <FaGithub className=" size-3" />
            <div className=" h-px bg-foreground w-2.5 rounded-full opacity-50" />
            Continue with Github
          </Button>
          <Button variant={"outline"} className="w-full">
            <FaLinkedin className=" size-3" />
            <div className=" h-px bg-foreground w-2.5 rounded-full opacity-50" />
            Continue with LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
