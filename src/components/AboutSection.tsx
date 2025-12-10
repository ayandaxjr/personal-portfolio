import { motion } from 'motion/react';
import { Code2, Rocket, Brain } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';

export function AboutSection() {
  const stats = [
    {
      icon: Rocket,
      title: 'Crypto & Forex Expertise',
      description: 'Mastering global markets with disciplined trading and high-conviction strategies.',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development & Product Strategy',
      description: 'End-to-end digital solutions',
    },
    {
      icon: Brain,
      title: 'AI + Automation Engineering',
      description: 'Next-gen intelligent systems',
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#CBA135] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 inline-block">
              The Story
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-[#005BFF] to-[#CBA135] mt-2"
              />
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src="images\memoji3.png"
                  alt="Ayanda Vilakazi"
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Blue Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#005BFF]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Border Accent */}
                <div className="absolute inset-0 border-2 border-[#005BFF]/20 rounded-2xl group-hover:border-[#005BFF]/60 transition-colors duration-500" />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#005BFF] to-[#CBA135] rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                <span className="text-[#005BFF] font-semibold">Ayanda Vilakazi</span> is a multidisciplinary product builder and founder of 
                <span className="text-[#CBA135]"> Vilatech</span>. He builds high-performance digital systems, premium websites, 
                apps, AI-powered tools, and brand experiences.
              </p>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Driven by relentless ambition and world-class execution, Ayanda is redefining African innovation, 
                creating impactful products that set new standards for excellence.
              </p>

              <div className="pt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005BFF]/10 border border-[#005BFF]/30 rounded-lg">
                  <div className="w-2 h-2 bg-[#005BFF] rounded-full animate-pulse" />
                  <span className="text-sm text-white/80">Based in South Africa, Working Globally</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#005BFF]/50 transition-all duration-500 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="mb-4 w-12 h-12 bg-[#005BFF]/20 rounded-lg flex items-center justify-center group-hover:bg-[#005BFF]/30 transition-colors">
                  <stat.icon size={24} className="text-[#005BFF]" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-2">{stat.title}</h3>
                <p className="text-white/60">{stat.description}</p>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#005BFF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
