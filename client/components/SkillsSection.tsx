import { motion } from 'framer-motion';
import { Code, Database, Palette, Settings } from 'lucide-react';

interface SkillsSectionProps {
  language: string;
}

const SkillsSection = ({ language }: SkillsSectionProps) => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: language === 'en' ? 'Languages' : 'Ngôn ngữ lập trình',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript (ES6+)', level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'HTML5', level: 95, color: '#E34F26' },
        { name: 'CSS3', level: 90, color: '#1572B6' },
      ],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: language === 'en' ? 'Frameworks & Libraries' : 'Framework & Thư viện',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React.js', level: 85, color: '#61DAFB' },
        { name: 'Next.js', level: 80, color: '#000000' },
        { name: 'TailwindCSS', level: 90, color: '#06B6D4' },
        { name: 'Framer Motion', level: 75, color: '#0055FF' },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: language === 'en' ? 'Backend & Database' : 'Backend & Cơ sở dữ liệu',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80, color: '#339933' },
        { name: 'NestJS', level: 75, color: '#E0234E' },
        { name: 'MySQL', level: 85, color: '#4479A1' },
        { name: 'Prisma ORM', level: 80, color: '#2D3748' },
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: language === 'en' ? 'Tools & Others' : 'Công cụ & Khác',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 85, color: '#F05032' },
        { name: 'Figma', level: 80, color: '#F24E1E' },
        { name: 'Vercel', level: 85, color: '#000000' },
        { name: 'MongoDB', level: 75, color: '#47A248' },
      ],
    },
  ];

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="section-padding">
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
                {language === 'en' ? 'Skills & Tech Stack' : 'Kỹ năng & Công nghệ'}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'A comprehensive overview of the technologies and tools I work with to create amazing digital experiences.'
                : 'Tổng quan toàn diện về các công nghệ và công cụ tôi sử dụng để tạo ra những trải nghiệm số tuyệt vời.'
              }
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                className="group"
              >
                <div className="h-full bg-card border border-border rounded-xl p-6 group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-heading font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: skill.color }}
                            />
                            <span className="font-medium text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ 
                              background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})` 
                            }}
                            variants={progressVariants}
                            custom={skill.level}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-heading font-semibold mb-4">
                {language === 'en' ? 'Always Learning' : 'Luôn học hỏi'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Technology evolves rapidly, and I stay current with the latest trends and best practices in web development, mobile app development, and software architecture.'
                  : 'Công nghệ phát triển nhanh chóng, và tôi luôn cập nhật với những xu hướng mới nhất và các phương pháp hay nhất trong phát triển web, ứng dụng di động và kiến trúc phần mềm.'
                }
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
