
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertTriangle, AlertCircle, Download, Send } from "lucide-react";

interface FeedbackSectionProps {
  studentName: string;
  assignmentTitle: string;
  score: number;
  maxScore: number;
  feedback: {
    summary: string;
    strengths: string[];
    improvements: string[];
    rubricItems: Array<{
      criterion: string;
      score: number;
      maxScore: number;
      feedback: string;
    }>;
  };
}

const FeedbackSection = ({ 
  studentName,
  assignmentTitle,
  score,
  maxScore,
  feedback
}: FeedbackSectionProps) => {
  const percentage = Math.round((score / maxScore) * 100);
  
  // Calculate score status and color
  let scoreStatus;
  let scoreColor;
  
  if (percentage >= 85) {
    scoreStatus = "Excellent";
    scoreColor = "text-green-600";
  } else if (percentage >= 70) {
    scoreStatus = "Good";
    scoreColor = "text-blue-600";
  } else if (percentage >= 60) {
    scoreStatus = "Satisfactory";
    scoreColor = "text-yellow-600";
  } else {
    scoreStatus = "Needs Improvement";
    scoreColor = "text-red-600";
  }

  return (
    <div className="bg-white rounded-lg border shadow p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">{assignmentTitle}</h2>
          <p className="text-muted-foreground">Student: {studentName}</p>
        </div>
        
        <div className="flex flex-col items-center sm:items-end">
          <div className={`text-3xl font-bold ${scoreColor}`}>
            {score}/{maxScore} <span className="text-xl">({percentage}%)</span>
          </div>
          <Badge className={`${scoreColor} bg-opacity-10`} variant="outline">
            {scoreStatus}
          </Badge>
        </div>
      </div>
      
      <Tabs defaultValue="summary">
        <TabsList className="mb-4">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="rubric">Rubric Breakdown</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Feedback</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Overall Assessment</h3>
                <p className="text-foreground leading-relaxed">{feedback.summary}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {feedback.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 text-lg mr-2">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                    Areas for Improvement
                  </h3>
                  <ul className="space-y-2">
                    {feedback.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-500 text-lg mr-2">•</span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rubric">
          <Card>
            <CardContent className="pt-6 space-y-6">
              {feedback.rubricItems.map((item, index) => {
                const itemPercentage = Math.round((item.score / item.maxScore) * 100);
                
                let progressColor;
                if (itemPercentage >= 85) progressColor = "bg-green-500";
                else if (itemPercentage >= 70) progressColor = "bg-blue-500";
                else if (itemPercentage >= 60) progressColor = "bg-yellow-500";
                else progressColor = "bg-red-500";
                
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{item.criterion}</h3>
                      <div className="text-sm font-medium">
                        {item.score}/{item.maxScore} ({itemPercentage}%)
                      </div>
                    </div>
                    <Progress 
                      value={itemPercentage} 
                      className={progressColor} 
                    />
                    <p className="text-sm text-muted-foreground">{item.feedback}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="detailed">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-muted-foreground mr-2" />
                  <h3 className="text-lg font-medium">Detailed Feedback</h3>
                </div>
                
                <p className="text-foreground leading-relaxed">
                  The paper demonstrates a solid understanding of the subject matter, with clear arguments and well-structured paragraphs. The introduction effectively sets up the thesis, and the conclusion adequately summarizes the main points.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  There are several areas where citations could be improved to better support the arguments presented. The analysis in the middle section would benefit from more critical engagement with the source material.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Grammar and sentence structure are generally strong, though there are a few instances of run-on sentences that should be addressed. The vocabulary usage demonstrates good command of academic language appropriate for this level.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Overall, this is a competent paper that shows good understanding of the material and meets most of the requirements outlined in the rubric. With additional attention to citation and some structural refinements, this work could be further strengthened.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end space-x-4 pt-4">
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download Feedback
        </Button>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          Share with Student
        </Button>
      </div>
    </div>
  );
};

export default FeedbackSection;
