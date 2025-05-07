
import React from 'react';
import AlbumCard from './AlbumCard';
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const featuredAlbums = [
    {
      id: 1,
      title: 'Electric Dreams',
      artist: 'Synthwave Collective',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Midnight Echoes',
      artist: 'Luna Nova',
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Urban Rhythms',
      artist: 'DJ Metropolis',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Acoustic Sunrise',
      artist: 'The Harmonies',
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Neon Nights',
      artist: 'Electra Pulse',
      imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Synth Revival',
      artist: 'Binary Beats',
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <section id="discover" className="py-16 bg-music-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Albums</h2>
          <Link to="/browse" className="text-music-purple hover:text-music-light-purple transition-colors">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredAlbums.map(album => (
            <AlbumCard 
              key={album.id} 
              title={album.title} 
              artist={album.artist} 
              imageUrl={album.imageUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
