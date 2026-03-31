import { motion } from 'motion/react';

export default function About() {
  const skills = [
    { name: 'Photography', level: 95 },
    { name: 'Videography', level: 90 },
    { name: 'Color Grading', level: 85 },
    { name: 'Drone Shots', level: 80 },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--color-background)] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[3/4] overflow-hidden relative group">
              <div className="absolute inset-0 bg-[var(--color-primary)]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1554046920-90dcac824b20?q=80&w=2000&auto=format&fit=crop"
                alt="Photographer Portrait"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[var(--color-primary)]/30 -z-10 hidden md:block"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[var(--color-primary)] font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Behind The Lens
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-8">
              Visual Storyteller <br /> & Director
            </h3>
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed mb-10">
              <p>
                With over a decade of experience in visual arts, I specialize in crafting cinematic narratives that evoke emotion and capture the raw essence of the moment.
              </p>
              <p>
                My approach blends documentary-style authenticity with high-end editorial aesthetics, ensuring every frame is not just seen, but felt. From intimate weddings to large-scale commercial productions, I bring a meticulous eye for detail to every project.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm uppercase tracking-wider mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-[var(--color-primary)]">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-[var(--color-primary)]"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <span className="block text-4xl font-heading font-bold text-white mb-1">10+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Years Exp.</span>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <span className="block text-4xl font-heading font-bold text-white mb-1">300+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Projects</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
