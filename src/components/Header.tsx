import { Button } from "./ui/button";
import { Bot, Menu } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Features", href: "features" },
    { label: "Services", href: "services" },
    { label: "AI Demo", href: "demo" },
    { label: "Waitlist", href: "waitlist" }
  ];

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      // On home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, navigate to home page first, then scroll
      navigate("/");
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    try {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        // If already on home page, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      // Fallback to direct navigation
      window.location.href = "/";
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="w-full px-4 sm:px-8 md:px-20 lg:px-28">
        <div className="flex h-16 items-center justify-between">
          <button 
            onClick={handleLogoClick} 
            className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
          >
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white ml-0.5" />
            </div>
            <span className="text-lg font-semibold">PropertyAI</span>
          </button>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="text-sm hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer font-normal"
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* Right section: Get Started + Burger */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-auto">
            <Button 
              variant="primary"
              onClick={() => handleNavigation("waitlist")}
              className="font-medium px-4 py-2 rounded-lg"
            >
              Join Waitlist
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-sm hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}