
import React from 'react';
import { Button } from "@/components/ui/button";
import { Music2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-music-dark to-music-background pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-music-purple/20 to-music-dark opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-music-background to-transparent"></div>
        
        {/* Abstract music-themed background elements */}
        <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-music-purple/20 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/3 w-80 h-80 rounded-full bg-music-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
            Your Music <span className="text-transparent bg-clip-text bg-gradient-to-r from-music-purple to-music-accent">Universe</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-music-purple hover:bg-music-med-purple text-white">
              <Music2 className="mr-2 h-5 w-5" />
              Start Listening
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Browse Collections
            </Button>
          </div>
          
          {/* Music wave animation */}
          <div className="mt-16 flex items-end h-12">
            <div className="music-wave h-4 animate-wave-1"></div>
            <div className="music-wave h-8 animate-wave-2"></div>
            <div className="music-wave h-6 animate-wave-3"></div>
            <div className="music-wave h-10 animate-wave-4"></div>
            <div className="music-wave h-5 animate-wave-2"></div>
            <div className="music-wave h-8 animate-wave-3"></div>
            <div className="music-wave h-4 animate-wave-1"></div>
            <div className="music-wave h-12 animate-wave-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
