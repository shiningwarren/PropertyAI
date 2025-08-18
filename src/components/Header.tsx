import { Button } from "./ui/button";
import { Bot, Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "AI Demo", href: "#demo" },
    { label: "Waitlist", href: "#waitlist" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="w-full px-4 sm:px-8 md:px-20 lg:px-28">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white ml-0.5" />
            </div>
            <span className="text-lg font-semibold">PropertyAI</span>
          </a>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* Right section: Get Started + Burger */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-auto">
            <Button asChild className="bg-black hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg">
              <a href="#waitlist">Join Waitlist</a>
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
                  href={item.href}
                  className="text-sm hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
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