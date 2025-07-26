import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

interface FooterProps {
  language: string;
}

const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nguyễn-tuấn-dũng-21496b2b8',
      color: 'hover:text-blue-600',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/NguyenDung0101',
      color: 'hover:text-gray-600',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:dnguyentuan03@gmail.com',
      color: 'hover:text-red-600',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold mb-2">
                <span className="gradient-text">Nguyễn Tuấn Dũng</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'en' 
                  ? 'Software Engineering Student & Aspiring Fullstack Developer'
                  : 'Sinh viên Kỹ thuật Phần mềm & Hướng tới Fullstack Developer'
                }
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 ${social.color} group`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Back to Top */}
            <motion.div variants={itemVariants} className="text-center md:text-right">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="btn-glow"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Back to Top' : 'Về đầu trang'}
              </Button>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1">
              <span>© {currentYear} Nguyễn Tuấn Dũng.</span>
              <span>{language === 'en' ? 'All rights reserved.' : 'Tất cả quyền được bảo lưu.'}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <span>
                {language === 'en' ? 'Made with' : 'Được tạo với'}
              </span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>
                {language === 'en' ? 'using React & TailwindCSS' : 'bằng React & TailwindCSS'}
              </span>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-xs text-muted-foreground">
              {language === 'en'
                ? 'Built with modern web technologies for optimal performance and user experience.'
                : 'Được xây dựng với các công nghệ web hiện đại để có hiệu suất và trải nghiệm người dùng tối ưu.'
              }
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-gradient-to-tl from-gradient-from/5 to-gradient-to/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-gradient-to/5 to-gradient-from/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
