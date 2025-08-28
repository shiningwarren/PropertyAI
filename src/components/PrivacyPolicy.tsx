import { Header } from "./Header";
import { FooterSimple } from "./FooterSimple";
import { useEffect } from "react";

export function PrivacyPolicy() {
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
              <h1 className="mb-8 sm:mb-10 text-4xl lg:text-6xl tracking-tight">Privacy Policy</h1>
              <p className="text-sm text-gray-500">Effective Date: 18 August 2025</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                PropertyAI ("we", "our", "us") respects your privacy and is committed to protecting your personal data. 
                This policy explains how we collect, use, and safeguard your information when you use our website, services, and AI platform.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 mb-3">When you use PropertyAI, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Personal details:</strong> name, email address, location (postcode or city).</li>
                    <li><strong>Property interests:</strong> investment experience, goals, property focus (e.g. BTL, HMO, BRR).</li>
                    <li><strong>Usage data:</strong> interactions with our AI platform, analytics data, cookies.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-3">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide AI-powered property insights and deal analysis.</li>
                    <li>Personalise your experience based on your investment level and focus.</li>
                    <li>Communicate updates, waitlist confirmations, and new features.</li>
                    <li>Improve our services and knowledge base.</li>
                    <li><strong>(Future)</strong> Connect you with vetted third-party professionals (solicitors, brokers, builders, etc.) if you request or consent to introductions.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Sharing Your Information</h2>
                  <p className="text-gray-700 mb-3"><strong>We do not sell your data.</strong></p>
                  <p className="text-gray-700 mb-3">We may share information only in these cases:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>With service providers who help us operate the platform (e.g. hosting, analytics).</li>
                    <li>With trusted property professionals, but only if you request or consent to an introduction.</li>
                    <li>If required by law or to protect our legal rights.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
                  <p className="text-gray-700 mb-3">Under UK GDPR, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Access the personal data we hold about you.</li>
                    <li>Request correction of inaccurate data.</li>
                    <li>Request deletion of your data ("right to be forgotten").</li>
                    <li>Restrict or object to processing of your data.</li>
                    <li>Withdraw consent at any time.</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    To exercise these rights, contact us at: <a href="mailto:hello@propertyai.club?subject=Privacy Policy - Data Rights Request" className="text-blue-600 hover:text-blue-800 underline">hello@propertyai.club</a>
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                  <p className="text-gray-700">
                    We keep your data only as long as needed to provide our services or comply with legal obligations.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Security</h2>
                  <p className="text-gray-700">
                    We take appropriate technical and organisational measures to protect your data from unauthorised access, loss, or misuse.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
                  <p className="text-gray-700">
                    Our website uses cookies to improve user experience and analytics. You can control cookies via your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this policy from time to time. Any changes will be posted on this page with an updated "Effective Date."
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                  <p className="text-gray-700 mb-3">For any questions about this policy or your data rights, please contact us:</p>
                  <div className="space-y-2 text-gray-700">
                    <p>📧 <a href="mailto:hello@propertyai.club?subject=Privacy Policy - General Inquiry" className="text-blue-600 hover:text-blue-800 underline">hello@propertyai.club</a></p>
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
