import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SectionHeading } from "./ui/section-heading";
import { TrendingUp, MapPin, Calculator, Shield, Clock, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Real-time market trends, price predictions, and investment opportunities tailored to your location and budget."
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Comprehensive neighborhood analysis including schools, transport links, amenities, and future development plans."
    },
    {
      icon: Calculator,
      title: "ROI Calculator",
      description: "Precise return on investment calculations considering all costs, potential rental yields, and appreciation forecasts."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify potential risks and mitigation strategies for your property investment portfolio."
    },
    {
      icon: Clock,
      title: "Instant Responses",
      description: "Get immediate answers to complex property questions with our 24/7 AI-powered consultation service."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with verified property professionals, lawyers, and mortgage brokers in your area."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-20 lg:px-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeading>Intelligent Property Solutions</SectionHeading>
          <p className="text-lg text-gray-500">
            Our AI agent combines market data, local expertise, and advanced analytics to provide you with comprehensive property strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full mx-auto">
          {features.map((feature, index) => (
                          <Card key={index} className="border-0 shadow hover:shadow-lg transition-shadow px-0.5 py-0.5">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gray-700" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}