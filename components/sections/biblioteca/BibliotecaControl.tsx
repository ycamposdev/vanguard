import React from "react";

export default function BibliotecaControl() {
  return (
    <section className="px-12 mt-8 mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <span
            className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
            data-icon="search"
          >
            search
          </span>
          <input
            type="text"
            className="w-full bg-surface-container-low border-none rounded-lg pl-12 pr-4 py-4 font-headline text-sm tracking-wider text-on-background focus:ring-1 focus:ring-primary placeholder:text-slate-600 transition-all"
            placeholder="SEARCH YOUR LIBRARY..."
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-6 py-4 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="filter_list"
            >
              filter_list
            </span>
            Filter
          </button>

          <button className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-6 py-4 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 border-primary">
            Recent Activity
          </button>
        </div>
      </div>
    </section>
  );
}
