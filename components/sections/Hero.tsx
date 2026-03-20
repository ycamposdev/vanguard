"use client";

import React from "react";

const Hero = () => {
  return (
    <section>
      {/* Contenedor principal con altura fija y alineación al fondo (items-end) */}
      <div className="relative overflow-hidden rounded-xl bg-[#101622] min-h-[600px] flex items-end justify-start">
        {/* Capa de Imagen de Fondo */}
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_VoGL6InKCelCE9YZ3l4PQ7tczWvIWOErhr2zsZUJr7S4TNfNR8Ck7O7V23HuArr1F3E1uTTz6g9OeKY3P1Mjux2Qfm4ymj5a6D7nNXQFk1KdUjXm8Y7qFJTPUL7Hsz1crOCE9tAgxFRpV0GuOo1XENK4BIwgDtcbcZ2i_g6_lRg6VGO1S-bZG5bzgtHrzVgUgS8wIt7PHTre3zrdooCPdhKVfSSuwnBpPXjitT92bQyu0qp5rB3QWp2nxPcvxxItcts2oG5Bpnrb"
            alt="Elden Ring Background"
          />
          {/* Overlays para asegurar que el texto sea legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#101622]/80 via-transparent to-transparent"></div>
        </div>

        {/* Contenido: Alineado a la izquierda por defecto */}
        <div className="relative z-10 p-8 md:p-16 lg:max-w-3xl text-left">
          <span className="mb-4 inline-block rounded-full bg-[#0f49bd]/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#0f49bd] border border-[#0f49bd]/30">
            New Release
          </span>

          <h2 className="mb-4 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl font-display">
            Elden Ring:
            <br />
            Shadow of the Erdtree
          </h2>

          <p className="mb-8 max-w-lg text-lg text-slate-300">
            Unravel the mysteries of the Lands Between. Experience the profound
            storytelling and breathtaking landscapes in this legendary
            expansion.
          </p>

          <div className="flex flex-wrap gap-4 justify-start">
            {/* Botón con color azul explícito #0f49bd */}
            <button className="flex h-14 items-center justify-center rounded-lg bg-[#0f49bd] px-10 text-base font-bold text-white transition-transform hover:scale-105 active:scale-95">
              Pre-order Now
            </button>

            <button className="flex h-14 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-10 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
              View Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
