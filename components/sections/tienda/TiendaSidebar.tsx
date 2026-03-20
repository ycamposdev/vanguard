import React from "react";

export default function TiendaSidebar() {
  return (
    <aside className="w-72 flex-shrink-0 hidden xl:block">
      <div className="sticky top-28 space-y-10">
        {/* Rango de Precio */}
        <div>
          <h3 className="font-headline font-bold text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-6">
            Price Range
          </h3>
          <input
            className="w-full h-1.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
            max="100"
            min="0"
            type="range"
          />
          <div className="flex justify-between mt-4 font-label text-[10px] tracking-widest text-slate-400 uppercase">
            <span>$0</span>
            <span>$100+</span>
          </div>
        </div>

        {/* Plataformas */}
        <div>
          <h3 className="font-headline font-bold text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-6">
            Platforms
          </h3>
          <div className="space-y-3">
            {["PC Master Race", "PlayStation 5", "Xbox Series X|S"].map(
              (plat) => (
                <label
                  key={plat}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="rounded border-outline bg-transparent text-primary focus:ring-offset-background"
                  />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {plat}
                  </span>
                </label>
              ),
            )}
          </div>
        </div>

        {/* Géneros */}
        <div>
          <h3 className="font-headline font-bold text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-6">
            Genres
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Action", "RPG", "Strategy", "Indie", "Adventure"].map(
              (genre, idx) => (
                <span
                  key={genre}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase cursor-pointer transition-colors ${idx === 0 ? "bg-primary text-white" : "bg-surface-container-high text-slate-400 hover:bg-surface-container-highest"}`}
                >
                  {genre}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
