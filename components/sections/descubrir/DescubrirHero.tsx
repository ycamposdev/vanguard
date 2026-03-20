import React from "react";

export default function DescubrirHero() {
  return (
    <section className="relative h-[870px] w-full overflow-hidden">
      {/* Imagen de Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxN3rFzudpWTADGNUTPADok-uWQcw8QgfJgzcSxOdPg4xAwxIw-NgD4KCGl5lNvVVZvkPBMCk0w9GeclDyO7jt3JyFAzvcECGFyrUR9ZuhlrRttQ2fr-KJ8ezWmA1Laudz5DR8iBS7JE-hyOkv5u-_5_hjcEMWkwPmjLWqpgmNF-m2eV6_t0Z1P8CBNj_IIAf8gXEazcQdTVSKVWS3v3k1bPVFgrAgSVfURwP5s9txoFxSWpfPewyrfXhWSygpZEdqkJ6UmvQVX68h')",
        }}
      ></div>

      {/* Capas de Degradado (Overlays) */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-end px-12 pb-24 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-primary text-white px-3 py-1 text-[10px] font-black tracking-[0.2em] uppercase rounded-sm">
            Featured
          </span>
          <span className="text-on-surface-variant font-headline text-[12px] tracking-widest uppercase">
            Editor's Choice • Week 42
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] max-w-4xl text-white">
          NEON
          <br />
          STRIKE: ZERO
        </h1>

        <p className="text-on-surface-variant text-lg max-w-xl mb-10 font-medium leading-relaxed">
          Experience the definitive cyberpunk odyssey. Midnight Vanguard's
          highest-rated tactical shooter of the decade is now available for
          early access.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-primary hover:bg-[#1a5ce5] text-white px-10 py-4 font-bold tracking-widest text-sm uppercase transition-all flex items-center gap-3">
            EXPLORE NOW{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 font-bold tracking-widest text-sm uppercase transition-all">
            ADD TO WISHLIST
          </button>
        </div>
      </div>
    </section>
  );
}
