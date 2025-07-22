import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  FileText, 
  BarChart3, 
  Settings,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isMobile, isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();
  
  const navItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: <LayoutDashboard className="h-5 w-5" />
    },
    {
      name: "My Leads",
      href: "/my-leads",
      icon: <Users className="h-5 w-5" />
    },
    {
      name: "Intern Leads",
      href: "/intern-leads",
      icon: <UserCheck className="h-5 w-5" />
    },
    {
      name: "Script Manager",
      href: "/script-manager",
      icon: <FileText className="h-5 w-5" />
    },
    {
      name: "Intern Performance",
      href: "/intern-performance",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      name: "Reports",
      href: "/reports",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />
    }
  ];

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" }
  };

  return (
    <>
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-50 lg:hidden" 
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}
      
      <motion.aside
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        variants={sidebarVariants}
        transition={{ duration: 0.3 }}
        className={cn(
          "bg-[#1C1C1E] text-white w-64 h-screen fixed left-0 top-0 z-40 flex flex-col",
          isMobile && "shadow-xl"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h1 className="text-xl font-bold text-primary">PurpleRain™</h1>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                pathname === item.href 
                  ? "bg-accent text-white" 
                  : "text-gray-300 hover:bg-secondary"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground">
            PurpleRain™ HR Dashboard v1.0
          </div>
        </div>
      </motion.aside>
    </>
  );
}