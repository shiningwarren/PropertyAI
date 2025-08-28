import { Bot, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-16">
      <div className="w-full px-20 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-8">
          <div className="space-y-4 pr-3 md:pr-6 order-1 md:order-1 lg:order-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">PropertyAI</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-[36ch] md:max-w-[48ch]">
              Empowering smart property decisions with AI‑driven insights and strategies. Your trusted partner in property success.
            </p>
            <div className="flex gap-2">
              <Button asChild variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <a href="https://www.instagram.com/property.ai_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="order-3 md:order-3 lg:order-2">
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">First-Time Buyers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Properties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Real Estate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
            </ul>
          </div>
          
          <div className="order-4 md:order-4 lg:order-3 md:ml-24">
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Property Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>
          
          <div className="order-2 md:order-2 lg:order-4 md:ml-24">
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:hello@propertyai.club" 
                  className="hover:text-white transition-colors"
                >
                  hello@propertyai.club
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>London, UK</span>
              </div>
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
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 PropertyAI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}