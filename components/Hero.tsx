import { Button } from "./ui/button";
import { ArrowRight, Bot, Home } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">AI-Powered Property Intelligence</span>
          </div>
          
          <h1 className="mb-6 text-4xl lg:text-6xl tracking-tight">
            Smart Property Strategies with{" "}
            <span className="text-primary">AI Guidance</span>
          </h1>
          
          <p className="mb-8 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant, personalized property investment strategies and market insights from our advanced AI agent. Make informed decisions with real-time data and expert analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="inline-flex items-center gap-2">
              Start Your Property Journey
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              View Live Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Properties Analyzed</div>
            </div>
            <div>
              <div className="text-2xl mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">AI Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}