
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import BrowseHeader from '@/components/browse/BrowseHeader';
import SongTable from '@/components/browse/SongTable';
import { useToast } from "@/hooks/use-toast";

const Browse = () => {
  const { toast } = useToast();

  // Create a function to play music on MusicPlayer
  const playMusic = (song) => {
    // Dispatch a custom event that MusicPlayer will listen for
    const event = new CustomEvent('playSong', { 
      detail: { 
        id: song.id,
        title: song.title,
        artist: song.artist,
        src: song.audioSrc,
        img: song.imageUrl
      } 
    });
    
    window.dispatchEvent(event);
    
    toast({
      title: "Now Playing",
      description: `${song.title} by ${song.artist}`,
    });
  };

  return (
    <div className="min-h-screen bg-music-background text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-32">
        <BrowseHeader />
        <SongTable onPlayMusic={playMusic} />
      </div>
      
      <div className="h-24" /> {/* Space for music player */}
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Browse;
