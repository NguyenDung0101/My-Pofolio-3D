import ModelViewer from "@/components/ModelViewer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Heart, Target, Code2, Sparkles } from "lucide-react";
import { useRef } from "react";

interface AboutSectionProps {
  language: string;
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yAvatar = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yTimeline = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const timelineItems = [
    {
      year: "2022 - 2026",
      title:
        language === "en"
          ? "Software Engineering Student at UEH"
          : "Sinh viên Kỹ thuật Phần mềm tại UEH",
      description:
        language === "en"
          ? "Pursuing Bachelor of Software Engineering at University of Economics Ho Chi Minh City with focus on modern web technologies and mobile development."
          : "Theo học cử nhân Kỹ thuật Phần mềm tại Đại học Kinh tế TP.HCM với định hướng về công nghệ web hiện đại và phát triển ứng dụng di động.",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      year: "2024",
      title:
        language === "en"
          ? "Frontend Intern at Metech Company"
          : "Thực tập Frontend tại Metech Company",
      description:
        language === "en"
          ? "Developed responsive web interfaces using React and TailwindCSS, converting Figma designs to pixel-perfect implementations."
          : "Phát triển giao diện web responsive bằng React và TailwindCSS, chuyển đổi thiết kế Figma thành code hoàn chỉnh.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      year: "2025",
      title:
        language === "en"
          ? "Fullstack Intern at F Foundation"
          : "Thực tập Fullstack tại F Foundation",
      description:
        language === "en"
          ? "Building full-stack applications with Next.js, NestJS, and modern database technologies. Focus on scalable architecture and clean code."
          : "Xây dựng ứng dụng full-stack với Next.js, NestJS và các công nghệ cơ sở dữ liệu hiện đại. Tập trung vào kiến trúc có thể mở rộng và mã nguồn sạch.",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9],
      },
    },
  };

  const timelineVariants = {
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background to-muted/20 overflow-hidden"
      ref={containerRef}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              {language === "en" ? "About Me" : "Giới thiệu"}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "en"
                ? "Passionate about creating seamless digital experiences with clean code and innovative solutions."
                : "Đam mê tạo ra những trải nghiệm số mượt mà với mã nguồn sạch và các giải pháp sáng tạo."}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Profile Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Avatar with Tilt Effect */}
              <motion.div
                style={{ y: yAvatar }}
                className="relative w-72 h-72 mx-auto lg:mx-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <motion.div
                  className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500/50 to-purple-500/50 p-1.5 shadow-2xl shadow-cyan-500/25"
                  animate={{
                    rotateX: [0, 5, 0],
                    rotateY: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center overflow-hidden">
                    <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                      NTD
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Bio */}
              <div className="space-y-6 text-center lg:text-left">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                  {language === "en"
                    ? "With a systems thinking approach and a focus on user-centered design, I am passionate about creating smooth digital experiences. I aim to become a professional Frontend Developer while developing Fullstack skills to build effective mobile applications."
                    : "Với tư duy hệ thống, tập trung vào thiết kế lấy người dùng làm trung tâm và niềm đam mê tạo ra trải nghiệm số mượt mà, tôi hướng đến trở thành một Frontend Developer chuyên nghiệp, đồng thời phát triển kỹ năng Fullstack để xây dựng các ứng dụng mobile hiệu quả."}
                </p>

                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    whileHover="hover"
                  >
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    {language === "en"
                      ? "Ho Chi Minh City, Vietnam"
                      : "TP. Hồ Chí Minh, Việt Nam"}
                  </motion.div>
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    whileHover="hover"
                  >
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    {language === "en"
                      ? "Languages: English (Fluent), Vietnamese (Native)"
                      : "Ngôn ngữ: Tiếng Anh (Thành thạo), Tiếng Việt (Bản ngữ)"}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={itemVariants}
              style={{ y: yTimeline }}
              className="space-y-8"
            >
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-center lg:text-left mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                {language === "en" ? "My Journey" : "Hành trình của tôi"}
              </h3>

              <div className="relative">
                {/* Timeline Line with Gradient Animation */}
                <motion.div
                  className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500"
                  animate={{
                    background: [
                      "linear-gradient(to bottom, #06b6d4, #7c3aed)",
                      "linear-gradient(to bottom, #7c3aed, #06b6d4)",
                      "linear-gradient(to bottom, #06b6d4, #7c3aed)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="space-y-12">
                  {timelineItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={timelineVariants}
                      className="relative flex items-start gap-6 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      {/* Timeline Dot */}
                      <motion.div
                        className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-4 border-cyan-500/50 rounded-full group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [1, 0.8, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        <motion.div className="text-cyan-400 group-hover:text-purple-400">
                          {item.icon}
                        </motion.div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <motion.div
                          className="bg-card border border-border rounded-xl p-6 group-hover:shadow-xl group-hover:border-cyan-500/30 transition-all duration-300"
                          whileHover={{
                            boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)",
                          }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <motion.span
                              className="text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent px-3 py-1 rounded-full"
                              animate={{
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3,
                              }}
                            >
                              {item.year}
                            </motion.span>
                          </div>
                          <h4 className="text-xl font-semibold mb-2 text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-12 text-cyan-500/20"
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
              <Code2 className="w-8 h-8" />
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 right-16 text-purple-500/20"
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
              <Sparkles className="w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
