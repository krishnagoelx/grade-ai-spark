
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardStats from "@/components/dashboard/DashboardStats";
import AssignmentCard, { Assignment } from "@/components/dashboard/AssignmentCard";
import CreateAssignmentForm from "@/components/dashboard/CreateAssignmentForm";
import { PlusCircle } from "lucide-react";

const mockAssignments: Assignment[] = [
  {
    id: "1",
    title: "Midterm Essay Analysis",
    description: "Literary analysis of The Great Gatsby",
    dueDate: "2025-04-20",
    status: "active",
    studentCount: 28,
    submissionCount: 20,
    gradedCount: 12
  },
  {
    id: "2",
    title: "Research Paper Draft",
    description: "First draft of semester research paper",
    dueDate: "2025-05-10",
    status: "active",
    studentCount: 32,
    submissionCount: 15,
    gradedCount: 10
  },
  {
    id: "3",
    title: "Final Exam Essays",
    description: "In-class timed essays on course themes",
    dueDate: "2025-06-15",
    status: "draft",
    studentCount: 30,
    submissionCount: 0,
    gradedCount: 0
  },
  {
    id: "4",
    title: "Critical Response",
    description: "Analysis of historical perspectives",
    dueDate: "2025-04-05",
    status: "completed",
    studentCount: 28,
    submissionCount: 26,
    gradedCount: 26
  }
];

const Dashboard = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [activeAssignments, setActiveAssignments] = useState<Assignment[]>(
    mockAssignments.filter(a => a.status === "active")
  );
  const [draftAssignments, setDraftAssignments] = useState<Assignment[]>(
    mockAssignments.filter(a => a.status === "draft")
  );
  const [completedAssignments, setCompletedAssignments] = useState<Assignment[]>(
    mockAssignments.filter(a => a.status === "completed")
  );

  return (
    <>
      <Navbar isLoggedIn={true} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your assignments and review grading status
          </p>
        </header>
        
        <section className="mb-10">
          <DashboardStats />
        </section>
        
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Assignments</h2>
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              <PlusCircle className="h-4 w-4 mr-2" />
              New Assignment
            </Button>
          </div>
          
          <Tabs defaultValue="active" className="space-y-6">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="active">
              {activeAssignments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeAssignments.map((assignment) => (
                    <AssignmentCard key={assignment.id} assignment={assignment} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">No active assignments</h3>
                  <p className="text-muted-foreground mb-4">
                    Create a new assignment to get started
                  </p>
                  <Button onClick={() => setIsCreateDialogOpen(true)}>
                    Create Assignment
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="drafts">
              {draftAssignments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {draftAssignments.map((assignment) => (
                    <AssignmentCard key={assignment.id} assignment={assignment} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">No draft assignments</h3>
                  <p className="text-muted-foreground">
                    Draft assignments appear here before they're published
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="completed">
              {completedAssignments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedAssignments.map((assignment) => (
                    <AssignmentCard key={assignment.id} assignment={assignment} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">No completed assignments</h3>
                  <p className="text-muted-foreground">
                    Assignments that have been fully graded will appear here
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
      
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[550px] p-0">
          <CreateAssignmentForm onClose={() => setIsCreateDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
