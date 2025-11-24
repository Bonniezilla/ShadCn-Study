import LoginCard from "@/components/custom/login-card";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="absolute top-0 left-0 p-12">
        <ThemeToggle />
      </div>
      <LoginCard />
    </div>
  );
}
