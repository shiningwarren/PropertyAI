import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { SectionHeading } from "./ui/section-heading";
import { Bot, Zap, Star, Rocket } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "PropertyAI Access",
      description: "Your complete AI-powered property assistant.",
      features: ["AI-powered deal analysis: ROI, yield, BRR, flips", "Compliance & regulatory guidance", "Advice on UK strategies (BTL, R2R, SA, ect.)", "Guidance on finance, structures, and investor relations"],
      popular: true,
      badgeIcon: Star,
      badgeText: "Most Popular"
    },
    {
      icon: Zap,
      title: "Powering the Next Phase",
      description: "New tools to supercharge your investing.",
      features: ["Local business network (solicitors, brokers, builders)","Local price, rental yield, and demand trends", "Smart deal sourcing insights and alerts"],
      popular: false,
      badgeIcon: Rocket,
      badgeText: "Coming Soon"
    }
  ];

  return (
    <section className="py-20 bg-[#F6F6F7]">
      <div className="container mx-auto px-20 lg:px-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeading>Property Strategy Services</SectionHeading>
          <p className="text-lg text-gray-700">
            Whether you're buying your first home or building a property empire, our AI agent provides specialized strategies for every need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative border-0 shadow hover:shadow-lg transition-shadow px-0.5 py-0.5 bg-white ${service.popular ? 'ring-2 ring-blue-200 scale-105' : ''}`}>
              {/* Decorative badge */}
              <div className="absolute -top-3 left-4">
                <div className="inline-flex items-center gap-2 bg-gray-50 border border-blue-200 text-gray-700 rounded-full px-3 py-1">
                  <service.badgeIcon className="w-3 h-3 text-blue-600" />
                  <span className="text-xs font-medium text-gray-700">{service.badgeText}</span>
                </div>
              </div>
              
                             <CardHeader className="text-center pt-8">
                 <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                   <service.icon className="w-8 h-8 text-gray-700" />
                 </div>
                <CardTitle className="text-lg text-gray-900 -mb-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-sm text-gray-600 text-center">{service.description}</p>
                
                <ul className="space-y-3 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {service.popular ? (
                  <Button 
                    asChild
                    variant="primary"
                    className="w-full mt-auto"
                  >
                    <a href="#waitlist">Join Waitlist</a>
                  </Button>
                ) : (
                  <Button 
                    asChild
                    className="w-full mt-auto bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-4 py-2 rounded-lg transition-all duration-300"
                    disabled
                  >
                    <a href="#" className="pointer-events-none">Coming Soon</a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}