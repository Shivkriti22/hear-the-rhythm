
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import NewReleases from '@/components/NewReleases';
import ArtistsSection from '@/components/ArtistsSection';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-music-background text-white">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <NewReleases />
      <ArtistsSection />
      <div className="h-24" /> {/* Space for music player */}
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Index;
