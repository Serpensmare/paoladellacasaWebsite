import AnimateOnScroll from './AnimateOnScroll';

const ClosingStatement = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative quote mark */}
            <div className="mb-8">
              <span className="font-serif text-6xl md:text-8xl text-secondary-foreground/20 leading-none">
                "
              </span>
            </div>
            
            {/* Quote */}
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 text-secondary-foreground/95">
              My Joy of Living reflects in everything I do. I've learned to better manage life's ups and downs—and I'm here to help you do the same.
            </blockquote>
            
            {/* Attribution */}
            <p className="font-serif text-xl italic text-accent">
              — Paola
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ClosingStatement;
