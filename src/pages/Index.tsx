import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VerificationForm from "@/components/VerificationForm";
import PricingSection from "@/components/PricingSection";
import PrivateSection from "@/components/PrivateSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VerificationForm />
        <PricingSection />
        <PrivateSection />
        <BenefitsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;