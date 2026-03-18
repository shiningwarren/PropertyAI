import { Button } from "./ui/button";
import { Bot, Menu } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "AI Demo", href: "#demo" },
    { label: "Waitlist", href: "#waitlist" }
  ];

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const buildHref = (anchor: string) => {
    return location.pathname === "/" ? anchor : `/${anchor}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="w-full px-4 sm:px-8 md:px-20 lg:px-28">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <button 
            onClick={handleLogoClick} 
            className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
          >
            <div className="bg-black rounded-lg p-1.5">
              <Bot className="w-5 h-5 text-white ml-0.5" />
            </div>
            <span className="text-lg font-semibold">PropertyAI</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={buildHref(item.href)}
                className="text-sm hover:text-blue-600 transition-colors font-normal"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-auto">
            <Button asChild variant="primary" className="font-medium px-4 py-2 rounded-lg">
              <a href={buildHref("#waitlist")}>
                Join Waitlist
              </a>
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
                <a
                  key={item.label}
                  href={buildHref(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm hover:text-blue-600 transition-colors text-left"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}