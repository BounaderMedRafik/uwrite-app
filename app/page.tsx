import LandingPage from "@/components/pages/LandingPage";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      {" "}
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <div>Hello</div>
      </SignedIn>
    </div>
  );
}
