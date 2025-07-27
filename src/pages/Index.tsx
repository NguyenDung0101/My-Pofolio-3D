import { useEffect } from "react";
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
  useEffect(() => {
    // Ensure spline-viewer script is loaded for light mode
    if (theme === "light") {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.10.37/build/spline-viewer.js";
      
      // Check if script is already loaded
      const existingScript = document.querySelector(
        'script[src="https://unpkg.com/@splinetool/viewer@1.10.37/build/spline-viewer.js"]'
      );
      
      if (!existingScript) {
        document.head.appendChild(script);
        
        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      }
    }
  }, [theme]);

  const renderSplineViewer = () => {
    if (theme === "light") {
      // Light mode: spline-viewer with undefined URL
      return (
        <spline-viewer 
          url="undefined"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />
      );
    } else {
      // Dark mode: spline-viewer with specific URL
      return (
        <spline-viewer
          url="https://prod.spline.design/bkjmn9Q8FuVgwPvK/scene.splinecode"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Conditional Spline Viewer based on theme */}
      {renderSplineViewer()}
      
      {/* Main content with higher z-index */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <SkillsSection language={language} />
        <EducationSection language={language} />
        <ExperienceSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
        <Footer language={language} />
      </div>
    </div>
  );
};

export default Index;
