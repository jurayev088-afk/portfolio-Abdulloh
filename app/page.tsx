import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import ProjectsPage from "@/components/ProjectsPage";
import SkillsPage from "@/components/SkillsPage";

export default function page() {
  return (
    <div>
      <Navbar />
      <main>
        <HomePage />

        <AboutPage />

        <SkillsPage />

        <ProjectsPage />

        <ContactPage />
      </main>
      <Footer/>
    </div>
  );
}
