import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

interface EducationSectionProps {
  language: string;
}

const EducationSection = ({ language }: EducationSectionProps) => {
  const educationData = {
    university: language === 'en' ? 'University of Economics Ho Chi Minh City' : 'Đại học Kinh tế TP. Hồ Chí Minh',
    degree: language === 'en' ? 'Bachelor of Software Engineering' : 'Cử nhân Kỹ thuật Phần mềm',
    period: '2022 - 2026',
    gpa: '3.3/4.0',
    location: language === 'en' ? 'Ho Chi Minh City, Vietnam' : 'TP. Hồ Chí Minh, Việt Nam',
    description: language === 'en'
      ? 'Focused on modern software development practices, web technologies, and mobile application development. Strong foundation in algorithms, data structures, and software architecture.'
      : 'Tập trung vào các phương pháp phát triển phần mềm hiện đại, công nghệ web và phát triển ứng dụng di động. Nền tảng vững chắc về thuật toán, cấu trúc dữ liệu và kiến trúc phần mềm.',
    highlights: language === 'en' ? [
      'Object-Oriented Programming',
      'Database Management Systems',
      'Web Development Technologies',
      'Mobile Application Development',
      'Software Engineering Principles',
      'Data Structures & Algorithms'
    ] : [
      'Lập trình hướng đối tượng',
      'Hệ quản trị cơ sở dữ liệu',
      'Công nghệ phát triển Web',
      'Phát triển ứng dụng di động',
      'Nguyên lý kỹ thuật phần mềm',
      'Cấu trúc dữ liệu & Thuật toán'
    ]
  };

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * index,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="education" className="section-padding bg-muted/30">
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
                {language === 'en' ? 'Education' : 'Học vấn'}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'Building a strong foundation in software engineering and modern technologies.'
                : 'Xây dựng nền tảng vững chắc về kỹ thuật phần mềm và các công nghệ hiện đại.'
              }
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={cardVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                {/* University Logo/Icon */}
                <div className="lg:col-span-1 text-center lg:text-left">
                  <motion.div
                    className="w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0 bg-gradient-to-br from-gradient-from to-gradient-to rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <GraduationCap className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                  </motion.div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {educationData.period}
                    </div>
                    <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {educationData.location}
                    </div>
                    <div className="flex items-center gap-2 justify-center lg:justify-start text-sm">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">GPA: {educationData.gpa}</span>
                    </div>
                  </div>
                </div>

                {/* Education Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-2">
                      {educationData.university}
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-4">
                      {educationData.degree}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {educationData.description}
                    </p>
                  </div>

                  {/* Key Subjects */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      {language === 'en' ? 'Key Subjects' : 'Môn học chính'}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {educationData.highlights.map((subject, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={highlightVariants}
                          className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full" />
                          <span className="text-sm font-medium">{subject}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="max-w-2xl mx-auto bg-card/50 border border-border/50 rounded-xl p-6">
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Currently in my 3rd year, actively applying theoretical knowledge through practical projects and internships to build real-world experience.'
                  : 'Hiện đang học năm thứ 3, tích cực áp dụng kiến thức lý thuyết thông qua các dự án thực tế và thực tập để tích lũy kinh nghiệm thực tế.'
                }
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
