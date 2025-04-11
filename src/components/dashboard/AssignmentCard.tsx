
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Calendar, Users, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "draft" | "active" | "completed";
  studentCount: number;
  submissionCount: number;
  gradedCount: number;
}

interface AssignmentCardProps {
  assignment: Assignment;
}

const AssignmentCard = ({ assignment }: AssignmentCardProps) => {
  const statusColors = {
    draft: "bg-muted text-muted-foreground",
    active: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800"
  };

  const progressPercent = assignment.submissionCount > 0 
    ? Math.round((assignment.gradedCount / assignment.submissionCount) * 100) 
    : 0;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <Badge className={statusColors[assignment.status]} variant="outline">
            {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
          </Badge>
          <span className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(assignment.dueDate).toLocaleDateString()}
          </span>
        </div>
        <CardTitle className="text-xl mt-2">{assignment.title}</CardTitle>
        <CardDescription>{assignment.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mt-2 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-1.5" />
              Students
            </span>
            <span>{assignment.studentCount}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-muted-foreground">
              <FileText className="h-4 w-4 mr-1.5" />
              Submissions
            </span>
            <span>{assignment.submissionCount} / {assignment.studentCount}</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Grading Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild className="w-full">
          <Link to={`/assignment/${assignment.id}`}>
            <span className="mr-2">Manage</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AssignmentCard;
