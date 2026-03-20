import React from "react";

export default function BibliotecaHero() {
  return (
    <section className="relative h-[400px] w-full flex items-end px-12 pb-12 overflow-hidden">
      {/* Background & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Background Hero"
          className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWvlducIOP7hJmzwm-ACXdPHw6GWcXRCYORKd4qzrgO_YK4W5kCg1uzOZPLtNTHGnk0H7HjmfVsZPYw1xxLUSF8nwnu1e60N5Rp0ARusnA03ZICyMj9F5K2dPVR8tFBkHfpe_B3PW0kWNze2slqkY8zR0Qgccl-Y2RyuxVNZMPzqP8twWgurFWFzq8TtTfB310fCFqzoxkzhCfmVEQ855RXAoiWmbEVlkiMWUc3fyYkXVIYPX335uYWFJyIzNav-xw3LZwicK6zDmx"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* User Info */}
        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-lg border-2 border-primary overflow-hidden shadow-2xl shadow-primary/20">
            <img
              alt="Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86fcVjET7sM_FUg7H4WY55Y-mAp7nDjdaNWwaB6jrAeDLFbJJhH0DMe2aQ1aIqwERsIQhEAXDERyvo19jRftTr7lRpl_8sX_nQNuJNlrkDbJ9KQuuO_Kg76vvwYhikqWGn2I9rwIoNd6D1cfyzSB_-CSX3V5Gp1zsvORsoKRHu4OSnBRoKqiaA1bR0kWzh1yNygN-BhYCeza2VwHH8yzmulm9A7vMLBh32SnSj9qF0qZil9IDyVkifYiuMikDkP0d0pcIOuqviPdn"
            />
          </div>
          <div>
            <span className="text-primary font-headline text-xs tracking-[0.2em] uppercase font-bold">
              Vanguard Operative
            </span>
            <h1 className="text-5xl font-black font-headline tracking-tighter mt-1 mb-4">
              ALEX_VANGUARD
            </h1>
            <div className="flex gap-4">
              <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded">
                Level 84
              </span>
              <span className="bg-surface-container text-on-surface-variant border border-outline-variant px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded">
                Pro Member
              </span>
            </div>
          </div>
        </div>

        {/* Stats Bento Box */}
        <div
          className="grid grid-cols-3 gap-1 p-1 bg-outline-variant rounded-xl overflow-hidden border border-white/5 shadow-2xl shadow-black/50"
          style={{
            background: "rgba(16, 22, 34, 0.7)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="bg-surface-container p-4 min-w-[140px] flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Total Games
            </span>
            <span className="text-3xl font-black font-headline text-on-background tracking-tighter">
              42
            </span>
          </div>

          <div className="bg-surface-container p-4 min-w-[140px] flex flex-col gap-1 border-x border-outline-variant">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Hours Played
            </span>
            <span className="text-3xl font-black font-headline text-on-background tracking-tighter">
              1,250
            </span>
          </div>

          <div className="bg-surface-container p-4 min-w-[140px] flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Achievements
            </span>
            <span className="text-3xl font-black font-headline text-primary tracking-tighter">
              87%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
