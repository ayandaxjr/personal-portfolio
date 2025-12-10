import { motion } from 'motion/react';
import { Mail, Send, MapPin, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { TikTokIcon } from './TikTokIcon';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', // Replace with your actual key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayanda-vilakazi-563632265/',
      color: '#005BFF',
      isCustomIcon: false,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/vilatech.co.__?igsh=MWE4ejN5dzUzc3lncQ%3D%3D&utm_source=qr',
      color: '#CBA135',
      isCustomIcon: false,
    },
    {
      icon: TikTokIcon,
      label: 'TikTok',
      href: 'https://www.tiktok.com/@vilatech.co?_r=1&_t=ZS-924vJ5H2Srl',
      color: '#005BFF',
      isCustomIcon: true,
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Blue Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[#005BFF] rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Let&rsquo;s Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005BFF] to-[#CBA135]">
                Extraordinary
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Have a project in mind? Let&rsquo;s discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-white/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:border-[#005BFF] focus:outline-none focus:ring-2 focus:ring-[#005BFF]/50 text-white transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:border-[#005BFF] focus:outline-none focus:ring-2 focus:ring-[#005BFF]/50 text-white transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:border-[#005BFF] focus:outline-none focus:ring-2 focus:ring-[#005BFF]/50 text-white resize-none transition-all"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-[#005BFF] to-[#0047CC] hover:from-[#0047CC] hover:to-[#005BFF] text-white rounded-lg transition-all hover:shadow-xl hover:shadow-[#005BFF]/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
                  >
                    ✓ Message sent successfully! I&rsquo;ll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
                  >
                    ✗ Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Info Card */}
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-2xl mb-6">Get in Touch</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#005BFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#005BFF]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Location</p>
                      <p className="text-white">South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#CBA135]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#CBA135]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Email</p>
                      <a href="mailto:ayandajr11@gmail.com" className="text-white hover:text-[#CBA135] transition-colors">
                        ayandajr11@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-white/60 text-sm mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:border-[#005BFF]/50 transition-all group"
                        aria-label={social.label}
                      >
                        {social.isCustomIcon ? (
                          <social.icon size={20} className="text-white/70 group-hover:text-[#005BFF] transition-colors" />
                        ) : (
                          <social.icon size={20} className="text-white/70 group-hover:text-[#005BFF] transition-colors" />
                        )}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="p-6 bg-gradient-to-br from-[#005BFF]/20 to-[#CBA135]/20 backdrop-blur-sm border border-[#005BFF]/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-[#00FF00] rounded-full animate-pulse" />
                  <span className="text-lg">Available for Any Project</span>
                </div>
                <p className="text-white/70 text-sm">
                  Come with a <span className="text-[#CBA135] font-semibold">BUDGET!!</span> You will be so so happy you did.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}