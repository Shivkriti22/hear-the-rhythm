
import React from 'react';
import { Play } from "lucide-react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { famousSongs } from '@/data/songs';

interface SongTableProps {
  onPlayMusic: (song: any) => void;
}

const SongTable: React.FC<SongTableProps> = ({ onPlayMusic }) => {
  return (
    <div className="bg-music-dark/50 backdrop-blur-lg rounded-xl p-6">
      <Table className="border-collapse">
        <TableHeader>
          <TableRow className="border-b border-gray-800">
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead className="w-[80px]"></TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Artist</TableHead>
            <TableHead className="hidden md:table-cell">Album</TableHead>
            <TableHead className="hidden md:table-cell">Year</TableHead>
            <TableHead className="text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {famousSongs.map((song, index) => (
            <TableRow 
              key={song.id}
              className="border-b border-gray-800/50 hover:bg-white/5 group cursor-pointer"
              onClick={() => onPlayMusic(song)}
            >
              <TableCell className="font-medium text-gray-400">
                {index + 1}
              </TableCell>
              <TableCell>
                <div className="h-10 w-10 rounded bg-gray-800 relative">
                  <img 
                    src={song.imageUrl} 
                    alt={song.title} 
                    className="h-full w-full object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">{song.title}</TableCell>
              <TableCell className="text-gray-300">{song.artist}</TableCell>
              <TableCell className="text-gray-400 hidden md:table-cell">{song.album}</TableCell>
              <TableCell className="text-gray-400 hidden md:table-cell">{song.year}</TableCell>
              <TableCell className="text-right text-gray-400">{song.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SongTable;
