import LandingPage from "@/components/core/landing/LandingPage";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <div className=" py-24 flex items-center justify-center gap-2">
        <Button>regular</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
        <Button size="sm">small</Button>
        <Button size="lg">large</Button>
        <Button size="icon">icon</Button>
      </div>
    </div>
  );
}
