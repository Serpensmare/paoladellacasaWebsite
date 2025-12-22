import { Quote } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Paola guided me towards a clear understanding of my situation, to embody it and be able to navigate it. This made all the difference in how I approached this particular challenge and its outcome. For this I am grateful.",
      name: "Andres Cruz Quijano",
      title: "Catalyst, Editor in Entrepreneurship & VC Fund Manager",
      initials: "AC",
    },
    {
      quote: "From our very first session, Paola created a safe, welcoming, and non-judgmental environment. Her ability to pinpoint underlying issues and provide effective strategies was truly remarkable. I cannot speak highly enough of her dedication, expertise, and compassion.",
      name: "Maika Gonzalez Robaina",
      title: "Marketing Professional",
      initials: "MG",
    },
  ];

  return (
    <section id="impact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <AnimateOnScroll>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
              Testimonials
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Words from Those I've Worked With
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.name} delay={200 + index * 100}>
              <div className="bg-card p-8 md:p-10 lg:p-12 shadow-lg border border-border/50 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary/30" strokeWidth={1} />
                </div>

                {/* Quote text */}
                <blockquote className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  {/* Photo placeholder */}
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-lg text-primary">
                      {testimonial.initials}
                    </span>
                  </div>
                  
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
