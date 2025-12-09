import Navbar from "../components/Header";
import Footer from "../components/Footer";
import Member_section from "../components/member_section";
import Logo_section from "../components/logo-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <Member_section />
      <Logo_section />
      <Footer />
    </>
  );
}
