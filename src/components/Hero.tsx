import React from 'react';
import { Play, Info } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[95vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50" />
      </div>
      
      <div className="relative pt-48 px-4 md:px-8 max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Stranger Things</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
            <Play className="w-6 h-6 fill-black" />
            <span className="font-semibold">Play</span>
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-gray-500/70 text-white rounded hover:bg-gray-500/50 transition">
            <Info className="w-6 h-6" />
            <span className="font-semibold">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}