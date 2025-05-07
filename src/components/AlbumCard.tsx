
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface AlbumCardProps {
  title: string;
  artist: string;
  imageUrl: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, artist, imageUrl }) => {
  return (
    <div className="album-card group">
      <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${title} by ${artist}`} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="album-card-content">
        <Button 
          size="icon"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-music-purple hover:bg-music-med-purple text-white rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Play className="h-6 w-6" />
        </Button>
        <div>
          <h3 className="font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
