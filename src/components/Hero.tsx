import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Search } from "lucide-react";
import heroImage from "@/assets/luxury-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury mansion with infinity pool" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your
            <span className="block text-secondary"> Dream Estate</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience luxury living with our curated collection of premium properties in the world's most prestigious locations.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Enter location or property type"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-smooth"
                />
              </div>
              <Button variant="gold" size="lg" className="px-8">
                <Search className="w-5 h-5 mr-2" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="elegant" size="lg" className="px-8">
              View Collections
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-8 text-center animate-float">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-secondary">500+</div>
            <div className="text-sm text-white/80">Premium Properties</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-secondary">50+</div>
            <div className="text-sm text-white/80">Elite Locations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-secondary">98%</div>
            <div className="text-sm text-white/80">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};