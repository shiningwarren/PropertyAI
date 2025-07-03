import { Bot, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-lg font-semibold">PropertyAI</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering smart property decisions with AI-driven insights and strategies. Your trusted partner in real estate success.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">First-Time Buyers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Investment Properties</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Commercial Real Estate</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Property Management</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Market Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Property Calculator</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Investment Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Support Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@propertyai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1-800-PROP-AI</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Tech Street, Innovation City</span>
              </div>
            </div>
            <Button className="mt-4 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-primary-foreground/20">
              Schedule Consultation
            </Button>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 PropertyAI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}