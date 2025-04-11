
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from "lucide-react";
import { useState } from "react";

const DocumentPreview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const totalPages = 5; // Mock value
  
  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 25);
    }
  };
  
  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 25);
    }
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow h-full flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-semibold">Document Preview</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm">{zoomLevel}%</span>
          <Button variant="outline" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto p-4 bg-gray-100">
        <div 
          className="mx-auto bg-white shadow-md"
          style={{ 
            width: `${8.5 * zoomLevel / 100}in`, 
            height: `${11 * zoomLevel / 100}in`, 
            maxWidth: '100%'
          }}
        >
          {/* Placeholder for document content */}
          <div className="h-full flex items-center justify-center p-8">
            <div className="space-y-4 w-full">
              <div className="text-center mb-6">
                <h1 className="text-xl font-bold mb-2">Analysis of Climate Change Policy</h1>
                <p className="text-sm text-muted-foreground">By Student Name</p>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-10/12"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
              </div>
              
              <h2 className="text-lg font-semibold">Introduction</h2>
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-10/12"></div>
              </div>
              
              <h2 className="text-lg font-semibold">Methodology</h2>
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
              </div>
              
              <h2 className="text-lg font-semibold">Results</h2>
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-10/12"></div>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t flex justify-between items-center">
        <Button 
          variant="outline" 
          size="sm"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default DocumentPreview;
