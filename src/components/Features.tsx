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
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="feature-icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
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
              <CardHeader className="pt-4">
                <div className="flex items-center justify-start mb-3">
                  {feature.title === "ROI Calculator" ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`calc-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#60a5fa" />
                        </linearGradient>
                      </defs>
                      <rect x="4" y="2" width="16" height="20" rx="2" stroke={`url(#calc-grad-${index})`} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6h8M8 10h8" stroke={`url(#calc-grad-${index})`} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="8" cy="15" r="1" fill={`url(#calc-grad-${index})`}/>
                      <circle cx="8" cy="19" r="1" fill={`url(#calc-grad-${index})`}/>
                      <circle cx="12" cy="15" r="1" fill={`url(#calc-grad-${index})`}/>
                      <circle cx="12" cy="19" r="1" fill={`url(#calc-grad-${index})`}/>
                      <circle cx="16" cy="15" r="1" fill={`url(#calc-grad-${index})`}/>
                      <circle cx="16" cy="19" r="1" fill={`url(#calc-grad-${index})`}/>
                    </svg>
                  ) : (
                    <feature.icon className="w-6 h-6" style={{ stroke: 'url(#feature-icon-gradient)', fill: 'none', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                  )}
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