import { Header } from "./Header";
import { FooterSimple } from "./FooterSimple";
import { useEffect } from "react";

export function TermsOfService() {
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
              <h1 className="mb-8 sm:mb-10 text-4xl lg:text-6xl tracking-tight">Terms of Service</h1>
              <p className="text-sm text-gray-500">Effective Date: 18 August 2025</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Welcome to PropertyAI ("we", "our", "us"). By accessing or using our website and AI services, you agree to these Terms of Service. If you do not agree, you should not use PropertyAI.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Service Overview</h2>
                  <p className="text-gray-700 mb-3">
                    PropertyAI provides AI-powered educational content, insights, and tools for UK property investors. Our service is designed to support learning and decision-making, but it does not replace professional legal, financial, or tax advice. Always consult qualified professionals before acting on information provided.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>You must be at least 18 years old to use PropertyAI.</li>
                    <li>You agree to use the platform lawfully and not for fraudulent or harmful purposes.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Use of Information</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>PropertyAI provides educational insights and deal analysis based on user input and our knowledge base.</li>
                    <li>We do not guarantee accuracy, completeness, or specific investment outcomes.</li>
                    <li>You are solely responsible for any investment or financial decisions you make.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Professional Referrals</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>In future, PropertyAI may suggest third-party professionals (e.g. solicitors, brokers, builders, letting agents).</li>
                    <li>These referrals are optional and based on your location, goals, or consent.</li>
                    <li>We may receive fees from businesses for referrals.</li>
                    <li>We are not responsible for the advice, services, or actions of third-party providers.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>All content, knowledge base entries, and branding are the property of PropertyAI.</li>
                    <li>You may not copy, redistribute, or resell any part of the service without written permission.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Data Protection</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Your data is handled in line with our Privacy Policy.</li>
                    <li>By using PropertyAI, you consent to data collection and processing as described in that policy.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Disclaimers & Limitation of Liability</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>PropertyAI is provided "as is" without warranties of any kind.</li>
                    <li>We make no guarantee that the service will be uninterrupted, error-free, or produce specific results.</li>
                    <li>To the fullest extent permitted by law, PropertyAI is not liable for any direct, indirect, incidental, or consequential loss arising from your use of the service.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Termination</h2>
                  <p className="text-gray-700">
                    We reserve the right to suspend or terminate your access to PropertyAI if you breach these Terms or misuse the platform.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
                  <p className="text-gray-700">
                    We may update these Terms from time to time. Updates will be posted on this page with an updated "Effective Date." Continued use of the service after changes constitutes acceptance.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                  <p className="text-gray-700 mb-3">For any questions about these Terms, please contact us:</p>
                  <div className="space-y-2 text-gray-700">
                    <p>📧 <a href="mailto:hello@propertyai.club?subject=Terms of Service - General Inquiry" className="text-blue-600 hover:text-blue-800 underline">hello@propertyai.club</a></p>
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
