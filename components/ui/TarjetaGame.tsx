import React from "react";

interface GameCardProps {
  title: string;
  price: string;
  image: string;
}

export const TarjetaGame = ({ title, price, image }: GameCardProps) => {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800 cursor-pointer">
      <img
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        src={image}
        alt={`${title} cover art`}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/90 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="text-xs text-[#0f49bd] font-medium">{price}</p>
      </div>
    </div>
  );
};
