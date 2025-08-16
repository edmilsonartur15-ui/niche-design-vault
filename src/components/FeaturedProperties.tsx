import { PropertyCard } from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export const FeaturedProperties = () => {
  const properties = [
    {
      image: property1,
      title: "Modern Penthouse Suite",
      location: "Manhattan, New York",
      price: "$3,250,000",
      beds: 3,
      baths: 3,
      sqft: "2,400 sqft",
      type: "Penthouse"
    },
    {
      image: property2,
      title: "Luxury City Residence",
      location: "Downtown, San Francisco",
      price: "$2,850,000",
      beds: 4,
      baths: 3,
      sqft: "3,200 sqft",
      type: "Apartment"
    },
    {
      image: property3,
      title: "Oceanfront Villa Paradise",
      location: "Malibu, California",
      price: "$8,750,000",
      beds: 6,
      baths: 5,
      sqft: "5,800 sqft",
      type: "Villa"
    }
  ];

  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
            Featured <span className="text-secondary">Properties</span>
          </h2>
          <p className="text-xl text-luxury-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties, each offering unparalleled luxury, 
            stunning architecture, and prime locations in the world's most desirable neighborhoods.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {properties.map((property, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-luxury text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-luxury transition-all duration-luxury">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};