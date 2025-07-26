import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  language: string;
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typingTexts =
    language === "en"
      ? [
          "I craft seamless digital experiences",
          "with clean code and creativity",
          "Building the future, one app at a time",
        ]
      : [
          "Tôi tạo ra những trải nghiệm số mượt mà",
          "với mã nguồn sạch và sự sáng tạo",
          "Xây dựng tương lai, từng ứng dụng một",
        ];

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const text = typingTexts[currentIndex];

      if (isTyping) {
        if (currentText.length < text.length) {
          setCurrentText(text.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
          setIsTyping(true);
        }
      }
    };

    const timer = setTimeout(type, isTyping ? typeSpeed : deleteSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isTyping, typingTexts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = "/NguyenTuanDung-Frontend.pdf";
      link.download = "NguyenTuanDung-Frontend.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
      alert("Failed to download CV. Please try again later.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 mt-9">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gradient-to/15 to-gradient-from/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div> */}

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-muted-foreground mb-4 font-medium"
          >
            {language === "en" ? "Hello, I am" : "Xin chào, tôi là"}
          </motion.p>

          {/* Name with Gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-6"
          >
            <span className="gradient-text">Nguyễn Tuấn Dũng</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium"
          >
            {language === "en"
              ? "Software Engineering Student | Aspiring Fullstack Developer"
              : "Sinh viên Kỹ thuật Phần mềm | Hướng tới Fullstack Developer"}
          </motion.p>

          {/* Typing Animation */}
          <motion.div
            variants={itemVariants}
            className="h-16 flex items-center justify-center mb-12"
          >
            <p className="text-lg lg:text-xl text-foreground font-medium typing-cursor">
              {currentText}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="btn-glow px-8 py-3 text-lg font-semibold bg-gradient-to-r from-gradient-from to-gradient-to hover:from-gradient-to hover:to-gradient-from text-white border-0"
            >
              <Mail className="w-5 h-5 mr-2" />
              {language === "en" ? "Hire Me" : "Thuê tôi"}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="btn-glow px-8 py-3 text-lg font-semibold border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              {language === "en" ? "Download CV" : "Tải CV"}
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              {language === "en" ? "Scroll to explore" : "Cuộn để khám phá"}
            </p>
            <motion.button
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-primary/20 font-mono text-sm"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        >
          {"<React />"}
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-16 text-primary/20 font-mono text-sm"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2,
          }}
        >
          {'const code = "clean"'}
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-20 text-primary/20 font-mono text-sm"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 0.5,
          }}
        >
          {"{ creativity: true }"}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
