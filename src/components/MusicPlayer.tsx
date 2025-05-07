
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-music-dark border-t border-gray-800 p-4 z-40">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Song info */}
          <div className="flex items-center flex-shrink-0 w-full md:w-auto">
            <div className="w-14 h-14 rounded bg-gray-800 mr-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop" 
                alt="Current track" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mr-4">
              <h4 className="text-white font-medium truncate">Urban Rhythms</h4>
              <p className="text-gray-400 text-sm truncate">DJ Metropolis</p>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex-grow flex flex-col items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Shuffle className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipBack className="w-5 h-5" />
              </button>
              <button className="bg-music-purple hover:bg-music-med-purple text-white rounded-full p-2 transition-colors">
                <Play className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipForward className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Repeat className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 w-full max-w-3xl">
              <span className="text-xs text-gray-400">1:24</span>
              <Slider
                defaultValue={[30]}
                max={100}
                step={1}
                className="w-full"
              />
              <span className="text-xs text-gray-400">4:12</span>
            </div>
          </div>
          
          {/* Volume */}
          <div className="hidden md:flex items-center gap-2 w-32">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <Slider
              defaultValue={[70]}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
