import { ExternalLink } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const ImpactSection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
                Humanitarian Work
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
                Beyond Coaching: Bringing Smiles to the World
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <p className="text-lg text-primary font-medium mb-8">
                President, Emergenza Sorrisi Suisse
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Since 2020, I've had the honor of founding and leading Emergenza Sorrisi Switzerland—a humanitarian organization that embodies my commitment to healing and joy.
                </p>
                
                <p>
                  Our network of 400+ volunteer doctors and nurses travel to countries with limited resources, providing life-changing reconstructive surgery for children with cleft lips, facial malformations, burn injuries, and war trauma.
                </p>

                <p>
                  This work reflects my deepest belief: that healing—whether of the body, mind, or spirit—is a fundamental human right. And that joy, presence, and dignity belong to everyone.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-10">
                <a
                  href="https://www.switzerland.emergenzasorrisi.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  Learn More About Emergenza Sorrisi
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image Column */}
          <AnimateOnScroll delay={100} className="order-1 lg:order-2">
            <div className="relative">
              {/* Image container */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                {/* Placeholder for NGO image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-serif text-3xl text-primary">ES</span>
                    </div>
                    <p className="text-sm text-muted-foreground tracking-wide uppercase mb-2">
                      Emergenza Sorrisi
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Bringing smiles to children worldwide
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 -z-10" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
