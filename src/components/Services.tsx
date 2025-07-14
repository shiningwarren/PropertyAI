import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { SectionHeading } from "./ui/section-heading";
import { Home, Building2, KeyRound, PiggyBank } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "First-Time Buyers",
      description: "Personalized guidance for your first property purchase, from budget planning to closing the deal.",
      features: ["Budget optimization", "Mortgage pre-approval", "Property search", "Negotiation support"],
      popular: false
    },
    {
      icon: PiggyBank,
      title: "Investment Properties",
      description: "Maximize your returns with data-driven investment strategies and portfolio management.",
      features: ["ROI analysis", "Cash flow projections", "Market timing", "Portfolio diversification"],
      popular: true
    },
    {
      icon: Building2,
      title: "Commercial Real Estate",
      description: "Expert analysis for commercial property investments and business relocations.",
      features: ["Market research", "Zoning analysis", "Tenant screening", "Lease negotiations"],
      popular: false
    },
    {
      icon: KeyRound,
      title: "Property Management",
      description: "AI-powered property management solutions for landlords and property investors.",
      features: ["Tenant matching", "Maintenance scheduling", "Rent optimization", "Legal compliance"],
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative border-0 shadow hover:shadow-lg transition-shadow px-0.5 py-0.5 bg-white ${service.popular ? 'ring-2 ring-black scale-105' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-gray-700" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${service.popular ? 'bg-black hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg' : ''}`} 
                  variant={service.popular ? undefined : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}