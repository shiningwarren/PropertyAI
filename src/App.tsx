import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { AIChatDemo } from "./components/AIChatDemo";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="demo">
          <AIChatDemo />
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}