import { useState, useEffect } from "react";
import { Sparkles, Target, TrendingUp } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show content after a brief delay
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start fade out
          setTimeout(() => {
            setFadeOut(true);
            // Complete after fade animation
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-white transition-opacity duration-800 ${
      fadeOut ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Main Content */}
      <div className={`h-full flex flex-col items-center justify-center px-4 transition-all duration-1000 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Logo/Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-3 md:mb-4">
            وكالة دسر الإعلانية
          </h1>
          <h2 className="text-lg sm:text-xl md:text-3xl font-light text-gray-700 mb-2 md:mb-3">
            Dussur Advertising Agency
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500">
            حملنه على ذات ألواح و دسر
          </p>
        </div>

        {/* Loading Icons */}
        <div className="flex justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
          <div className="animate-bounce delay-100">
            <Sparkles className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 text-gray-400" />
          </div>
          <div className="animate-bounce delay-200">
            <Target className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 text-gray-600" />
          </div>
          <div className="animate-bounce delay-300">
            <TrendingUp className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 text-gray-800" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 sm:w-64 md:w-80 mx-auto mb-3 md:mb-4">
          <div className="bg-gray-200 rounded-full h-1.5 md:h-2 overflow-hidden">
            <div 
              className="bg-black h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 