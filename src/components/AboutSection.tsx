import AnimateOnScroll from './AnimateOnScroll';
import paolaPortrait from '@/assets/paola-portrait.jpeg';

const AboutSection = () => {
  const benefits = [
    'Release stored stress and trauma from the body',
    'Restore a sense of inner safety and clarity',
    'Reconnect with your innate resilience and presence',
    'Navigate life\'s challenges with greater ease and joy',
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <AnimateOnScroll>
            <div className="relative">
              {/* Image container with elegant frame */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={paolaPortrait} 
                  alt="Paola della Casa - Somatic Coach"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/50" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/50" />
              </div>
              
              {/* Floating accent element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 -z-10" />
            </div>
          </AnimateOnScroll>

          {/* Text Column */}
          <div className="lg:pl-8">
            <AnimateOnScroll delay={100}>
              <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
                Philosophy
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
                From Survival to Thriving
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  For leaders navigating high-pressure environments, the body keeps the score. Foggy mind, chronic tension, sleepless nights, emotional overwhelm—these aren't weaknesses. They're signals.
                </p>
                
                <p>
                  I work with the nervous system directly, helping you:
                </p>

                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="pt-2">
                  This isn't about managing symptoms. It's about addressing the root—rewiring patterns that keep you stuck in survival mode, so you can truly live.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="mt-10">
                <a
                  href="#approach"
                  className="inline-flex items-center text-sm tracking-widest uppercase text-foreground hover:text-primary hover-underline transition-colors duration-300"
                >
                  Learn about my approach
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
