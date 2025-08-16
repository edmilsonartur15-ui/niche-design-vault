import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              Elite<span className="text-secondary">Estate</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-white hover:text-secondary transition-smooth">
              Properties
            </a>
            <a href="#locations" className="text-white hover:text-secondary transition-smooth">
              Locations
            </a>
            <a href="#services" className="text-white hover:text-secondary transition-smooth">
              Services
            </a>
            <a href="#about" className="text-white hover:text-secondary transition-smooth">
              About
            </a>
            <a href="#contact" className="text-white hover:text-secondary transition-smooth">
              Contact
            </a>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@eliteestate.com</span>
              </div>
            </div>
            <Button variant="gold" size="sm">
              Book Viewing
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};