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
            background: linear-gradient(90deg, transparent, rgba(205, 227, 254, 0.55), rgba(255, 255, 255, 0.8), rgba(205, 227, 254, 0.55), transparent);
            background-size: 200% 100%;
          }
        `}
      </style>
      <section className="relative bg-[#FFFFF] py-20 lg:py-32 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          style={{ zIndex: 0 }}
        >
          <source src="https://res.cloudinary.com/dcm0m5nrt/video/upload/v1764420000/wave-bg_vsq1pa.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-blue-300 text-gray-900 rounded-full px-4 py-2 mb-6 relative overflow-hidden shimmer-effect">
              <Bot className="w-4 h-4 text-gray-700 relative z-10" />
              <span className="text-sm font-medium text-gray-900 relative z-10">AI-Powered Agent</span>
            </div>
            
            <h1 className="mb-8 sm:mb-10 text-4xl lg:text-6xl tracking-tight text-gray-900">
            <span
              className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-transparent bg-clip-text"
              style={{ WebkitTextFillColor: "transparent", textShadow: "0 0 0.5px #3b82f6" }}
            >
              Intelligent Property Strategies
            </span>
            <br />
            <span className="text-gray-900 mt-4 inline-block">with AI Guidance</span>
            </h1>
            
            <p className="mb-16 sm:mb-8 text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              Get instant, personalized property investment strategies and guidance from our advanced AI agent. Make informed decisions with real practical advice and expert analysis.
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
                <div className="relative">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">10K+</div>
                  <div className="text-sm font-medium text-gray-600">User Queries Assisted</div>
                  <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-px bg-gray-200"></div>
                </div>
                <div className="relative">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-sm font-medium text-gray-600">UK Property Categories</div>
                  <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-px bg-gray-200"></div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm font-medium text-gray-600">AI Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}