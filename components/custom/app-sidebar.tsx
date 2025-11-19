import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { LayoutDashboard, Lock, Heart, Settings, LogOut } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import LogoutAlert from "./logout-alert"

type SidebarVariant = "default" | "outline" | "destructive"

interface MenuItem {
    title: string
    url: string
    icon: any
    variant?: SidebarVariant
}

const menu_items: MenuItem[] = [
    {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard
    },
    {
        title: "Passwords",
        url: "#",
        icon: Lock
    },
    {
        title: "Favorites",
        url: "#",
        icon: Heart
    }
]

const footer_items: MenuItem[] = [
    {
        title: "Settings",
        url: "#",
        icon: Settings
    },
    {
        title: "Logout",
        url: "#",
        icon: LogOut,
        variant: "destructive"
    }
]

export function AppSidebar() {
    return (
        <Sidebar className="py-2">
            <SidebarHeader>
                <div className="flex items-center gap-3 px-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary dark:bg-primary text-white">
                        <Lock />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-base font-semibold leading-tight">Peaceword</h1>
                        <p className="text-sm text-muted-foreground leading-none">Password Manager</p>

                    </div>
                    <ThemeToggle />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Options</SidebarGroupLabel>
                    <SidebarMenu>
                        {menu_items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    {footer_items.map((item) => {
                        const isLogout = item.title === "Logout";

                        const ButtonContent = (
                            <SidebarMenuButton variant={item.variant ?? "default"} asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        )

                        return (
                            <SidebarMenuItem key={item.title}>
                                {isLogout ? (
                                    <LogoutAlert>{ButtonContent}</LogoutAlert>
                                ) : (
                                    ButtonContent
                                )}
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}