import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { SectionHeading } from "./ui/section-heading";
import { Bot, Zap } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "PropertyAI Access",
      description: "Your complete AI-powered property assistant.",
      features: ["AI-powered deal analysis: ROI, yield, BRR, flips", "Compliance & regulatory guidance", "Advice on UK strategies (BTL, R2R, SA, ect.)", "Guidance on finance, structures, and investor relations"],
      popular: true
    },
    {
      icon: Zap,
      title: "Powering the Next Phase",
      description: "New tools to supercharge your investing.",
      features: ["Local business network (solicitors, brokers, builders)", "Portfolio optimisation & compliance reminders","Local price, rental yield, and demand trends", "Smart deal sourcing insights and alerts"],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-[#F6F6F7]">
      <div className="container mx-auto px-20 lg:px-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeading>Property Strategy Services</SectionHeading>
          <p className="text-lg text-gray-500">
            Whether you're buying your first home or building a property empire, our AI agent provides specialized strategies for every need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative border-0 shadow hover:shadow-lg transition-shadow px-0.5 py-0.5 bg-white ${service.popular ? 'ring-2 ring-black scale-105' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <service.icon className="w-8 h-8 text-gray-700" />
                </div>
                <CardTitle className="text-lg -mb-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                
                <ul className="space-y-3 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className={`w-full mt-auto ${
                    service.popular 
                      ? 'bg-black hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
                  }`} 
                  variant={service.popular ? undefined : "outline"}
                  disabled={!service.popular}
                >
                  <a href={service.popular ? "#waitlist" : "#"} className={!service.popular ? "pointer-events-none" : ""}>
                    {service.popular ? 'Join Waitlist' : 'Coming Soon'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}