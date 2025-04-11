
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ isLoggedIn = false }: { isLoggedIn?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">G</div>
              <span className="text-xl font-bold gradient-text">GradeAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
            <Link to="/#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</Link>
            <Link to="/#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</Link>
            {isLoggedIn ? (
              <Link to="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <div className="flex space-x-4">
                <Button variant="outline">Log In</Button>
                <Button>Sign Up</Button>
              </div>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-foreground hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#features" 
              className="block px-3 py-2 text-foreground hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#pricing" 
              className="block px-3 py-2 text-foreground hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            {isLoggedIn ? (
              <Link 
                to="/dashboard" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">Dashboard</Button>
              </Link>
            ) : (
              <div className="space-y-2 pt-2">
                <Button variant="outline" className="w-full">Log In</Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
