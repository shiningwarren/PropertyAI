import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SectionHeading } from "./ui/section-heading";
import { Bot, User, Send } from "lucide-react";

export function AIChatDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI Property Strategist. Ask me anything about property investment, market trends, or finding your perfect home. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    "What are the required compliance registrations for setting up a property business in the UK?",
    "What are the key factors to consider when choosing a property investment location?",
    "How much deposit do I need for a buy-to-let mortgage?",
    "Is it advisable to charge interest on a director's loan to a limited company?",
    "What are the benefits of contract pricing for landlords purchasing refurbishment materials?"
  ];

  const handleSampleQuestion = (question: string) => {
    let answer = "";
    
    if (question.includes("compliance registrations")) {
      answer = "Register a Limited Company, join a redress scheme (PRS), register with ICO, sign up with HMRC for AML supervision, and obtain Professional Indemnity Insurance.";
    } else if (question.includes("location")) {
      answer = "Key factors: transport links, employment opportunities, local amenities, school catchment areas, planned infrastructure, rental demand, property price growth trends, and local authority development plans. Research the area's economic indicators and future prospects.";
    } else if (question.includes("deposit")) {
      answer = "Most buy-to-let mortgages require 25-40% deposit. Higher deposits (30%+) get better interest rates. Consider additional costs: stamp duty, legal fees, survey costs, and potential refurbishment expenses.";
    } else if (question.includes("director's loan")) {
      answer = "While legal, interest charged on director loans is taxable as personal income. It's more tax-efficient for basic rate taxpayers; higher-rate payers may find it counterproductive.";
    } else if (question.includes("contract pricing")) {
      answer = "Landlords accessing LNPG benefit from contract pricing, which is typically reserved for large institutions like housing associations. This pricing tier is lower than both retail and standard trade rates. LNPG aggregates landlord purchases to secure these rates directly from manufacturers, offering cost savings on key items like boilers, kitchens, and paint.";
    } else {
      answer = "Great question! Based on current market data and your profile, here's my analysis: I recommend looking at emerging suburbs with good transport links and planned infrastructure developments.";
    }
    
    setMessages(prev => [...prev, 
      { role: "user", content: question },
      { 
        role: "assistant", 
        content: answer
      }
    ]);
    
    // Focus the input and scroll messages to bottom after a short delay to allow state update
    setTimeout(() => {
      inputRef.current?.focus();
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, 
      { role: "user", content: input },
      { 
        role: "assistant", 
        content: "Thank you for your question! In a real implementation, I would analyze your query using advanced property market data, local insights, and personalized recommendations. This is a demo interface showing how our AI agent would respond to your property-related questions."
      }
    ]);
    setInput("");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeading>Try Our Property AI Agent</SectionHeading>
            <p className="text-lg text-gray-500">
              Experience intelligent property consultation. Ask questions and get instant, personalized insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-[500px] flex flex-col border border-gray-300">
                <CardHeader className="border-b border-gray-300 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-primary" />
                    Property AI Agent
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full ml-auto">Online</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-0 min-h-0">
                  <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 space-y-4 max-h-[400px]" ref={messagesContainerRef}>
                    {messages.map((message, index) => (
                      <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                        {message.role === 'assistant' && (
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-gray-700" />
                          </div>
                        )}
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === 'user' 
                            ? 'bg-primary text-primary-foreground ml-auto' 
                            : 'bg-gray-200'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                        </div>
                        {message.role === 'user' && (
                          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                                    <form onSubmit={handleSubmit} className="px-4 pt-6 pb-0 border-t border-gray-300 flex gap-2 flex-shrink-0 items-center justify-center">
                    <div className="flex-1 chat-input-wrapper rounded-md focus-within:shadow-[0_0_4px_1px_rgba(59,130,246,0.2),0_0_6px_2px_rgba(59,130,246,0.1)]">
                      <Input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about property strategies, market trends, or investment advice..."
                        className="w-full !bg-gray-100 placeholder:text-gray-500 border-0 rounded-md focus:outline-none"
                      />
                    </div>
                    <Button type="submit" size="icon" className="bg-black hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:shadow-lg focus-visible:shadow-blue-500/50">
                      <Send className="w-4 h-4 text-white" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg">Quick Questions</h3>
              <p className="text-sm text-gray-500">
                Try these sample questions to see how our AI agent responds:
              </p>
              <div className="space-y-2">
                {sampleQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-3 whitespace-normal !border-gray-300 hover:!bg-gray-100"
                    onClick={() => handleSampleQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}