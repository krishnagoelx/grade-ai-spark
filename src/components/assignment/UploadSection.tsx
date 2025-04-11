
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadSection = ({ assignmentId }: { assignmentId: string }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [rubricFile, setRubricFile] = useState<File | null>(null);
  const [paperFiles, setPaperFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleRubricUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setRubricFile(e.target.files[0]);
    }
  };

  const handlePapersUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPaperFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = () => {
    if (!rubricFile) {
      toast({
        title: "Missing Rubric",
        description: "Please upload a rubric before proceeding.",
        variant: "destructive",
      });
      return;
    }

    if (paperFiles.length === 0) {
      toast({
        title: "Missing Papers",
        description: "Please upload at least one student paper.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    // Simulate upload and processing
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Upload Successful",
        description: `${paperFiles.length} papers have been uploaded and will be processed.`,
      });
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Files</h2>
      
      <Tabs defaultValue="rubric">
        <TabsList className="mb-4">
          <TabsTrigger value="rubric">Rubric Upload</TabsTrigger>
          <TabsTrigger value="papers">Student Papers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="rubric">
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-8 text-center bg-muted/30">
              <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Upload Rubric</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Upload your rubric or marking scheme in PDF or Word format
              </p>
              <div className="flex justify-center">
                <Label htmlFor="rubric-upload" className="cursor-pointer">
                  <div className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                    Select Rubric
                  </div>
                  <input
                    id="rubric-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleRubricUpload}
                  />
                </Label>
              </div>
              {rubricFile && (
                <div className="mt-4 p-2 bg-primary/5 rounded flex items-center justify-between">
                  <span className="text-sm font-medium">{rubricFile.name}</span>
                  <button
                    className="text-sm text-destructive"
                    onClick={() => setRubricFile(null)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="papers">
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-8 text-center bg-muted/30">
              <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Upload Student Papers</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Upload student papers in PDF or Word format (up to 50 at once)
              </p>
              <div className="flex justify-center">
                <Label htmlFor="papers-upload" className="cursor-pointer">
                  <div className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                    Select Papers
                  </div>
                  <input
                    id="papers-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    className="hidden"
                    onChange={handlePapersUpload}
                  />
                </Label>
              </div>
              {paperFiles.length > 0 && (
                <div className="mt-4 text-left">
                  <div className="text-sm font-medium mb-2">
                    {paperFiles.length} file(s) selected
                  </div>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {paperFiles.map((file, index) => (
                      <div key={index} className="p-2 bg-primary/5 rounded flex items-center justify-between">
                        <span className="text-sm truncate max-w-[240px]">{file.name}</span>
                        <button
                          className="text-sm text-destructive flex-shrink-0"
                          onClick={() => {
                            const newFiles = [...paperFiles];
                            newFiles.splice(index, 1);
                            setPaperFiles(newFiles);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 flex justify-end">
        <Button 
          onClick={handleSubmit} 
          disabled={isUploading || !rubricFile || paperFiles.length === 0}
          className="flex items-center"
        >
          {isUploading ? "Processing..." : "Begin Grading"}
        </Button>
      </div>
    </div>
  );
};

export default UploadSection;
