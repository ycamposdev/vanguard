// import React from "react";

// export default function DescubrirHero() {
//   return (
//     <section className="relative h-[870px] w-full overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxN3rFzudpWTADGNUTPADok-uWQcw8QgfJgzcSxOdPg4xAwxIw-NgD4KCGl5lNvVVZvkPBMCk0w9GeclDyO7jt3JyFAzvcECGFyrUR9ZuhlrRttQ2fr-KJ8ezWmA1Laudz5DR8iBS7JE-hyOkv5u-_5_hjcEMWkwPmjLWqpgmNF-m2eV6_t0Z1P8CBNj_IIAf8gXEazcQdTVSKVWS3v3k1bPVFgrAgSVfURwP5s9txoFxSWpfPewyrfXhWSygpZEdqkJ6UmvQVX68h')",
//         }}
//       ></div>

//       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
//       <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>

//       <div className="relative z-10 h-full flex flex-col justify-end px-12 pb-24 max-w-[1920px] mx-auto">
//         <div className="flex items-center gap-4 mb-6">
//           <span className="bg-primary text-white px-3 py-1 text-[10px] font-black tracking-[0.2em] uppercase rounded-sm">
//             Featured
//           </span>
//           <span className="text-on-surface-variant font-headline text-[12px] tracking-widest uppercase">
//             Editor's Choice • Week 42
//           </span>
//         </div>

//         <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] max-w-4xl text-white">
//           NEON
//           <br />
//           STRIKE: ZERO
//         </h1>

//         <p className="text-on-surface-variant text-lg max-w-xl mb-10 font-medium leading-relaxed">
//           Experience the definitive cyberpunk odyssey. Midnight Vanguard's
//           highest-rated tactical shooter of the decade is now available for
//           early access.
//         </p>

//         <div className="flex flex-wrap gap-4">
//           <button className="bg-primary hover:bg-[#1a5ce5] text-white px-10 py-4 font-bold tracking-widest text-sm uppercase transition-all flex items-center gap-3">
//             EXPLORE NOW{" "}
//             <span className="material-symbols-outlined text-lg">
//               arrow_forward
//             </span>
//           </button>
//           <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 font-bold tracking-widest text-sm uppercase transition-all">
//             ADD TO WISHLIST
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";

export default function DiscoverHero() {
  return (
    <section className="relative ">
      <div className="relative overflow-hidden rounded-xl bg-slate-900 min-h-[600px] flex items-end">
        {/* CONTENEDOR DE IMAGEN Y DIFUMINADOS */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Elden Ring Banner"
            className="h-full w-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_VoGL6InKCelCE9YZ3l4PQ7tczWvIWOErhr2zsZUJr7S4TNfNR8Ck7O7V23HuArr1F3E1uTTz6g9OeKY3P1Mjux2Qfm4ymj5a6D7nNXQFk1KdUjXm8Y7qFJTPUL7Hsz1crOCE9tAgxFRpV0GuOo1XENK4BIwgDtcbcZ2i_g6_lRg6VGO1S-bZG5bzgtHrzVgUgS8wIt7PHTre3zrdooCPdhKVfSSuwnBpPXjitT92bQyu0qp5rB3QWp2nxPcvxxItcts2oG5Bpnrb"
          />

          {/* DIFUMINADO INFERIOR (Hacia el fondo de la página) */}
          {/* Usamos 'from-background-dark' para que se mezcle con el resto del sitio */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>

          {/* DIFUMINADO LATERAL (Para que el texto sea legible) */}
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-transparent to-transparent"></div>
        </div>

        {/* CONTENIDO DEL HERO */}
        <div className="relative z-10 p-8 md:p-16 lg:max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30">
            New Release
          </span>
          <h2 className="mb-4 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl font-headline">
            Elden Ring:
            <br />
            Shadow of the Erdtree
          </h2>
          <p className="mb-8 max-w-lg text-lg text-slate-300 font-body">
            Unravel the mysteries of the Lands Between. Experience the profound
            storytelling and breathtaking landscapes in this legendary
            expansion.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex h-14 items-center justify-center rounded-lg bg-primary px-10 text-base font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
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
}
