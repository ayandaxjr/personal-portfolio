import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  featured: boolean;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Lama Marketing',
      description: 'A performance-first marketing agency website & system.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1669633760258-186e9dee81e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhZ2VuY3klMjBvZmZpY2V8ZW58MXx8fHwxNzY1Mjg0NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
    },
    {
      id: '2',
      title: 'Times Ten Workwear',
      description: 'Premium workwear brand + corporate clothing digital system.',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1614714053570-6c6b6aa54a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd29ya3dlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2NTI4NDYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
    },
    {
      id: '3',
      title: 'Principal Equity',
      description: 'Investment management platform with premium UX',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY1MjI3OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
    },
    {
      id: '4',
      title: '3 Way General',
      description: 'Corporate services and logistics management system',
      category: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY1Mjg0NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
    },
    {
      id: '5',
      title: 'Gcwabe Fuel',
      description: 'Fuel distribution and management platform',
      category: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY1MjI3OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
    },
    {
      id: '6',
      title: 'AEGO Consulting',
      description: 'Business consulting and advisory platform',
      category: 'Consulting',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY1MjI3OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#005BFF] rounded-full blur-[200px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
              Featured <span className="text-[#005BFF]">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              A selection of world-class digital products and systems
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} large />
            ))}
          </div>

          {/* Secondary Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, large = false }: { project: Project; index: number; large?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer"
    >
      <div className={`relative overflow-hidden rounded-2xl ${large ? 'h-[500px]' : 'h-[300px]'} bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#005BFF]/50 transition-all duration-500`}>
        {/* Project Image */}
        <div className="relative h-full overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            {/* Category Badge */}
            <div className="inline-block mb-3 px-3 py-1 bg-[#005BFF]/30 backdrop-blur-sm border border-[#005BFF]/50 rounded-full">
              <span className="text-xs text-[#005BFF]">{project.category}</span>
            </div>

            {/* Title */}
            <h3 className={`${large ? 'text-2xl lg:text-3xl' : 'text-xl'} mb-2 text-white`}>
              {project.title}
            </h3>

            {/* Description */}
            <p className={`text-white/70 mb-4 ${large ? 'text-base' : 'text-sm'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
              {project.description}
            </p>

            {/* Link Icon */}
            <div className="flex items-center gap-2 text-[#CBA135] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-sm">View Project</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Border Glow on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl border-2 border-[#005BFF]/50" />
          <div className="absolute -inset-1 bg-gradient-to-r from-[#005BFF] to-[#CBA135] rounded-2xl blur-xl opacity-30 -z-10" />
        </div>
      </div>
    </motion.div>
  );
}