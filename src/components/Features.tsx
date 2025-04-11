
import FeatureCard from "./FeatureCard";
import { ClockIcon, LineChart, Zap, Shield, Sparkles, BarChart4 } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Save Time",
      description: "Reduce grading time by up to 70% with automated assessment powered by AI.",
      icon: ClockIcon,
    },
    {
      title: "Consistent Grading",
      description: "Eliminate bias and inconsistency with standardized AI evaluation.",
      icon: BarChart4,
    },
    {
      title: "Detailed Feedback",
      description: "Provide rich, constructive feedback to help students improve.",
      icon: LineChart,
    },
    {
      title: "Easy Integration",
      description: "Works with your existing workflows and tools with minimal setup.",
      icon: Zap,
    },
    {
      title: "Privacy Focused",
      description: "Your data is encrypted and secure, with strict access controls.",
      icon: Shield,
    },
    {
      title: "Smart Analytics",
      description: "Gain insights into student performance and identify areas for improvement.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Features Designed for Educators</h2>
          <p className="text-muted-foreground text-lg">
            Our platform streamlines the grading process, saving you time while providing valuable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
