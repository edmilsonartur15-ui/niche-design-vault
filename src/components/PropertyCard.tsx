import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
}

export const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  beds, 
  baths, 
  sqft, 
  type 
}: PropertyCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-luxury hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-luxury group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="icon" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
            <Heart className="w-5 h-5" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-luxury"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="text-2xl font-bold text-luxury-navy mb-2">{price}</div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{sqft}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="luxury" className="flex-1">
            View Details
          </Button>
          <Button variant="outline" size="default">
            Schedule Tour
          </Button>
        </div>
      </div>
    </div>
  );
};