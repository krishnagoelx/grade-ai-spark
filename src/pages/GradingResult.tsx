
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackSection from "@/components/grading/FeedbackSection";
import DocumentPreview from "@/components/grading/DocumentPreview";

const mockFeedback = {
  summary: "This paper demonstrates a good understanding of the primary themes in The Great Gatsby, with well-structured arguments and appropriate textual evidence. There are some areas for improvement in analysis depth and citation formatting.",
  strengths: [
    "Clearly identifies and explains the major themes of wealth and social class",
    "Well-organized structure with logical flow between paragraphs",
    "Effectively incorporates textual evidence to support claims",
    "Strong conclusion that ties the analysis back to the thesis"
  ],
  improvements: [
    "Deeper analysis of symbolism would strengthen the argument",
    "More critical engagement with secondary sources",
    "Some inconsistencies in citation formatting",
    "Several grammatical errors that should be addressed"
  ],
  rubricItems: [
    {
      criterion: "Thesis & Argument",
      score: 18,
      maxScore: 20,
      feedback: "Clear thesis that guides the paper, but could be more specific about main arguments."
    },
    {
      criterion: "Evidence & Analysis",
      score: 22,
      maxScore: 30,
      feedback: "Good use of textual evidence, but analysis could go deeper in connecting to broader themes."
    },
    {
      criterion: "Organization & Structure",
      score: 15,
      maxScore: 15,
      feedback: "Excellent organization with clear transitions between sections."
    },
    {
      criterion: "Style & Mechanics",
      score: 12,
      maxScore: 15,
      feedback: "Generally good writing style, but several grammatical errors throughout."
    },
    {
      criterion: "Citations & Formatting",
      score: 10,
      maxScore: 15,
      feedback: "Inconsistent citation format and some missing page numbers."
    },
    {
      criterion: "Overall Quality",
      score: 5,
      maxScore: 5,
      feedback: "Shows solid understanding of the material and meets assignment requirements."
    }
  ]
};

const GradingResult = () => {
  const { id } = useParams<{ id: string }>();
  const [paperData, setPaperData] = useState({
    id: id || "p1",
    studentName: "Emma Johnson",
    assignmentTitle: "Midterm Essay Analysis",
    fileName: "emma_johnson_essay.pdf",
    score: 82,
    maxScore: 100,
    feedback: mockFeedback
  });

  // Simulating data fetching
  useEffect(() => {
    console.log(`Fetching grading results for paper ID: ${id}`);
    // In a real app, fetch paper data from API
  }, [id]);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold">Grading Results</h1>
          <p className="text-muted-foreground mt-1">
            Review AI-generated feedback and assessment
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <FeedbackSection 
              studentName={paperData.studentName}
              assignmentTitle={paperData.assignmentTitle}
              score={paperData.score}
              maxScore={paperData.maxScore}
              feedback={paperData.feedback}
            />
          </div>
          
          <div className="h-[800px]">
            <DocumentPreview />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GradingResult;
