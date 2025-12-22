import AnimateOnScroll from './AnimateOnScroll';

const WhoIServeSection = () => {
  const leftColumnItems = [
    'Chronic stress and burnout',
    'Foggy mind and decision fatigue',
    'Physical discomfort and tension',
    'Sleep disturbances',
  ];

  const rightColumnItems = [
    'Anxiety and nervous system overwhelm',
    'Feeling disconnected from joy',
    'Struggling to balance professional and personal life',
    'Ready to move from surviving to thriving',
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Leaders Ready to Transform
            </h2>
          </AnimateOnScroll>

          {/* Subheading */}
          <AnimateOnScroll delay={100}>
            <p className="text-lg md:text-xl opacity-90 mb-12 md:mb-16">
              I work with executives, entrepreneurs, and change-makers experiencing:
            </p>
          </AnimateOnScroll>

          {/* Two-column list */}
          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left max-w-3xl mx-auto mb-12 md:mb-16">
              {/* Left column */}
              <ul className="space-y-4">
                {leftColumnItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-lg opacity-90">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Right column */}
              <ul className="space-y-4">
                {rightColumnItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-lg opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Bottom text */}
          <AnimateOnScroll delay={300}>
            <p className="font-serif text-xl md:text-2xl italic opacity-90">
              If you're ready to reclaim your energy, presence, and courage—let's talk.
            </p>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll delay={400}>
            <div className="mt-10">
              <a
                href="#connect"
                className="inline-flex items-center justify-center px-8 py-4 border border-secondary-foreground/30 text-secondary-foreground text-sm tracking-widest uppercase hover:bg-secondary-foreground/10 transition-all duration-300"
              >
                Start the Conversation
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default WhoIServeSection;
