import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "First-time Homebuyer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e9e068?w=150&h=150&fit=crop&crop=face",
      content: "The AI agent helped me navigate the complex property market as a first-time buyer. I saved $15,000 on my purchase thanks to their market analysis and negotiation insights.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Property Investor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "I've built a portfolio of 12 rental properties using their AI-driven investment strategies. The ROI predictions have been incredibly accurate, and the risk assessments saved me from bad deals.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Commercial Developer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "For commercial real estate, their market intelligence is unmatched. The AI agent identified emerging business districts before they became mainstream, giving us a competitive edge.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Property Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Managing 50+ properties became effortless with their AI-powered tenant matching and maintenance scheduling. Vacancy rates dropped by 60% in the first year.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of successful property investors and homeowners who trust our AI-powered insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}