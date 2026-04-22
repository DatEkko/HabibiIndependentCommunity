import Footer from "@/ui/Footer";
import HeroPage from "@/ui/HeroPage";
import IntroSection from "@/ui/IntroSection";
import JoinUsSection from "@/ui/JoinUsSection";
import LeadershipSection from "@/ui/LeadershipSection";
import MemberSection from "@/ui/MemberSection";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroPage />
      <IntroSection />
      <LeadershipSection />
      <MemberSection />
      <JoinUsSection />
      <Footer />
    </div>
  );
}
