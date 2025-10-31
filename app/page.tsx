import LandingPage from "@/components/pages/LandingPage";
import MainPageContennt from "@/components/pages/MainPageContennt";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      {" "}
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <MainPageContennt />
      </SignedIn>
    </div>
  );
}
