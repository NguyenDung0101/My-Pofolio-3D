import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectsSectionProps {
  language: string;
}

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const projects = [
    {
      title: 'Vietnam Student Marathon (VSM)',
      period: '2024',
      description: language === 'en'
        ? 'A comprehensive CMS system with full CRUD operations, smooth animations, and modern UI. Built for managing marathon events with participant registration, event management, and real-time updates.'
        : 'Hệ thống CMS toàn diện với đầy đủ chức năng CRUD, animation mượt mà và giao diện hiện đại. Được xây dựng để quản lý các sự kiện marathon với đăng ký thí sinh, quản lý sự kiện và cập nhật thời gian thực.',
      technologies: ['Next.js', 'TailwindCSS', 'Shadcn/UI', 'Framer Motion', 'NestJS', 'MySQL', 'Prisma'],
      image: '/placeholder.svg',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'E-Commerce UEH',
      period: '2024',
      description: language === 'en'
        ? 'Full-stack e-commerce platform with user authentication, product management, shopping cart functionality, and payment integration using Stripe. Responsive design optimized for all devices.'
        : 'Nền tảng thương mại điện tử full-stack với xác thực người dùng, quản lý sản phẩm, chức năng giỏ hàng và tích hợp thanh toán qua Stripe. Thiết kế responsive tối ưu cho mọi thiết bị.',
      technologies: ['React', 'Vite', 'TailwindCSS', 'Express', 'MongoDB', 'Stripe'],
      image: '/placeholder.svg',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: language === 'en' ? 'Personal Portfolio Website' : 'Website Portfolio Cá Nhân',
      period: '2025',
      description: language === 'en'
        ? 'Modern, responsive portfolio website built with React, Vite, and TailwindCSS. Features smooth animations, dark/light mode, multilingual support, and optimized performance.'
        : 'Website portfolio hiện đại, responsive được xây dựng với React, Vite và TailwindCSS. Có các animation mượt mà, chế độ sáng/tối, hỗ trợ đa ngôn ngữ và hiệu suất tối ưu.',
      technologies: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
      image: '/placeholder.svg',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'from-purple-500 to-pink-500',
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

  return (
    <section id="projects" className="section-padding bg-muted/30">
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
                {language === 'en' ? 'Featured Projects' : 'Dự án nổi bật'}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'A showcase of my latest work, demonstrating my skills in modern web development and full-stack solutions.'
                : 'Một bộ sưu tập các dự án mới nhất của tôi, thể hiện kỹ năng trong phát triển web hiện đại và giải pháp full-stack.'
              }
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group ${project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}
              >
                <div className={`bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300 ${project.featured ? 'lg:col-span-2' : ''}`}>
                  <div className={`${project.featured ? 'lg:flex lg:items-center' : ''}`}>
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : 'h-48'}`}>
                      <motion.div
                        className={`w-full bg-gradient-to-br ${project.color} ${project.featured ? 'h-64 lg:h-80' : 'h-48'} flex items-center justify-center`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-white text-center">
                          <div className="text-6xl font-bold opacity-20 mb-2">
                            {project.title.charAt(0)}
                          </div>
                          <p className="text-sm opacity-75">
                            {language === 'en' ? 'Project Preview' : 'Xem trước dự án'}
                          </p>
                        </div>
                      </motion.div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {language === 'en' ? 'Demo' : 'Xem demo'}
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {language === 'en' ? 'Code' : 'Mã nguồn'}
                        </Button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className={`p-6 lg:p-8 ${project.featured ? 'lg:w-1/2' : ''}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </div>
                        {project.featured && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                            {language === 'en' ? 'Featured' : 'Nổi bật'}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl lg:text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Tag className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold">
                            {language === 'en' ? 'Technologies' : 'Công nghệ'}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
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

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          variant="default"
                          size="sm"
                          className="btn-glow"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {language === 'en' ? 'Live Demo' : 'Demo trực tiếp'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="btn-glow"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {language === 'en' ? 'View Code' : 'Xem mã'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="btn-glow"
              onClick={() => window.open('https://github.com/NguyenDung0101', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              {language === 'en' ? 'View All Projects on GitHub' : 'Xem tất cả dự án trên GitHub'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
