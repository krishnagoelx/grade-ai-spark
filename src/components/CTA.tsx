
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to transform your grading process?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of educators who are saving time and providing better feedback with GradeAI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/dashboard">Start Your Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm opacity-80">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
