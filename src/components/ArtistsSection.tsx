
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
      name: 'Lana Del Rey',
      imageUrl: 'https://images.unsplash.com/photo-1522609925277-66fea332c575?q=80&w=2156&auto=format&fit=crop',
      genre: 'Alternative Pop'
    },
    {
      id: 2,
      name: 'Taylor Swift',
      imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2186&auto=format&fit=crop',
      genre: 'Pop'
    },
    {
      id: 3,
      name: 'Arijit Singh',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
      genre: 'Bollywood'
    },
    {
      id: 4,
      name: 'Vishal Mishra',
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2187&auto=format&fit=crop',
      genre: 'Bollywood'
    },
    {
      id: 5,
      name: 'Yo Yo Honey Singh',
      imageUrl: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?q=80&w=2069&auto=format&fit=crop', 
      genre: 'Hip-Hop/Rap'
    },
    {
      id: 6,
      name: 'Marcus Wave',
      imageUrl: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=2187&auto=format&fit=crop',
      genre: 'Ambient'
    }
  ];

  return (
    <section id="artists" className="py-16 bg-music-dark/90">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Popular Artists</h2>
          <a href="#" className="text-music-purple hover:text-music-light-purple transition-colors">View All</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
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
