import { Bot, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function FooterSimple() {
  return (
    <footer id="footer" className="bg-black text-white py-16">
      <div className="w-full px-20 lg:px-28 pr-32 lg:pr-40">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 lg:gap-12 mb-8">
          {/* PropertyAI Section */}
          <div className="space-y-4 md:col-span-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">PropertyAI</span>
            </div>
            <div className="flex justify-center md:justify-start">
              <p className="text-gray-300 text-sm leading-relaxed max-w-[32ch] md:max-w-[40ch] text-center md:text-left">
                Empowering smart property decisions with AI‑driven insights and strategies. Your trusted partner in property success.
              </p>
            </div>
            <div className="flex gap-2 justify-center md:justify-start">
              <Button asChild variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <a href="https://www.instagram.com/property.ai_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Contact Section - Positioned to align with Cookie Policy */}
          <div className="text-center md:text-left md:col-span-2 md:flex md:justify-end">
            <div className="md:w-48">
              <h4 className="mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4" />
                  <a 
                    href="mailto:hello@propertyai.club" 
                    className="hover:text-white transition-colors"
                  >
                    hello@propertyai.club
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="w-4 h-4" />
                  <span>London, UK</span>
                </div>
                <div className="flex justify-center md:justify-start">
                  <Button
                    asChild
                    className="mt-4 bg-white hover:bg-gray-200 text-black border-white"
                  >
                    <a href="mailto:hello@propertyai.club?subject=Become a Property AI Partner&body=I want to enquire about having my business or services listed within Property AIs tech stack.">
                      Become a Partner
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 lg:gap-12">
          <div className="text-center md:text-left md:col-span-4">
            <p className="text-sm text-gray-400">&copy; 2025 PropertyAI. All rights reserved.</p>
          </div>
          <div className="text-center md:text-left md:col-span-2">
            <div className="flex gap-2 md:gap-3 justify-center md:justify-end whitespace-nowrap">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
