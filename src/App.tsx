import React, { useState } from 'react';
import { Play, Info, Bell, Search, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Hero />
      <div className="relative z-20 -mt-32 space-y-8 pb-20">
        <MovieRow title="Trending Now" category="trending" />
        <MovieRow title="Popular on Netflix" category="popular" />
        <MovieRow title="New Releases" category="new" />
        <MovieRow title="Action Movies" category="action" />
      </div>
    </div>
  );
}

export default App;