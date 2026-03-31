import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <span className="font-heading font-bold text-2xl tracking-widest uppercase block mb-2">
              Cinematic<span className="text-[var(--color-primary)]">.</span>
            </span>
            <p className="text-gray-500 text-sm font-light">
              Capturing moments that matter since 2014.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Cinematic Lens. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
