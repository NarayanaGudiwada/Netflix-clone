import React from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface MovieRowProps {
  title: string;
  category: string;
}

export default function MovieRow({ title, category }: MovieRowProps) {
  // In a real app, these would come from an API
  const movies = [
    { id: 1, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=169&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=169&fit=crop" },
    { id: 3, image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=169&fit=crop" },
    { id: 4, image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=169&fit=crop" },
    { id: 5, image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=300&h=169&fit=crop" },
    { id: 6, image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=300&h=169&fit=crop" }
  ];

  return (
    <div className="px-4 md:px-8 space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      
      <div className="relative group">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-[300px] relative transition-transform duration-300 hover:scale-105"
            >
              <img
                src={movie.image}
                alt={`Movie ${movie.id}`}
                className="w-full rounded-md object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                <Play className="w-12 h-12 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
        
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}