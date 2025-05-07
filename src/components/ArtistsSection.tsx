
import React from 'react';

interface ArtistCardProps {
  name: string;
  imageUrl: string;
  genre: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, imageUrl, genre }) => {
  return (
    <div className="text-center">
      <div className="w-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-music-purple hover:border-music-accent transition-colors">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-bold text-white text-lg">{name}</h3>
      <p className="text-gray-400 text-sm">{genre}</p>
    </div>
  );
};

const ArtistsSection = () => {
  const artists = [
    {
      id: 1,
      name: 'Eliza Moon',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2064&auto=format&fit=crop',
      genre: 'Electronic Pop'
    },
    {
      id: 2,
      name: 'Marcus Wave',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
      genre: 'Ambient'
    },
    {
      id: 3,
      name: 'The Echoes',
      imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop',
      genre: 'Indie Rock'
    },
    {
      id: 4,
      name: 'Synthia Blake',
      imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2187&auto=format&fit=crop',
      genre: 'Synth Pop'
    }
  ];

  return (
    <section id="artists" className="py-16 bg-music-dark/90">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Popular Artists</h2>
          <a href="#" className="text-music-purple hover:text-music-light-purple transition-colors">View All</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {artists.map(artist => (
            <ArtistCard 
              key={artist.id} 
              name={artist.name} 
              imageUrl={artist.imageUrl} 
              genre={artist.genre} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
