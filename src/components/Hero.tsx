
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span>Grade papers with </span>
              <span className="gradient-text">AI-powered precision</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Save countless hours by automating paper grading with AI that provides consistent, detailed feedback for your students.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">Upload rubrics and student papers</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">Get AI-generated feedback and scores</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">Share detailed assessments with students</p>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/dashboard">Try for Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/#demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-2xl p-1">
              <div className="bg-background rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="GradeAI Dashboard" 
                  className="w-full h-auto"
                  style={{ minHeight: "300px", objectFit: "cover" }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
