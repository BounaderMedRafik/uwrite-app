import { SignupForm } from "@/components/signup-form";
import { Banner1 } from "./Banner";
import { Hero115 } from "./Hero";
import { Testimonial10 } from "./Testimonials";
import { Logos8 } from "./TrustedBy";
import UniqueLink from "./UniqueLink";

const LandingPage = () => {
  return (
    <div>
      <Banner1
        title="UWRITE is in Beta"
        description="We’re still building and improving. Expect updates soon!"
        linkText="Give Feedback"
        linkUrl="/feedback"
      />

      <Hero115
        imageSrc="/brand/hero-image.jpg"
        heading={"Showcase Your Story, Professionally."}
        description={
          "UWRITE helps you craft a stunning online portfolio that highlights your skills, projects, and personality — effortlessly. Whether you’re a developer, designer, or creator, Uwrite gives you the tools to tell your story, showcase your achievements, and leave a lasting impression on anyone who visits your page."
        }
      />
      <Logos8 />
      <UniqueLink />
      <Testimonial10 quote="I love how clean and minimal everything looks. It actually feels mine, not like a template everyone else uses." />
      <SignupForm />
    </div>
  );
};

export default LandingPage;
