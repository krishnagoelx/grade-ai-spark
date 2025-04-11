
import { Step1Icon, Step2Icon, Step3Icon, Step4Icon } from "./StepIcons";

const WorkflowSteps = () => {
  return (
    <section className="py-20 bg-muted/50" id="workflow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How GradeAI Works</h2>
          <p className="text-muted-foreground text-lg">
            Our simple four-step process makes grading papers faster and more consistent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="mx-auto w-16 h-16 mb-4 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Step1Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Upload Rubric</h3>
            <p className="text-muted-foreground">Upload your rubric or marking scheme that outlines assessment criteria.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="mx-auto w-16 h-16 mb-4 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Step2Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Upload Papers</h3>
            <p className="text-muted-foreground">Submit student papers individually or in batch for AI assessment.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="mx-auto w-16 h-16 mb-4 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Step3Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. AI Analysis</h3>
            <p className="text-muted-foreground">Our AI analyzes papers against the rubric to generate scores and feedback.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="mx-auto w-16 h-16 mb-4 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Step4Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Share Results</h3>
            <p className="text-muted-foreground">Review and share detailed feedback with your students with one click.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
