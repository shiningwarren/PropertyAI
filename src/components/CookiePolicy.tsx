import { Header } from "./Header";
import { FooterSimple } from "./FooterSimple";
import { useEffect } from "react";

export function CookiePolicy() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="mb-8 sm:mb-10 text-4xl lg:text-6xl tracking-tight">Cookie Policy</h1>
              <p className="text-sm text-gray-500">Effective Date: 18 August 2025</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                PropertyAI ("we", "our", "us") uses cookies and similar technologies to improve your browsing experience, analyse site traffic, and personalise content. This policy explains how and why we use cookies, and how you can manage them.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
                  <p className="text-gray-700 mb-3">
                    Cookies are small text files placed on your device when you visit a website. They help us remember your preferences, understand how you use our site, and improve our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Essential Cookies</h3>
                      <p className="text-gray-700">
                        These are necessary for the website to function (e.g. login, security, load balancing). You cannot opt out of these.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Cookies</h3>
                      <p className="text-gray-700">
                        We use tools like Google Analytics (or similar) to understand how visitors use our site, such as which pages are visited most. This helps us improve user experience.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Functional Cookies</h3>
                      <p className="text-gray-700">
                        These remember your preferences (e.g. location, property interests) to personalise your experience.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Marketing Cookies</h3>
                      <p className="text-gray-700">
                        If we run advertising campaigns, these cookies may be used to show relevant ads and measure performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Cookies</h2>
                  <p className="text-gray-700 mb-3">We use cookies to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Ensure the website works smoothly.</li>
                    <li>Analyse visitor behaviour and improve our services.</li>
                    <li>Remember your preferences and personalise content.</li>
                    <li>(Future) Provide tailored marketing and referral features.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
                  <p className="text-gray-700">
                    You can control or disable cookies at any time through your browser settings. Please note that disabling essential cookies may affect how the website functions.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Updates to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Cookie Policy from time to time. Updates will be posted on this page with an updated "Effective Date."
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                  <p className="text-gray-700 mb-3">For questions about our use of cookies, contact:</p>
                  <div className="space-y-2 text-gray-700">
                    <p>📧 <a href="mailto:hello@propertyai.club?subject=Cookie Policy - General Inquiry" className="text-blue-600 hover:text-blue-800 underline">hello@propertyai.club</a></p>
                    <p>📍 London, UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </div>
  );
}
