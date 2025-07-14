import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
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
    "What's the best area to invest in for rental properties?",
    "How much should I budget for my first home?",
    "What are the current market trends in my area?",
    "Should I buy or rent in today's market?"
  ];

  const handleSampleQuestion = (question: string) => {
    setMessages(prev => [...prev, 
      { role: "user", content: question },
      { 
        role: "assistant", 
        content: `Great question! Based on current market data and your profile, here's my analysis: ${question.includes('invest') ? 'I recommend looking at emerging suburbs with good transport links and planned infrastructure developments. The average ROI in these areas is currently 8-12% annually.' : question.includes('budget') ? 'For a first home, I typically recommend budgeting 20% above your target price to account for additional costs like inspections, legal fees, and moving expenses.' : question.includes('trends') ? 'Current market trends show a 3.2% increase in property values this quarter, with strong demand in the $400k-600k range. Interest rates are stabilizing, making it a good time for qualified buyers.' : 'In the current market, buying can be advantageous if you plan to stay for 5+ years and have stable income. Renting offers more flexibility but no equity building. Let me analyze your specific situation.'}`
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