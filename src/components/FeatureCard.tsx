
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive?: boolean;
}

const FeatureCard = ({ title, description, icon: Icon, isActive = false }: FeatureCardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-md border hover:shadow-lg transition-all duration-300 ${
        isActive ? 'border-primary/50 shadow-lg transform -translate-y-1' : 'border-transparent'
      }`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
        isActive ? 'bg-primary/20' : 'bg-primary/10'
      }`}>
        <Icon className={`h-6 w-6 transition-colors duration-300 ${
          isActive ? 'text-primary' : 'text-primary/80'
        }`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
