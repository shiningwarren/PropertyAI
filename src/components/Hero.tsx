import { Button } from "./ui/button";
import { ArrowRight, Bot, Home } from "lucide-react";

export function Hero() {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .shimmer-effect {
            animation: shimmer 12s linear infinite;
            background: linear-gradient(90deg, transparent, rgba(219, 234, 254, 0.5), rgba(255, 255, 255, 0.8), rgba(219, 234, 254, 0.5), transparent);
            background-size: 200% 100%;
          }
        `}
      </style>
      <section className="relative bg-[#F6F6F7] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-blue-300 text-gray-900 rounded-full px-4 py-2 mb-6 relative overflow-hidden shimmer-effect">
              <Bot className="w-4 h-4 text-gray-700 relative z-10" />
              <span className="text-sm font-medium text-gray-900 relative z-10">AI-Powered Property Intelligence</span>
            </div>
            
            <h1 className="mb-8 sm:mb-10 text-4xl lg:text-6xl tracking-tight text-gray-900">
              Smart Property Strategies<br />
              with <span className="text-blue-600 mt-4 inline-block">AI Guidance</span>
            </h1>
            
            <p className="mb-16 sm:mb-8 text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              Get instant, personalized property investment strategies and market insights from our advanced AI agent. Make informed decisions with real-time data and expert analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="primary" className="w-auto inline-flex items-center gap-2">
                <a href="#waitlist">
                  Start Your Property Journey
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" className="w-auto inline-flex items-center gap-2 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                <a href="#demo">
                  <Home className="w-4 h-4" />
                  View Live Demo
                </a>
              </Button>
            </div>
            
            <div className="mt-32 sm:mt-24">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-semibold text-gray-900 mb-2">10K+</div>
                  <div className="text-sm text-gray-600">Properties Analyzed</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">AI Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}