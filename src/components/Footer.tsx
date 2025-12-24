import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Approach', href: '#approach' },
    { label: 'Impact', href: '#impact' },
    { label: 'Connect', href: '#connect' },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground">
              Paola della Casa
            </h2>
            <p className="text-sm text-muted-foreground tracking-wide">
              Somatic Coach | SE & NARM Facilitator
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs pt-2">
              Supporting leaders in reconnecting with their bodies and reclaiming their innate capacity for healing.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Navigation
            </h3>
            <nav aria-label="Footer navigation" className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary hover-underline inline-block w-fit transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Location & Social */}
          <div className="space-y-6">
            <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Connect
            </h3>
            <address className="space-y-3 text-foreground/80 not-italic">
              <p>Based in Geneva, Switzerland</p>
              <p>Working globally, online & in-person</p>
            </address>
            
            {/* Social Links */}
            <div className="pt-4">
              <a
                href="https://www.linkedin.com/in/paoladellacasa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 border border-border rounded-full text-foreground/60 hover:text-primary hover:border-primary transition-all duration-300 touch-target"
                aria-label="Connect with Paola on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Paola della Casa. All rights reserved.</p>
            <p className="text-xs tracking-wide">
              Crafted with intention & care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
