
import React from 'react';
import { Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BrowseHeader: React.FC = () => {
  return (
    <Card className="bg-music-dark/50 backdrop-blur-lg border-gray-800 mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Headphones className="text-music-purple" />
          Browse Collection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-4">
          Discover 15 of the most iconic English songs of all time, from classic rock to pop hits.
        </p>
      </CardContent>
    </Card>
  );
};

export default BrowseHeader;
