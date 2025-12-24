import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 parallax"
        style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
      />
      
      {/* Decorative elements with parallax */}
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl parallax"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl parallax"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Small intro text */}
          <p className="animate-fade-in text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-8 md:mb-10">
            Somatic Coaching for Leaders
          </p>

          {/* Main headline */}
          <h1 className="animate-fade-in-delay-1 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight text-foreground mb-8 md:mb-12 text-balance">
            Healing the Nervous System,
            <span className="block mt-2 md:mt-4 text-primary">
              Restoring Inner Safety
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-delay-2 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light">
            Guiding leaders to reclaim their energy, presence, and the courage to truly live—not just survive.
          </p>

          {/* CTA area */}
          <div className="animate-fade-in-delay-3 mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#approach"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 group touch-target"
            >
              Discover My Approach
              <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300 touch-target"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to learn more"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
