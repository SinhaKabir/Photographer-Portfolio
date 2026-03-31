import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Portrait Session',
    price: '$500',
    description: 'Perfect for personal branding, couples, or creative portraits.',
    features: [
      '2 Hours Coverage',
      '1 Location',
      '30 Retouched Photos',
      'Online Gallery',
      'Print Release'
    ],
    highlighted: false
  },
  {
    name: 'Wedding Cinematic',
    price: '$3,500',
    description: 'Comprehensive coverage for your special day with cinematic video.',
    features: [
      '10 Hours Coverage',
      '2 Videographers',
      '5-7 Min Highlight Film',
      'Full Ceremony Edit',
      'Drone Footage',
      'Raw Footage Included'
    ],
    highlighted: true
  },
  {
    name: 'Commercial Shoot',
    price: 'Custom',
    description: 'Tailored visual content for brands, campaigns, and businesses.',
    features: [
      'Half/Full Day Rates',
      'Creative Direction',
      'Photo & Video Assets',
      'Commercial Licensing',
      'Fast Turnaround'
    ],
    highlighted: false
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[var(--color-background)] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-primary)] font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Investment
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight"
          >
            Services & Packages
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 md:p-10 border ${
                pkg.highlighted 
                  ? 'bg-[var(--color-muted)] border-[var(--color-primary)]/50 relative transform lg:-translate-y-4' 
                  : 'bg-transparent border-white/10 hover:border-white/30'
              } transition-all duration-500`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-black text-xs font-bold uppercase tracking-widest py-1 px-4">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-xl font-heading font-semibold text-white uppercase tracking-wider mb-2">{pkg.name}</h4>
              <p className="text-gray-400 text-sm font-light mb-6 h-10">{pkg.description}</p>
              <div className="text-4xl font-heading font-bold text-white mb-8">
                {pkg.price}
              </div>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full text-center py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300 ${
                  pkg.highlighted
                    ? 'bg-[var(--color-primary)] text-black hover:bg-white'
                    : 'bg-white/5 text-white hover:bg-white hover:text-black'
                }`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
