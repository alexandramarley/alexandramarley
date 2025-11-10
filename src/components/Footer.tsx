import { Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mb-16 md:mb-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Alexandra Marley - All rights reserved.</p>

          {/* Subtle contact links */}
          <div className="mt-3 md:mt-0">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:info@alexandramarley.com"
                className="hover:text-primary transition-colors text-muted-foreground"
                aria-label="Email Alexandra Marley"
                title="Email"
              >
                <Mail size={16} />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alexandra-marley-252ba7172"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-muted-foreground"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={16} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/alexandramarley_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-muted-foreground"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram size={16} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
