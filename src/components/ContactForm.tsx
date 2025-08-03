import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // ✅ Handle Netlify Forms submission (no serverless function needed)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // ✅ Submit the form data directly to Netlify
      const res = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setMessage("✅ Thank you! Your details have been submitted.");
        form.reset();
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      setMessage("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <SectionHeading>The Future of UK Property Advice</SectionHeading>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Be the first to experience AI-powered property support that speaks your language - register your interest and stay one step ahead.
          </p>
        </div>

        {/* ✅ Netlify-enabled form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4 max-w-xl mx-auto"
        >
          {/* Required hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Hidden honeypot field for spam prevention */}
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black bg-white mb-6"
              placeholder="you@email.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* ✅ Show success or error message */}
        {message && (
          <p className="text-center mt-4 text-lg">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
