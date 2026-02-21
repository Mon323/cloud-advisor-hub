import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import HowWeHelp from "@/components/HowWeHelp";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <SocialProof />
    <ServicesSection />
    <WhyChooseUs />
    <AboutSection />
    <HowWeHelp />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
