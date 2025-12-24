import { useState } from 'react';
import { Mail, Linkedin, MapPin, Globe, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AnimateOnScroll from './AnimateOnScroll';

const ConnectSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: Mail,
      label: 'P.dellacasa@hotmail.com',
      href: 'mailto:P.dellacasa@hotmail.com',
      external: false,
    },
    {
      icon: Linkedin,
      label: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/paoladellacasa/',
      external: true,
    },
    {
      icon: MapPin,
      label: 'Geneva, Switzerland',
      href: null,
      external: false,
    },
    {
      icon: Globe,
      label: 'Available online & in-person globally',
      href: null,
      external: false,
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.trim().length > 255) {
      newErrors.email = 'Email must be less than 255 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully",
      description: "Thank you for reaching out. Paola will be in touch soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="connect" className="py-24 md:py-32 bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <AnimateOnScroll>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
              Connect
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Let's Begin Your Journey
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to reclaim your energy, presence, and joy? I'd love to connect.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimateOnScroll delay={300}>
            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-foreground mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center border border-border rounded-full group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                      <item.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary hover-underline transition-colors duration-300"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional note */}
              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're seeking individual coaching, curious about my approach, or exploring a speaking engagement—I welcome your message.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll delay={400}>
            <div className="bg-card p-8 md:p-10 border border-border shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    Thank You
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. I'll be in touch soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm tracking-widest uppercase text-primary hover-underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border ${errors.name ? 'border-destructive' : 'border-border'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border ${errors.email ? 'border-destructive' : 'border-border'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-background border ${errors.message ? 'border-destructive' : 'border-border'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none`}
                      placeholder="Tell me what brings you here..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
