import React from "react";

interface GameCardProps {
  title: string;
  genre: string;
  image: string;
  isInstalled?: boolean; // Si es true muestra 'Play', si es false 'Install'
}

export default function TarjetaVideojuego({
  title,
  genre,
  image,
  isInstalled = true,
}: GameCardProps) {
  return (
    <div className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low transition-transform duration-500 hover:-translate-y-2">
      {/* Imagen con efecto de Zoom en Hover */}
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={image}
      />

      {/* Degradado inferior para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

      {/* Contenido de la Tarjeta */}
      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-black font-headline tracking-tighter mb-1">
          {title}
        </h3>
        <p className="text-on-surface-variant text-xs font-medium uppercase tracking-widest mb-6">
          {genre}
        </p>

        {isInstalled ? (
          /* Botón Play (Instalado) */
          <button className="w-full bg-primary hover:bg-blue-700 text-white font-black py-4 rounded-lg uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all active:scale-95">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_arrow
            </span>
            Play
          </button>
        ) : (
          /* Botón Install (No instalado) */
          <button className="w-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-black py-4 rounded-lg uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all active:scale-95 border border-white/20">
            <span className="material-symbols-outlined">download</span>
            Install
          </button>
        )}
      </div>
    </div>
  );
}
