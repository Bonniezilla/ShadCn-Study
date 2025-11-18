"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] dark:scale-0 dark:-rotate-90 transition-all duration-200 scale-100"/>
            <Moon className="h-[1.2rem] w-[1.2rem] absolute dark:scale-100 dark:rotate-0 scale-0 -rotate-90 transition-all duration-200"/>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}