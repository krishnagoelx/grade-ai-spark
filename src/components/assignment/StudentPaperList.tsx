
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Eye, Download, Share2 } from "lucide-react";

interface StudentPaper {
  id: string;
  studentName: string;
  fileName: string;
  uploadDate: string;
  status: "pending" | "grading" | "completed";
  score?: number;
}

const mockPapers: StudentPaper[] = [
  {
    id: "p1",
    studentName: "Emma Johnson",
    fileName: "emma_johnson_essay.pdf",
    uploadDate: "2025-04-10",
    status: "completed",
    score: 92
  },
  {
    id: "p2",
    studentName: "Carlos Rodriguez",
    fileName: "rodriguez_midterm.pdf",
    uploadDate: "2025-04-10",
    status: "completed",
    score: 78
  },
  {
    id: "p3",
    studentName: "Sarah Ahmed",
    fileName: "sarah_ahmed_paper.pdf",
    uploadDate: "2025-04-09",
    status: "grading"
  },
  {
    id: "p4",
    studentName: "Liu Wei",
    fileName: "liu_analysis.pdf",
    uploadDate: "2025-04-09",
    status: "pending"
  }
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  grading: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800"
};

const studentPaperStatusText = {
  pending: "Pending",
  grading: "Processing",
  completed: "Graded"
};

const StudentPaperList = () => {
  const [papers] = useState<StudentPaper[]>(mockPapers);

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Student Papers</h2>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>File</TableHead>
              <TableHead>Uploaded</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Score</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {papers.map((paper) => (
              <TableRow key={paper.id}>
                <TableCell className="font-medium">{paper.studentName}</TableCell>
                <TableCell className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="truncate max-w-[150px]">{paper.fileName}</span>
                </TableCell>
                <TableCell>{new Date(paper.uploadDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge className={statusColors[paper.status]} variant="outline">
                    {studentPaperStatusText[paper.status]}
                  </Badge>
                </TableCell>
                <TableCell>
                  {paper.score ? `${paper.score}%` : "-"}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {paper.status === "completed" && (
                      <>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/results/${paper.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            <span>View</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          <span>Download</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          <span>Share</span>
                        </Button>
                      </>
                    )}
                    {paper.status === "grading" && (
                      <Button variant="outline" size="sm" disabled>
                        Processing...
                      </Button>
                    )}
                    {paper.status === "pending" && (
                      <Button variant="outline" size="sm" disabled>
                        Awaiting Processing
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentPaperList;
