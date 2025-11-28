import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SectionHeading } from "./ui/section-heading";
import { FileText, MapPin, Calculator, Shield, Clock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: FileText,
      title: "UK Rules & Compliance",
      description: "Accurate, URL-verified answers on EPC, Article 4, licensing, council checks and more."
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Clear local insights on schools, transport links, nearby amenities and future development plans."
    },
    {
      icon: Calculator,
      title: "ROI Calculator",
      description: "Accurate ROI calculations covering total costs, rental yields and financial performance."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify potential risks and mitigation strategies for your property investment portfolio."
    },
    {
      icon: Clock,
      title: "Instant Responses",
      description: "Get clear answers to complex property questions with fast, 24/7 AI availability."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-full mx-auto">
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