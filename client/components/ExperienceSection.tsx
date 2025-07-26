import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

interface ExperienceSectionProps {
  language: string;
}

const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  const experiences = [
    {
      company: 'F Foundation',
      position: language === 'en' ? 'Fullstack Intern' : 'Thực tập sinh Fullstack',
      period: '04/2025 - 07/2025',
      location: language === 'en' ? 'Ho Chi Minh City, Vietnam' : 'TP. Hồ Chí Minh, Việt Nam',
      description: language === 'en'
        ? 'Converting interfaces from static to React & Next.js, developing backend with NestJS, MySQL, and Prisma ORM. Integrating APIs and optimizing system performance.'
        : 'Chuyển đổi giao diện từ static sang React & Next.js, phát triển backend với NestJS, MySQL và Prisma ORM. Tích hợp API và tối ưu hiệu suất hệ thống.',
      achievements: language === 'en' ? [
        'Built full-stack web applications using modern technologies',
        'Developed RESTful APIs with NestJS and optimized database queries',
        'Implemented responsive UI components with React and Next.js',
        'Collaborated with cross-functional teams using Agile methodology'
      ] : [
        'Xây dựng ứng dụng web full-stack sử dụng công nghệ hiện đại',
        'Phát triển RESTful API với NestJS và tối ưu truy vấn cơ sở dữ liệu',
        'Triển khai các component UI responsive với React và Next.js',
        'Hợp tác với các nhóm đa chức năng sử dụng phương pháp Agile'
      ],
      technologies: ['React', 'Next.js', 'NestJS', 'MySQL', 'Prisma', 'TypeScript'],
      color: 'from-purple-500 to-blue-500',
      current: true,
    },
    {
      company: 'Metech Company',
      position: language === 'en' ? 'Frontend Intern' : 'Thực tập sinh Frontend',
      period: '06/2024 - 11/2024',
      location: language === 'en' ? 'Ho Chi Minh City, Vietnam' : 'TP. Hồ Chí Minh, Việt Nam',
      description: language === 'en'
        ? 'Converting Figma designs to HTML/CSS, optimizing with TailwindCSS. Building dynamic components with React and TailwindCSS. Improving UI performance.'
        : 'Chuyển đổi thiết kế Figma sang HTML/CSS, tối ưu với TailwindCSS. Xây dựng các dynamic component bằng React và TailwindCSS. Cải thiện hiệu suất giao diện người dùng.',
      achievements: language === 'en' ? [
        'Converted 15+ Figma designs to pixel-perfect responsive components',
        'Improved page load times by 40% through code optimization',
        'Developed reusable component library with React and TailwindCSS',
        'Collaborated with design team to ensure design consistency'
      ] : [
        'Chuyển đổi 15+ thiết kế Figma thành component responsive hoàn hảo',
        'Cải thiện thời gian tải trang 40% thông qua tối ưu mã nguồn',
        'Phát triển thư viện component tái sử dụng với React và TailwindCSS',
        'Hợp tác với team thiết kế để đảm bảo tính nhất quán trong thiết kế'
      ],
      technologies: ['React', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript', 'Figma'],
      color: 'from-green-500 to-teal-500',
      current: false,
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

  const experienceVariants = {
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
    <section id="experience" className="section-padding">
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
                {language === 'en' ? 'Work Experience' : 'Kinh nghiệm làm việc'}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'Hands-on experience in frontend and fullstack development through meaningful internships.'
                : 'Kinh nghiệm thực tế trong phát triển frontend và fullstack thông qua các kỳ thực tập ý nghĩa.'
              }
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-from via-gradient-to to-gradient-from hidden lg:block" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={experienceVariants}
                    className="relative group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-8 w-4 h-4 bg-primary border-4 border-background rounded-full z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300" />
                    
                    {/* Experience Card */}
                    <div className={`lg:ml-20 bg-card border border-border rounded-xl p-6 lg:p-8 group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300 ${exp.current ? 'ring-2 ring-primary/20' : ''}`}>
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} text-white`}>
                              <Building className="w-4 h-4" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-heading font-bold">
                              {exp.company}
                            </h3>
                            {exp.current && (
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                {language === 'en' ? 'Current' : 'Hiện tại'}
                              </span>
                            )}
                          </div>
                          <p className="text-lg font-semibold text-primary mb-3">
                            {exp.position}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">
                          {language === 'en' ? 'Key Achievements' : 'Thành tựu chính'}
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: achIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">
                          {language === 'en' ? 'Technologies Used' : 'Công nghệ sử dụng'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
