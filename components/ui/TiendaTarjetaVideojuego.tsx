import React from "react";

interface StoreGameCardProps {
  title: string;
  genre: string;
  price: string | number;
  image: string;
  tag?: { text: string; color: string };
}

export default function TiendaTarjetaVideojuego({
  title,
  genre,
  price,
  image,
  tag,
}: StoreGameCardProps) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-surface-container transition-all duration-500 hover:-translate-y-2">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-transparent opacity-90"></div>

      <div className="absolute bottom-0 left-0 p-6 w-full">
        {tag && (
          <div className="mb-2">
            <span
              className={`font-label text-[8px] tracking-[0.3em] uppercase ${tag.color} px-2 py-0.5 rounded text-white font-bold`}
            >
              {tag.text}
            </span>
          </div>
        )}

        <h2 className="text-xl font-bold tracking-tight mb-1 text-white">
          {title}
        </h2>

        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-xs font-medium">{genre}</span>
          <span className="text-primary font-black">
            {typeof price === "number" ? `$${price}` : price}
          </span>
        </div>

        <button className="mt-4 w-full bg-white/10 backdrop-blur-md border border-white/20 py-2 text-xs font-bold tracking-widest uppercase rounded text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Quick Buy
        </button>
      </div>
    </div>
  );
}
