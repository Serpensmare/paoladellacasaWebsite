import { Waves, Heart, Users } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const ModalitiesSection = () => {
  const modalities = [
    {
      icon: Waves,
      name: 'Somatic Experiencing (SE)',
      description: 'Developed by Dr. Peter Levine, SE helps release trauma stored in the nervous system, restoring regulation and resilience.',
    },
    {
      icon: Heart,
      name: 'NARM (NeuroAffective Relational Model)',
      description: 'Founded by Dr. Lawrence Heller, NARM addresses developmental trauma and attachment patterns, helping you reconnect with your authentic self.',
    },
    {
      icon: Users,
      name: 'Family Constellations & Mindfulness',
      description: 'Exploring systemic patterns and cultivating present-moment awareness to deepen self-understanding and emotional clarity.',
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <AnimateOnScroll>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
              Methodology
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              How I Work: A Somatic Approach
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200}>
            <p className="text-lg text-muted-foreground">
              Integrating body, mind, and nervous system through evidence-based modalities
            </p>
          </AnimateOnScroll>
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {modalities.map((modality, index) => (
            <AnimateOnScroll key={modality.name} delay={300 + index * 100}>
              <div className="group h-full p-8 lg:p-10 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                {/* Icon */}
                <div className="w-14 h-14 mb-6 flex items-center justify-center border border-secondary/30 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <modality.icon size={24} strokeWidth={1.5} />
                </div>
                
                {/* Name */}
                <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4 leading-snug">
                  {modality.name}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {modality.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll delay={600}>
          <div className="mt-16 md:mt-20 text-center">
            <a
              href="#connect"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Begin Your Journey
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ModalitiesSection;
