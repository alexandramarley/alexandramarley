import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [photographyMenuOpen, setPhotographyMenuOpen] = useState(false);
  // mobilePhotographyOpen removed: mobile should link directly to photography landing
  const location = useLocation();

  const navItems = [
    { id: "uxui", label: "UX/UI Design", path: "/uxui-design" },
    { 
      id: "photography", 
      label: "Photography", 
      path: "/photography",
      subItems: [
        { id: "portrait", label: "Portrait", path: "/photography/portrait" },
        { id: "business", label: "Business", path: "/photography/business" },
        { id: "dance", label: "Dance", path: "/photography/dance" },
      ]
    },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <h1 className="text-xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-opacity uppercase">
              Alexandra Marley
            </h1>
          </Link>
          
          <div className="flex gap-8 items-center">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.subItems ? (
                  <div
                    onMouseEnter={() => setPhotographyMenuOpen(true)}
                    onMouseLeave={() => setPhotographyMenuOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-foreground flex items-center gap-1",
                        location.pathname.startsWith(item.path) ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {photographyMenuOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-md shadow-lg py-2 min-w-[150px]">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-foreground",
                      location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <h1 className="text-xl font-bold tracking-tight cursor-pointer uppercase">
              Alexandra Marley
            </h1>
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
          <div className="flex items-center justify-around py-4 px-2">
            {navItems.map((item) => (
              <div key={item.id}>
                {/* On mobile we don't show expandable submenus — link directly to photography landing */}
                <Link
                  to={item.path}
                  className={cn(
                    "text-xs font-medium transition-colors px-3 py-2",
                    location.pathname === item.path || location.pathname.startsWith(item.path) ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
      </nav>
    </>
  );
};

export default Navigation;
