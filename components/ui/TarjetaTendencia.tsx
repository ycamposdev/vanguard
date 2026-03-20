import React from "react";

interface TrendingCardProps {
  title: string;
  category: string;
  price: string;
  image: string;
}

export default function TarjetaTendencia({
  title,
  category,
  price,
  image,
}: TrendingCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/50 transition-all hover:shadow-lg">
      {/* Imagen del juego */}
      <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-lg">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>

      {/* Info del juego */}
      <div className="flex-1">
        <h4 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
          {title}
        </h4>
        <p className="text-xs text-slate-500">{category}</p>
      </div>

      {/* Precio y Botón de Acción */}
      <div className="text-right">
        <p className="text-sm font-bold text-[#0f49bd]">{price}</p>
        <button className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0f49bd]/10 text-[#0f49bd] transition-colors hover:bg-[#0f49bd] hover:text-white">
          <span className="material-symbols-outlined text-lg">
            add_shopping_cart
          </span>
        </button>
      </div>
    </div>
  );
}
