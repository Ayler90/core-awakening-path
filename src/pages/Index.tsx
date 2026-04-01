import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import HeroBenefits from "@/components/HeroBenefits";
import InfiniteSlider from "@/components/InfiniteSlider";
import RegistrationSection from "@/components/RegistrationSection";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
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
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a[href="#iscrizione"]');
      if (!link) return;
      const el = document.getElementById("iscrizione");
      if (!el) return;
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + window.scrollY + rect.height / 2;
      const scrollTo = elCenter - window.innerHeight / 2;
      window.scrollTo({ top: Math.max(0, scrollTo), behavior: "smooth" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <main className="pt-28 sm:pt-16">
      <NavBar showCountdown />
      <HeroSection />
      <HeroBenefits />
      <InfiniteSlider />
      <RegistrationSection />
      <VideoTestimonialsSection />
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
