import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Mail, ArrowDown, Code, Palette, Rocket } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  language: string;
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 300], [0, 50]);

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
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 1500;

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
        delayChildren: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9],
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.9],
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background to-muted/20">
      {/* Animated Background Particles */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: yBackground }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.5, 0.2],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content - Left Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 text-left"
        >
          <motion.p
            variants={textVariants}
            className="text-lg lg:text-xl text-muted-foreground mb-4 font-medium"
          >
            {language === "en" ? "Hello, I am" : "Xin chào, tôi là"}
          </motion.p>

          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
          >
            Nguyễn Tuấn Dũng
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 font-medium max-w-lg"
          >
            {language === "en"
              ? "Software Engineering Student | Aspiring Fullstack Developer"
              : "Sinh viên Kỹ thuật Phần mềm | Hướng tới Fullstack Developer"}
          </motion.p>

          <motion.div
            variants={textVariants}
            className="h-16 flex items-center mb-10"
          >
            <p className="text-base lg:text-lg text-foreground font-medium typing-cursor px-4">
              {currentText}
            </p>
          </motion.div>

          {/* Icon Row */}
          <motion.div variants={containerVariants} className="flex gap-6 mb-10">
            <motion.div variants={iconVariants} whileHover="hover">
              <Code className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover">
              <Palette className="w-8 h-8 text-purple-400" />
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover">
              <Rocket className="w-8 h-8 text-pink-400" />
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-cyan-500 text-white border-0 shadow-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                {language === "en" ? "Contact Me" : "Liên hệ"}
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-semibold border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5 mr-2" />
                {language === "en" ? "Download CV" : "Xem CV"}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Avatar - Right Side */}
        <motion.div
          variants={avatarVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 flex justify-center"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/25">
              <img
                src="/avatar.png"
                alt="Nguyễn Tuấn Dũng"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-sm text-muted-foreground mb-4 font-medium">
          {language === "en" ? "Scroll to explore" : "Cuộn để khám phá"}
        </p>
        <motion.button
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown className="w-5 h-5 text-cyan-500" />
        </motion.button>
      </motion.div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-16 left-8 text-cyan-500/20 font-mono text-sm"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        >
          {"<Code />"}
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-12 text-purple-500/20 font-mono text-sm"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 1.5,
          }}
        >
          {'const passion = "development"'}
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-16 text-pink-500/20 font-mono text-sm"
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0.5,
          }}
        >
          {"{ innovation: true }"}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
