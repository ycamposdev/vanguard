import React from "react";

interface GemCardProps {
  title: string;
  genre: string;
  price: number;
  image: string;
}

export default function TarjetaGem({
  title,
  genre,
  price,
  image,
}: GemCardProps) {
  return (
    <div className="group relative aspect-[3/4] bg-surface-container overflow-hidden rounded-lg cursor-pointer">
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={image}
        alt={title}
      />
      {/* Overlay al hacer hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
        <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-2 block">
          {genre}
        </span>
        <h4 className="text-2xl font-bold mb-4 text-white">{title}</h4>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">${price}</span>
          <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-lg">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
