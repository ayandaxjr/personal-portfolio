import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Software Developer',
    'Product Architect',
    'Founder of Vilatech',
    'Digital Visionary',
    'Creative Director',
    'Business Systems Engineer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue Gradient Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#005BFF] rounded-full blur-[120px]"
        />
        
        {/* Gold Gradient Glow */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#CBA135] rounded-full blur-[120px]"
        />

        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-lg"
        />

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-[#005BFF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <div className="w-2 h-2 bg-[#00FF00] rounded-full animate-pulse" />
            <span className="text-sm text-white/80">Available for Work</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 font-display">
            Hi, I&rsquo;m <span className="text-[#005BFF]">Ayanda Vilakazi</span>
            <span className="text-[#CBA135]">.</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-4xl lg:text-5xl text-white/90"
            >
              {roles[currentRole]}
            </motion.h2>
          </div>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            I build high-quality digital products, business systems, and brand experiences with precision, creativity, and excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-[#005BFF] hover:bg-[#0047CC] text-white rounded-lg transition-all hover:shadow-xl hover:shadow-[#005BFF]/50 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-[#CBA135] text-[#CBA135] hover:bg-[#CBA135] hover:text-black rounded-lg transition-all w-full sm:w-auto text-center"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#005BFF] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}