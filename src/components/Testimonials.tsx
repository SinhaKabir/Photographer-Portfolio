import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & James',
    role: 'Wedding Clients',
    content: 'The way our special day was captured exceeded every expectation. Every emotion, every tear, and every smile was documented with such cinematic beauty. Truly a master of their craft.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Creative Director, Vogue',
    content: 'Working together on our latest editorial campaign was a seamless experience. The attention to detail and ability to direct lighting is unparalleled in the industry.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Musician',
    content: 'My music video looks like a Hollywood production. The color grading and drone shots added a production value I didn\'t think was possible for my budget.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-muted)] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-primary)] font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Client Stories
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight"
          >
            Testimonials
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[var(--color-background)] p-8 border border-white/5 relative group hover:border-[var(--color-primary)]/30 transition-colors duration-500"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-[var(--color-primary)]/10 transition-colors duration-500" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--color-primary)] text-[var(--color-primary)]" />
                ))}
              </div>
              
              <p className="text-gray-400 font-light leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.img} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider">{testimonial.name}</h4>
                  <span className="text-gray-500 text-xs uppercase tracking-widest">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
