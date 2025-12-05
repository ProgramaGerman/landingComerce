import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Trust from "./components/Trust";
import ShopCTA from "./components/ShopCTA";
import Plans from "./components/plans";
import About from "./components/about";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="plans">
          <Plans />
        </div>
        <div id="trust">
          <Trust />
        </div>                
        <ShopCTA />
        <div id="contact">
          <ContactForm />
        </div>
        <div id="about">
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;