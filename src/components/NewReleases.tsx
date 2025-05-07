import React from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewReleases = () => {
  const newReleases = [
    {
      id: 1,
      title: 'Summer Daydream',
      artist: 'The Sunset Sessions',
      imageUrl: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2069&auto=format&fit=crop',
      duration: '3:45'
    },
    {
      id: 2,
      title: 'Midnight Echoes',
      artist: 'Luna Nova',
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
      duration: '4:12'
    },
    {
      id: 3,
      title: 'Electric Pulse',
      artist: 'Neon Waves',
      imageUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=2070&auto=format&fit=crop',
      duration: '3:28'
    },
    {
      id: 4,
      title: 'Mountain Dreams',
      artist: 'Ambient Horizon',
      imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?q=80&w=2036&auto=format&fit=crop',
      duration: '5:16'
    },
    {
      id: 5,
      title: 'City Lights',
      artist: 'Urban Echo',
      imageUrl: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=2072&auto=format&fit=crop',
      duration: '3:52'
    }
  ];

  return (
    <section id="playlists" className="py-16 bg-gradient-to-b from-music-background to-music-dark/90">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">New Releases</h2>
          <Link to="/browse" className="text-music-purple hover:text-music-light-purple transition-colors">Browse All</Link>
        </div>
        
        <div className="bg-music-dark/50 backdrop-blur-lg rounded-xl p-6">
          <ul className="space-y-4">
            {newReleases.map((track, index) => (
              <li key={track.id} className="flex items-center gap-4 group rounded-lg hover:bg-white/5 p-3 transition-colors">
                <span className="text-gray-400 font-medium w-6">{index + 1}</span>
                <div className="h-12 w-12 rounded bg-gray-800 relative flex-shrink-0">
                  <img 
                    src={track.imageUrl} 
                    alt={track.title} 
                    className="h-full w-full object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-white font-medium truncate">{track.title}</h4>
                  <p className="text-gray-400 text-sm truncate">{track.artist}</p>
                </div>
                <span className="text-gray-400 text-sm">{track.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
