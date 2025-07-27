import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ContactSectionProps {
  language: string;
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'dnguyentuan03@gmail.com',
      href: 'mailto:dnguyentuan03@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: language === 'en' ? 'Phone' : 'Điện thoại',
      value: '+84 33 2730 563',
      href: 'tel:+84332730563',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: language === 'en' ? 'Location' : 'Địa chỉ',
      value: language === 'en' 
        ? 'Binh Tan District, Ho Chi Minh City, Vietnam'
        : 'Quận Bình Tân, TP. Hồ Chí Minh, Việt Nam',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual EmailJS implementation)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just simulate success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // TODO: Implement actual EmailJS integration
      console.log('Form submitted:', formData);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <section id="contact" className="section-padding">
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
                {language === 'en' ? "Let's Work Together" : 'Hãy cùng hợp tác'}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? "Ready to bring your ideas to life? Let's discuss how we can create something amazing together."
                : 'Sẵn sàng biến ý tưởng của bạn thành hiện thực? Hãy thảo luận về cách chúng ta có thể tạo ra điều gì đó tuyệt vời cùng nhau.'
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  {language === 'en' ? 'Get in Touch' : 'Liên hệ với tôi'}
                </h3>
                <p className="text-muted-foreground mb-8">
                  {language === 'en'
                    ? "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development."
                    : 'Tôi luôn sẵn sàng thảo luận về các cơ hội mới, dự án thú vị, hoặc chỉ đơn giản là trò chuyện về công nghệ và phát triển.'
                  }
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">
                  {language === 'en' ? 'Follow Me' : 'Theo dõi tôi'}
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 ${social.color} group`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  {language === 'en' ? 'Send Message' : 'Gửi tin nhắn'}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'en' ? 'Name' : 'Tên'}
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={language === 'en' ? 'Your name' : 'Tên của bạn'}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={language === 'en' ? 'Your email' : 'Email của bạn'}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Message' : 'Tin nhắn'}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={language === 'en' 
                        ? 'Tell me about your project or just say hello!'
                        : 'Hãy nói về dự án của bạn hoặc chỉ đơn giản là chào hỏi!'
                      }
                      rows={5}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 text-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {language === 'en' 
                        ? 'Message sent successfully!'
                        : 'Tin nhắn đã được gửi thành công!'
                      }
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {language === 'en' 
                        ? 'Failed to send message. Please try again.'
                        : 'Gửi tin nhắn thất bại. Vui lòng thử l��i.'
                      }
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full btn-glow bg-gradient-to-r from-gradient-from to-gradient-to hover:from-gradient-to hover:to-gradient-from text-white border-0"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {language === 'en' ? 'Sending...' : 'Đang gửi...'}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        {language === 'en' ? 'Send Message' : 'Gửi tin nhắn'}
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
