import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import CheckPointsSection from "@/components/CheckPointsSection";
import CoursesSection from "@/components/CoursesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <InfoSection />
        <CheckPointsSection />
        <CoursesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;