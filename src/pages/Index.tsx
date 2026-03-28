import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import HeroBenefits from "@/components/HeroBenefits";
import InfiniteSlider from "@/components/InfiniteSlider";
import RegistrationSection from "@/components/RegistrationSection";
import SymptomsSection from "@/components/SymptomsSection";
import PelvicFloorSection from "@/components/PelvicFloorSection";
import BenefitsSection from "@/components/BenefitsSection";
import CurriculumSection from "@/components/CurriculumSection";
import TeachersSection from "@/components/TeachersSection";
import ReviewsSection from "@/components/ReviewsSection";
import BonusSection from "@/components/BonusSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="pt-28 sm:pt-16">
      <NavBar />
      <HeroSection />
      <HeroBenefits />
      <InfiniteSlider />
      <RegistrationSection />
      <SymptomsSection />
      <PelvicFloorSection />
      <BenefitsSection />
      <CurriculumSection />
      <TeachersSection />
      <ReviewsSection />
      <BonusSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
