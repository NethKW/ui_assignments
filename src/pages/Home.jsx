import Navbar from "../components/Header";
import Footer from "../components/Footer";
import MemberSection from "../components/MemberSection";
import LogoSection from "../components/LogoSection";
import Benefits from "../components/BenefitsSection"
import PackagesSection from "../components/PackagesSection";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <>
      <Navbar />
      <MemberSection />
      <LogoSection />
      <Benefits />
      <PackagesSection />
      <Courses />
      <Footer />
    </>
  );
}
