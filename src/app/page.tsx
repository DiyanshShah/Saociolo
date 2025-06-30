import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      <h1>Home Page</h1>
    </div>
  );
}
