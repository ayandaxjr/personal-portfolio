import { motion } from 'motion/react';
import { Brain, MessageSquare, Smartphone, Plane, Building2, Globe, Sparkles } from 'lucide-react';

export function FutureSection() {
  const prospects = [
    {
      icon: Brain,
      title: 'AI Products',
      description: 'Omera Voice, WhatsApp Consultant Bots',
      color: '#005BFF',
    },
    {
      icon: Smartphone,
      title: 'BookSmart',
      description: 'For the students, by the students',
      color: '#CBA135',
    },
    {
      icon: Smartphone,
      title: 'Varsity Vroom',
      description: 'Student transport app — cleanest and most modern design',
      color: '#005BFF',
    },
    {
      icon: Plane,
      title: 'Drone Photography Agency',
      description: 'Aerial content creation services',
      color: '#CBA135',
    },
    {
      icon: Building2,
      title: 'Enterprise Systems',
      description: 'Solutions for municipalities',
      color: '#005BFF',
    },
    {
      icon: Sparkles,
      title: 'Premium Websites',
      description: 'High-end clients, world-class execution',
      color: '#CBA135',
    },
  ];

  return (
    <section id="future" className="relative py-32 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Blue Gradient Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#005BFF] rounded-full blur-[150px]"
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#005BFF 1px, transparent 1px), linear-gradient(90deg, #005BFF 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#005BFF]/10 backdrop-blur-sm border border-[#005BFF]/30 rounded-full"
            >
              <Sparkles size={16} className="text-[#CBA135]" />
              <span className="text-sm text-white/80">Coming Soon</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
              What&rsquo;s <span className="text-[#005BFF]">Next</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '200px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-[#005BFF] via-[#CBA135] to-[#005BFF] mt-4 mx-auto"
              />
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mt-6">
              Building the future of African tech, one ambitious project at a time
            </p>
          </div>

          {/* Prospects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prospects.map((prospect, index) => (
              <motion.div
                key={prospect.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#005BFF]/50 transition-all duration-500 hover:bg-white/10 h-full">
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${prospect.color}20, transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="relative mb-6 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundColor: `${prospect.color}20`,
                      boxShadow: `0 0 20px ${prospect.color}30`,
                    }}
                  >
                    <prospect.icon size={28} style={{ color: prospect.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl mb-3 text-white group-hover:text-[#005BFF] transition-colors duration-500">
                    {prospect.title}
                  </h3>
                  <p className="text-white/70">{prospect.description}</p>

                  {/* Glow Effect */}
                  <div
                    className="absolute -inset-1 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                    style={{
                      background: `linear-gradient(135deg, ${prospect.color}, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-white/70 mb-6">
              Want to be part of these innovations?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#005BFF] to-[#0047CC] hover:from-[#0047CC] hover:to-[#005BFF] text-white rounded-lg transition-all hover:shadow-xl hover:shadow-[#005BFF]/50"
            >
              <Sparkles size={20} />
              Let&rsquo;s Collaborate
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}