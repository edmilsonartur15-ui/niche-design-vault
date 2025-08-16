import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-luxury-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-6">
              Elite<span className="text-secondary">Estate</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Your premier destination for luxury real estate. We specialize in connecting discerning clients 
              with exceptional properties in the world's most prestigious locations.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/10 p-3 rounded-xl hover:bg-secondary transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-white/10 p-3 rounded-xl hover:bg-secondary transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-white/10 p-3 rounded-xl hover:bg-secondary transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="bg-white/10 p-3 rounded-xl hover:bg-secondary transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#properties" className="text-white/80 hover:text-secondary transition-colors">Properties</a></li>
              <li><a href="#locations" className="text-white/80 hover:text-secondary transition-colors">Locations</a></li>
              <li><a href="#services" className="text-white/80 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#careers" className="text-white/80 hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <div>123 Luxury Avenue</div>
                  <div>Beverly Hills, CA 90210</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">hello@eliteestate.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 mb-4 md:mb-0">
            © 2024 EliteEstate. All rights reserved.
          </div>
          <div className="flex space-x-6 text-white/60">
            <a href="#privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-secondary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};