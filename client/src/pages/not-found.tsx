import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-cursive text-tan-dark mb-6">Page Not Found</h1>
            
            <div className="h-px w-24 bg-soft-pink/50 mx-auto mb-8"></div>
            
            <p className="text-lg text-charcoal/80 mb-12">
              We couldn't find the page you're looking for. It might have been moved, 
              renamed, or may not exist anymore.
            </p>
            
            <Link href="/">
              <span className="inline-flex items-center text-soft-pink hover:text-soft-pink/80 transition-colors cursor-pointer font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Homepage
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
