import { Button } from "./ui/button";
import { ArrowRight, Bot, Home } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-[#F6F6F7] py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#DCDCDF] text-gray-800 rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-gray-800" />
            <span className="text-sm text-gray-800">AI-Powered Property Intelligence</span>
          </div>
          
          <h1 className="mb-8 sm:mb-10 text-4xl lg:text-6xl tracking-tight">
            Smart Property Strategies<br />
            with <span className="text-primary mt-4 inline-block">AI Guidance</span>
          </h1>
          
          <p className="mb-16 sm:mb-8 text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto">
            Get instant, personalized property investment strategies and market insights from our advanced AI agent. Make informed decisions with real-time data and expert analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <Button asChild size="lg" className="w-auto inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-2 sm:px-4 py-2">
               <a href="#waitlist">
                 Start Your Property Journey
                 <ArrowRight className="w-4 h-4" />
               </a>
             </Button>
            <Button asChild size="lg" className="w-auto inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-2 sm:px-4 py-2">
              <a href="#demo">
                <Home className="w-4 h-4" />
                View Live Demo
              </a>
            </Button>
          </div>
          
          <div className="mt-24 sm:mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-2">10K+</div>
              <div className="text-sm text-gray-500">Properties Analyzed</div>
            </div>
            <div>
              <div className="text-2xl mb-2">95%</div>
              <div className="text-sm text-gray-500">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl mb-2">24/7</div>
              <div className="text-sm text-gray-500">AI Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}