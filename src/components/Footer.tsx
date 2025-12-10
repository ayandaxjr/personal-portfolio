import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="mb-2">
              <span className="font-display text-2xl font-bold">
                <span className="text-white">AV</span>
                <span className="text-[#CBA135]">.</span>
              </span>
            </div>
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Ayanda Vilakazi. All rights reserved.
            </p>
          </div>

          {/* Credit */}
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-[#005BFF] fill-[#005BFF]" />
            <span>and ambition</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            <a href="#about" className="text-white/60 hover:text-[#005BFF] transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-white/60 hover:text-[#005BFF] transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-white/60 hover:text-[#005BFF] transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">
            Designed and developed by Ayanda Vilakazi • Powered by Vilatech
          </p>
        </div>
      </div>
    </footer>
  );
}
