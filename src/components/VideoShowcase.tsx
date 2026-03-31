import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoShowcase() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--color-primary)] font-medium tracking-[0.2em] uppercase text-sm mb-4"
            >
              Motion Pictures
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight"
            >
              Cinematic Reels
            </motion.h3>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="text-sm uppercase tracking-widest text-white border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-primary)] transition-colors"
          >
            View Vimeo Channel
          </motion.a>
        </div>

        {/* Featured Video */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full group cursor-pointer overflow-hidden bg-zinc-900"
        >
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:scale-110 transition-all duration-500">
              <Play className="w-8 h-8 text-white group-hover:text-black ml-2 transition-colors duration-500" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
            <span className="text-[var(--color-primary)] text-xs uppercase tracking-widest mb-2 block">Commercial</span>
            <h4 className="text-2xl md:text-3xl font-heading font-semibold text-white uppercase tracking-wider">
              The Art of Motion
            </h4>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
