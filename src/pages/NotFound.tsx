import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-6 animate-fade-in">
          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-gradient glow-effect animate-glow">
            404
          </h1>
          
          {/* Message */}
          <h2 className="text-2xl md:text-3xl text-white font-semibold mt-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate('/')}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 flex items-center gap-2"
            >
              <Home size={20} />
              <span className="relative z-10">Go Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => navigate(-1)}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105 flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
