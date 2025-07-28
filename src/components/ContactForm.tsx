import { SectionHeading } from "./ui/section-heading";

export function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <SectionHeading>Welcome to the Future of UK Property Advice</SectionHeading>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Be the first to experience AI-powered property support that speaks your language - register your interest and stay one step ahead.
          </p>
        </div>
        <form className="space-y-4 max-w-xl mx-auto">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
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
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
            className="w-full bg-black text-white font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
} 