import { Shield, Key, TrendingUp, Users, Home, Award } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Property Consultation",
      description: "Expert guidance to find your perfect luxury property tailored to your lifestyle and investment goals."
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Exclusive Access",
      description: "First access to off-market properties and exclusive listings not available to the general public."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment Advisory",
      description: "Strategic investment advice backed by market analysis and years of luxury real estate expertise."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal & Financial Support",
      description: "Comprehensive legal and financial assistance throughout your property acquisition journey."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Concierge Services",
      description: "White-glove concierge services to handle every detail of your luxury property experience."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Portfolio Management",
      description: "Professional portfolio management services to maximize your luxury real estate investments."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
            Premium <span className="text-secondary">Services</span>
          </h2>
          <p className="text-xl text-luxury-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled service excellence with our comprehensive suite of luxury real estate services, 
            designed to exceed your expectations at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-all duration-luxury hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-smooth">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-luxury-navy mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-luxury-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-luxury rounded-3xl p-12 text-white animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience Luxury?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Let our expert team help you discover your dream property today.
          </p>
          <button className="bg-secondary text-luxury-navy px-8 py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-gold transition-all duration-luxury">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};