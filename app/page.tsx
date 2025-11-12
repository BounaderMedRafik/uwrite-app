import LandingPage from "@/components/core/landing/LandingPage";
import LenisProvider from "@/components/providers/LenisProvider";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <LenisProvider>
        <LandingPage />
      </LenisProvider>
    </div>
  );
}
