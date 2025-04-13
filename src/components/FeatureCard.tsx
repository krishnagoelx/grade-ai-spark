
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive?: boolean;
}

const FeatureCard = ({ title, description, icon: Icon, isActive = false }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-md border transition-all duration-300 ${
        isActive || isHovered ? 'border-primary/50 shadow-lg transform -translate-y-1' : 'border-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
        isActive || isHovered ? 'bg-primary/20' : 'bg-primary/10'
      }`}>
        <Icon className={`h-6 w-6 transition-colors duration-300 ${
          isActive || isHovered ? 'text-primary' : 'text-primary/80'
        }`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      {(isActive || isHovered) && (
        <div className="h-1 w-16 bg-primary/60 mt-4 rounded-full transition-all duration-300"></div>
      )}
    </div>
  );
};

export default FeatureCard;
