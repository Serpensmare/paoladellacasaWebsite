const IntroSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
            A 35-Year Journey of Embodied Transformation
          </h2>
          
          {/* Body text */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Since 1988, I've dedicated myself to understanding the depths of somatic wisdom—not just as theory, but as lived experience. Today, I guide leaders to release what no longer serves them and reclaim their full vitality.
          </p>
          
          {/* Gold divider */}
          <div className="mt-12 md:mt-16 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
