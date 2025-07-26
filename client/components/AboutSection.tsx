import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Target } from 'lucide-react';

interface AboutSectionProps {
  language: string;
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const timelineItems = [
    {
      year: '2022 - 2026',
      title: language === 'en' 
        ? 'Software Engineering Student at UEH'
        : 'Sinh viên Kỹ thuật Phần mềm tại UEH',
      description: language === 'en'
        ? 'Pursuing Bachelor of Software Engineering at University of Economics Ho Chi Minh City with focus on modern web technologies and mobile development.'
        : 'Theo học cử nhân Kỹ thuật Phần mềm tại Đại học Kinh tế TP.HCM với định hướng về công nghệ web hiện đại và phát triển ứng dụng di động.',
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      year: '2024',
      title: language === 'en' 
        ? 'Frontend Intern at Metech Company'
        : 'Thực tập Frontend tại Metech Company',
      description: language === 'en'
        ? 'Developed responsive web interfaces using React and TailwindCSS, converting Figma designs to pixel-perfect implementations.'
        : 'Phát triển giao diện web responsive bằng React và TailwindCSS, chuyển đổi thiết kế Figma thành code hoàn chỉnh.',
      icon: <Target className="w-4 h-4" />,
    },
    {
      year: '2025',
      title: language === 'en' 
        ? 'Fullstack Intern at F Foundation'
        : 'Thực tập Fullstack tại F Foundation',
      description: language === 'en'
        ? 'Building full-stack applications with Next.js, NestJS, and modern database technologies. Focus on scalable architecture and clean code.'
        : 'Xây dựng ứng dụng full-stack với Next.js, NestJS và các công nghệ cơ sở dữ liệu hiện đại. Tập trung vào kiến trúc có thể mở rộng và mã nguồn sạch.',
      icon: <Heart className="w-4 h-4" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              <span className="gradient-text">
                {language === 'en' ? 'About Me' : 'Giới thiệu'}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'Passionate about creating seamless digital experiences with clean code and innovative solutions.'
                : 'Đam mê tạo ra những trải nghiệm số mượt mà với mã nguồn sạch và các giải pháp sáng tạo.'
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Profile Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Avatar Placeholder */}
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-gradient-from to-gradient-to p-1">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <div className="text-6xl font-bold gradient-text">NTD</div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en'
                    ? 'With a systems thinking approach and a focus on user-centered design, I am passionate about creating smooth digital experiences. I aim to become a professional Frontend Developer while developing Fullstack skills to build effective mobile applications.'
                    : 'Với tư duy hệ thống, tập trung vào thiết kế lấy người dùng làm trung tâm và niềm đam mê tạo ra trải nghiệm số mượt mà, tôi hướng đến trở thành một Frontend Developer chuyên nghiệp, đồng thời phát triển kỹ năng Fullstack để xây dựng các ứng dụng mobile hiệu quả.'
                  }
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {language === 'en' 
                      ? 'Ho Chi Minh City, Vietnam'
                      : 'TP. Hồ Chí Minh, Việt Nam'
                    }
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? 'Languages: English (Fluent), Vietnamese (Native)'
                      : 'Ngôn ngữ: Tiếng Anh (Thành thạo), Tiếng Việt (Bản ngữ)'
                    }
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-center lg:text-left mb-8">
                {language === 'en' ? 'My Journey' : 'Hành trình của tôi'}
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-from to-gradient-to" />

                <div className="space-y-8">
                  {timelineItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={timelineVariants}
                      className="relative flex items-start gap-6 group"
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-background border-4 border-primary rounded-full group-hover:border-gradient-from transition-colors duration-300">
                        <div className="text-primary">
                          {item.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="bg-card border border-border rounded-lg p-6 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold mb-2">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
