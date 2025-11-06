import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "uxui", label: "UX/UI Design" },
    { id: "photography", label: "Photography" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 
            className="text-xl font-semibold tracking-tight cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => onNavigate("all")}
          >
            Alexandra Marley
          </h1>
          
          <div className="flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  activeSection === item.id ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <h1 
            className="text-xl font-semibold tracking-tight cursor-pointer"
            onClick={() => onNavigate("all")}
          >
            Alexandra Marley
          </h1>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
        <div className="flex items-center justify-around py-4 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "text-xs font-medium transition-colors px-3 py-2",
                activeSection === item.id ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
