
import React, { useState, useRef, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Sample track data
const tracks = [
  {
    id: 1,
    title: "Urban Rhythms",
    artist: "DJ Metropolis",
    src: "https://storage.googleapis.com/lovable-media/urban_rhythm_sample.mp3",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Midnight Dreams",
    artist: "Luna Waves",
    src: "https://storage.googleapis.com/lovable-media/midnight_dreams_sample.mp3",
    img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop"
  }
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Update duration when track changes
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        if (audioRef.current) setDuration(audioRef.current.duration);
      });
      
      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
      });
      
      audioRef.current.addEventListener('ended', () => {
        nextTrack();
      });
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadedmetadata', () => {});
        audioRef.current.removeEventListener('timeupdate', () => {});
        audioRef.current.removeEventListener('ended', () => {});
      }
    };
  }, [currentTrack]);
  
  useEffect(() => {
    // Update volume when it changes
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(error => {
        toast({
          title: "Playback Error",
          description: "There was an issue playing this track. Please try again.",
          variant: "destructive"
        });
        console.error("Audio playback error:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };
  
  const nextTrack = () => {
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    
    if (isPlaying) {
      // Small timeout to ensure track changes before playing
      setTimeout(() => {
        audioRef.current?.play().catch(console.error);
      }, 100);
    }
  };
  
  const prevTrack = () => {
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrack(tracks[prevIndex]);
    
    if (isPlaying) {
      // Small timeout to ensure track changes before playing
      setTimeout(() => {
        audioRef.current?.play().catch(console.error);
      }, 100);
    }
  };
  
  const handleTimeChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = value[0];
      audioRef.current.currentTime = (newTime / 100) * duration;
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const currentTimePercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-music-dark border-t border-gray-800 p-4 z-40">
      <audio ref={audioRef} src={currentTrack.src}></audio>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Song info */}
          <div className="flex items-center flex-shrink-0 w-full md:w-auto">
            <div className="w-14 h-14 rounded bg-gray-800 mr-3 overflow-hidden">
              <img 
                src={currentTrack.img} 
                alt={`${currentTrack.title} by ${currentTrack.artist}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mr-4">
              <h4 className="text-white font-medium truncate">{currentTrack.title}</h4>
              <p className="text-gray-400 text-sm truncate">{currentTrack.artist}</p>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex-grow flex flex-col items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Shuffle className="w-4 h-4" />
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors" 
                onClick={prevTrack}
              >
                <SkipBack className="w-5 h-5" />
              </button>
              <button 
                className="bg-music-purple hover:bg-music-med-purple text-white rounded-full p-2 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={nextTrack}
              >
                <SkipForward className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Repeat className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 w-full max-w-3xl">
              <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
              <Slider
                value={[currentTimePercentage]}
                max={100}
                step={1}
                className="w-full"
                onValueChange={handleTimeChange}
              />
              <span className="text-xs text-gray-400">{formatTime(duration)}</span>
            </div>
          </div>
          
          {/* Volume */}
          <div className="hidden md:flex items-center gap-2 w-32">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <Slider
              value={[volume]}
              max={100}
              step={1}
              className="w-full"
              onValueChange={(value) => setVolume(value[0])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
