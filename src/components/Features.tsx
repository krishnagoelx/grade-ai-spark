
import { useState } from "react";
import FeatureCard from "./FeatureCard";
import { ClockIcon, LineChart, Zap, Shield, Sparkles, BarChart4 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "Save Time",
      description: "Reduce grading time by up to 70% with automated assessment powered by AI that understands your rubric perfectly.",
      icon: ClockIcon,
    },
    {
      title: "Consistent Grading",
      description: "Eliminate bias and inconsistency with standardized AI evaluation that maintains your exact grading standards across all papers.",
      icon: BarChart4,
    },
    {
      title: "Detailed Feedback",
      description: "Provide rich, constructive feedback to help students improve, with AI that learns your feedback style and tone.",
      icon: LineChart,
    },
    {
      title: "Easy Integration",
      description: "Works with your existing workflows and tools with minimal setup. Import from and export to popular LMS platforms in seconds.",
      icon: Zap,
    },
    {
      title: "Privacy Focused",
      description: "Your data is encrypted and secure, with strict access controls. Student papers never leave our secure processing environment.",
      icon: Shield,
    },
    {
      title: "Smart Analytics",
      description: "Gain insights into student performance and identify areas for improvement with detailed analytics dashboards.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Why Teachers Trust Us
          </div>
          <h2 className="text-3xl font-bold mb-4">Features Designed for Modern Educators</h2>
          <p className="text-muted-foreground text-lg">
            Our AI learns your unique grading style and applies it consistently across all student papers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transition-all duration-300"
              onMouseEnter={() => setActiveFeature(index)}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isActive={activeFeature === index}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto mb-8 bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Why Our AI Grading Is Better</h3>
            <p className="text-muted-foreground mb-4">
              Unlike basic AI tools, GradeAI learns from your feedback and adapts to your unique grading style, 
              providing remarkably accurate assessments that feel like they came directly from you.
            </p>
            <Button asChild>
              <a href="#workflow">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
