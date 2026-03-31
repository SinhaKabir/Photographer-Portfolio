import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--color-muted)] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[var(--color-primary)] font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-8">
              Let's Create <br /> Something Beautiful
            </h3>
            <p className="text-gray-400 font-light leading-relaxed mb-12 max-w-md">
              Available for bookings worldwide. Fill out the form to discuss your project, check availability, or request a custom quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-semibold uppercase tracking-wider text-sm mb-1">Email</h4>
                  <a href="mailto:hello@cinematiclens.com" className="text-gray-400 hover:text-white transition-colors">hello@cinematiclens.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-semibold uppercase tracking-wider text-sm mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-semibold uppercase tracking-wider text-sm mb-1">Studio Location</h4>
                  <span className="text-gray-400">123 Creative Studio Ave,<br />Los Angeles, CA 90001</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--color-background)] p-8 md:p-10 border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Service Required</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 text-gray-400 focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none">
                  <option value="" className="bg-[var(--color-background)]">Select a service</option>
                  <option value="wedding" className="bg-[var(--color-background)]">Wedding Photography/Video</option>
                  <option value="portrait" className="bg-[var(--color-background)]">Portrait Session</option>
                  <option value="commercial" className="bg-[var(--color-background)]">Commercial Shoot</option>
                  <option value="other" className="bg-[var(--color-background)]">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-black py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 mt-8"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
