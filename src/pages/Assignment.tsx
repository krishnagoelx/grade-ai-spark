
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UploadSection from "@/components/assignment/UploadSection";
import StudentPaperList from "@/components/assignment/StudentPaperList";

const Assignment = () => {
  const { id } = useParams<{ id: string }>();
  const [assignment, setAssignment] = useState({
    id: id || "1",
    title: "Midterm Essay Analysis",
    description: "Literary analysis of The Great Gatsby",
    dueDate: "2025-04-20",
    instructions: "Students should analyze the themes, symbolism, and character development in The Great Gatsby. Essays should be 5-7 pages in length, double-spaced, and include at least 3 scholarly sources.",
    uploadInstructions: "Upload your rubric first, then upload student papers in PDF or Word format."
  });

  // Simulating assignment data fetching
  useEffect(() => {
    console.log(`Fetching assignment data for ID: ${id}`);
    // In a real app, fetch assignment data from API
  }, [id]);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <Button variant="ghost" size="sm" asChild className="mr-2">
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{assignment.title}</h1>
              <p className="text-muted-foreground mt-1">{assignment.description}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              Due: {new Date(assignment.dueDate).toLocaleDateString()}
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList>
            <TabsTrigger value="upload">Upload & Grade</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="details">Assignment Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="space-y-8">
            <UploadSection assignmentId={assignment.id} />
          </TabsContent>
          
          <TabsContent value="results">
            <StudentPaperList />
          </TabsContent>
          
          <TabsContent value="details">
            <div className="bg-white rounded-lg border shadow-sm p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Assignment Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-base font-medium mb-2">Title</h3>
                    <p>{assignment.title}</p>
                  </div>
                  <div>
                    <h3 className="text-base font-medium mb-2">Due Date</h3>
                    <p>{new Date(assignment.dueDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-2">Description</h3>
                <p>{assignment.description}</p>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-2">Instructions for Students</h3>
                <p>{assignment.instructions}</p>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-2">Upload Instructions</h3>
                <p>{assignment.uploadInstructions}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
};

export default Assignment;
