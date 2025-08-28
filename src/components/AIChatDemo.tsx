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
      content: "Hello! I'm your AI Property Strategist. I deliver instant, personalized property investment strategies and guidance. Whether you're exploring buy-to-let, navigating compliance, or planning your next move—I'm here to help. How can I support you today?"
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
      answer = "When setting up a property business, you'll need to ensure you're meeting all key compliance obligations:\n\n• Register a Limited Company via Companies House\n• Join a redress scheme like the Property Redress Scheme (PRS) or The Property Ombudsman (TPO)\n• Register with the Information Commissioner's Office (ICO) for data protection\n• Sign up for AML supervision with HMRC if you're handling client funds or deal packaging\n• Obtain Professional Indemnity Insurance (PII) via a specialist broker such as PIB Insurance\n\nThese steps are essential to operating legally and protecting both your business and your clients.\n\nUseful Links:\n• <a href='https://www.gov.uk/limited-company-formation' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>Companies House - Limited Company Formation</a>\n• <a href='https://www.theprs.co.uk/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>Property Redress Scheme (PRS)</a>\n• <a href='https://ico.org.uk/for-organisations/data-protection-fee/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>ICO Data Protection Registration</a>\n• <a href='https://www.gov.uk/anti-money-laundering-registration' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>HMRC AML Registration</a>\n• <a href='https://www.pib-insurance.com/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>PIB Insurance (Professional Indemnity)</a>";
    } else if (question.includes("location")) {
      answer = "Choosing a location for property investment requires both strategic foresight and current market awareness. Here's what to look at now:\n\nHigh-Yield Regions (Q2 2025): UK average gross rental yield stands at 7.03%. Top-performing cities include Cardiff (10.9%), Stoke-on-Trent (10.8%), Swindon (9.2%), Belfast (8.1%), Liverpool (7.7%), and Glasgow (7.6%). Notable hotspots such as Leeds and Liverpool exceed yields of 8.5%.\n\nBuy-to-Let Hotspots: Cardiff's CF24 district delivers 8.9% yield, while PL4 in Plymouth hits 10.2%—driven by student markets and affordability.\n\nRent Growth & Rental Rates: As of July 2025, average UK monthly rent is £1,343 (a 5.9% increase year-on-year). Some areas show exceptional growth: Newport (+21%), Broxbourne (+17%), Slough and Nuneaton & Bedworth (+14%). The North East leads with ~9% rental growth, though its average rent remains low at £519/month.\n\nHouse Price Trends: Average UK house price is £269,000 in June 2025, up 3.7% year-on-year. The North East leads with a 7.8% annual increase, while London sees just a 0.8% rise. Halifax data for July 2025 shows an average price of £298,237 (2.4% annual growth), with strongest performance in Northern Ireland (9.3%) and Scotland (4.7%)\n\nInvestors should balance:\n• Rental yield vs. capital growth\n• Tenant demand and rent affordability\n• Local economic strength, transport links, and future infrastructure\n• Regeneration and local supply dynamics\n\nCombining real-time yield data with housing affordability, market movement, and growth forecasts gives you both the tactical and strategic edge.\n\nUseful Links:\n• <a href='https://www.gov.uk/housing-local-and-community/land-registration-data' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>Land Registry Data</a>\n• <a href='https://propertydata.co.uk/resources/rental-yields-in-the-uk-where-to-invest-in-2025' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>PropertyData - UK Rental Yields 2025</a>\n• <a href='https://propertydata.co.uk/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>PropertyData - Market Intelligence</a>\n• <a href='https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/ukhousepriceindexmonthlypricestatistics' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>ONS House Price Index</a>";
    } else if (question.includes("deposit")) {
      answer = "Most UK lenders require a minimum deposit of 25% for a buy-to-let mortgage. However, some may offer deals with as little as 20%, particularly for experienced landlords or lower-risk properties.\n\nLarger deposits (30–40%) can secure:\n• Better interest rates\n• More competitive loan-to-value (LTV) terms\n• Greater lender flexibility, especially with unusual property types or lower rental yields\n\nKeep in mind:\n• The mortgage is usually assessed on rental income, not personal income\n• You'll need to meet Interest Coverage Ratios (ICR) – typically 125–145% of mortgage interest at a stress-tested rate\n• Limited companies may face slightly different lending criteria\n\nPro Tip: Some specialist lenders support 80% LTV buy-to-let mortgages, but rates may be higher and eligibility stricter. Always use a broker to compare across the full market.\n\nUseful Links:\n• <a href='https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgage-affordability-calculator' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>MoneyHelper - Mortgage Affordability Calculator</a>\n• <a href='https://moneyfactscompare.co.uk/mortgages/buy-to-let/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>Moneyfacts - Buy-to-Let Mortgage Comparison</a>";
    } else if (question.includes("director's loan")) {
      answer = "Yes, charging interest on a director's loan to your property limited company can be tax-efficient, but it must be done properly.\n\nKey benefits:\n• The company can deduct the interest paid as a business expense, reducing corporation tax\n• You, as the director, receive the interest personally — often taxed at a lower rate than dividends (especially if you're within your personal savings allowance)\n\nImportant points:\n• A formal loan agreement must be in place, documenting the amount, rate, and repayment terms\n• HMRC expects the interest rate to be commercially reasonable — typically aligned with market lending rates\n• The interest income must be declared on your Self Assessment tax return\n• The company may need to deduct and report basic rate tax (20%) under the CT61 scheme when paying interest to individuals\n\nUse with caution: If poorly documented or above-market rates are used, HMRC may challenge the arrangement.\n\nUseful Links:\n• <a href='https://www.gov.uk/directors-loans' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>HMRC - Director's Loans Guidance</a>\n• <a href='https://www.gov.uk/self-assessment-tax-returns' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>HMRC - Self Assessment Tax Returns</a>\n• <a href='https://www.gov.uk/government/publications/corporation-tax-return-of-income-tax-on-company-payments-ct61' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>HMRC - CT61 Corporation Tax Return</a>";
    } else if (question.includes("contract pricing")) {
      answer = "Contract pricing through buying groups like LNPG and PLBG allows landlords to access heavily discounted rates on refurbishment materials—typically reserved for large-scale housing associations or national developers.\n\nLNPG aggregates member demand to negotiate directly with manufacturers (e.g. Magnet, Worcester Bosch), bypassing retail mark-ups. Some landlords have seen Magnet kitchen quotes reduced by over 50%, with typical savings running into thousands when fitting multiple units.\n\nPLBG offers a similar model, giving access to discounts from major suppliers like Travis Perkins, City Plumbing, and Jewson. It's particularly useful for developers or landlords with several ongoing projects, offering both materials and a supportive account management structure.\n\nThat said, value will vary depending on your situation:\n• If you already have strong trade discounts with local independents or Howdens, savings may be marginal.\n• Service levels can vary by branch. Some members report excellent treatment, while others feel deprioritised as LNPG/PLBG orders may carry lower margins for branches.\n• Durability and speed of delivery still matter. For longer-term rentals, cheaper doesn't always mean better—so weigh up product quality and aftercare.\n\nFor landlords managing multiple refurbs or scaling portfolios, the savings typically outweigh the ~£200 annual fee. But it's worth comparing at least two quotes before joining either service.\n\nLearn more:\n• <a href='https://www.lnpg.co.uk/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>LNPG (Landlord Network Purchasing Group)</a>\n• <a href='https://plbg.co.uk/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>PLBG (Property Landlord Buying Group)</a>";
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
                          {message.role === 'assistant' ? (
                            <div 
                              className="text-sm prose prose-sm max-w-none"
                              dangerouslySetInnerHTML={{ 
                                __html: message.content.replace(/\n/g, '<br>') 
                              }} 
                            />
                          ) : (
                            <p className="text-sm">{message.content}</p>
                          )}
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
                        placeholder="Ask me anything about UK Property!"
                        className="w-full !bg-gray-100 placeholder:text-gray-500 border-0 rounded-md focus:outline-none"
                      />
                    </div>
                    <Button type="submit" size="icon" variant="primary" className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:shadow-lg focus-visible:shadow-blue-500/50">
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