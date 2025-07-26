import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

interface IndexProps {
  language: string;
  theme: string;
}

const Index = ({ language, theme }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <spline-viewer
        url="https://prod.spline.design/bkjmn9Q8FuVgwPvK/scene.splinecode"
        style={{
          position: "fixed", // Cố định nền
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></spline-viewer>
      <div style={{ position: "relative", zIndex: 2 }}>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <SkillsSection language={language} />
        <EducationSection language={language} />
        <ExperienceSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </div>
      <div className="" style={{ position: "relative", zIndex: 100 }}>
        <Footer language={language} />
      </div>
    </div>
  );
};

export default Index;
