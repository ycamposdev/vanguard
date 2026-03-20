"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Lado Izquierdo: Logo y Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            {/* Icono: grid_view */}
            <span className="material-symbols-outlined text-primary text-3xl">
              grid_view
            </span>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              VANGUARD
            </h1>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/tienda"
              className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Tienda
            </Link>
            <Link
              href="/descubrir"
              className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Descubrir
            </Link>
            <Link
              href="/biblioteca"
              className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Biblioteca
            </Link>
          </nav>
        </div>

        {/* Lado Derecho: Buscador, Carrito y Perfil */}
        <div className="flex items-center gap-6">
          <div className="relative hidden sm:block">
            {/* Icono: search */}
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar videojuegos..."
              className="h-10 w-64 rounded-lg border-none bg-slate-200/50 pl-10 text-sm focus:ring-2 focus:ring-primary dark:bg-slate-800/50 dark:text-slate-200"
            />
          </div>

          <button className="flex items-center justify-center rounded-full bg-slate-200/50 p-2 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400">
            {/* Icono: shopping_bag */}
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>

          <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-200 dark:border-slate-800">
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfEdy7ohn29JtxvS4xD_3GnvdX8IeA9uGAvzuOToh6dZrqOFpJto5o6w_w_VCerfw2LzhekRmNhKUXHrVgTvUcXHBzEOHDmBrheTNhjH9Oc-1LwUPl3UxduFa3K1b7qsbYeL87SFa_rIhZyesaIS2_1JYmCmcggxjw8injVkUt9OmXoOYRVQ1MXE1uM3sMlNjVH-Zf5Mfzay_Gzj4dsRudDappiMfCvZflzeo2o49doEGy9ZrwJaYTQzONWRWBpkhk1o34WT00QGNj"
              alt="User profile avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
