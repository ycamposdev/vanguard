import React from "react";
import TiendaTarjetaVideojuego from "@/components/ui/TiendaTarjetaVideojuego";

const STORE_GAMES = [
  {
    id: 1,
    title: "God of War",
    genre: "Action-Adventure",
    price: 59.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDk80ymXjNWJ-K_eAbxP1G5qtTHhSeaLBN3Va9xkCuGxylYxzx1ZG-QiEp6ghxGjEiXYjbgPlp04bU0HhXYyB1tbjDuW3OBG79nDV_p6unMg3XKmK4CvoKcy1nkvBPoCqX2yNc8DI_q-lJTGlbCr2StrpGlUj6SO6hgFHLTmPqUCwz_hyYbp7qujunoeNFMpncSKmPed_3lVxZK9gFA0a6VmJJVs8fYVazQXlKsytqpkNy2j44wX3siXeRp8cjTjBGl9iGJOz3sSW4_",
    tag: { text: "New Release", color: "bg-primary" },
  },
  {
    id: 2,
    title: "Journey",
    genre: "Indie / Artistic",
    price: 14.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe_A9P31DEN0OleemvGvcjVO6f2yYucDp-_s50d4-EWpk8ymz2mcA9lucQElVLKNiO6eElcPVU7t2nPPOhr5CtB3hQ8BQF4MaQ8i5k8cPPvepeKIbiBUGJM7PgU80oRVt0OUXbhlV-PWFrftBBJPbn0ddU7oreEM15xhFkJ-dV4Kt7tR9E4NsaSCJFpYEGhO3PWfYjZvJ016gQdoWGqmgBD9OFFHYjCCQa0L-UBXw3fjo7kVZkEE11gGFrNM3os3xQtBCX4ns-zH38",
  },
  {
    id: 3,
    title: "Modern Warfare III",
    genre: "FPS / Competitive",
    price: 69.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAB4H1cymtvf5RpRplv6jzIuDpIV-HBtRF_l1rLgVz7EzV4byNksEfHUu_wJtTjFtwecfXwjGs0Z-O2VM4JApWreUqpTK4Cv2hXwisJcb5vx6HU354_sIB8rH7AUyyTeEtfy7DhGiP-jQU1HhE7kpXWT7WbJ3wl-PT8tyPE-XRhnXUpGh9tKjGvhnkW_3p7zFrEGOByz_KuSynGXkuY6sK7H3MH2VKDZdNnWWTdXSyhbtm0qenBZqFsS6gYc95UGpgSRZp1DyQE0U4C",
    tag: { text: "Hot", color: "bg-error" },
  },
  {
    id: 4,
    title: "Starfield",
    genre: "Open World / RPG",
    price: 69.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmtTMWEItnTcIHbkyFUoL-SjLTeQb8At0ACCz9ldIPs-DyNy3eoV_3izVeA5bElphC25MBkfPW4Sl2Cy-6-FCd3azbsn8RwDwSBFVBZ4gxZGHta4Z8gLqhXxJxv51oeAvdSxxg59ukF6vpZ88A4lU4vb38-7NCifmWoGdkPP0yYJJtu4wG15C6EsKLioVQeU-kGRFFO_7pSSaQ66VQ4K7-FuKO58j0D9Xv6jQiHqWy7_pcESheHp6y5s6dG49JG5zubje0NdS--Ydc",
  },
  // ... puedes añadir más aquí
];

export default function NavegadorVideojuego() {
  return (
    <section className="flex-grow">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2">
            STORE / BROWSE
          </h1>
          <p className="text-slate-500 font-label text-[10px] tracking-[0.3em] uppercase">
            Showing 1,248 available titles
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-label text-[10px] tracking-widest text-slate-500 uppercase">
            Sort By
          </span>
          <select className="bg-surface-container border-none rounded-lg text-sm font-bold tracking-wider text-on-surface py-2 px-6 focus:ring-1 focus:ring-primary uppercase">
            <option>Popularity</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {STORE_GAMES.map((game) => (
          <TiendaTarjetaVideojuego key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
}
