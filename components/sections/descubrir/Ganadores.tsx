import React from "react";

export default function Ganadores() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="px-12 max-w-[1920px] mx-auto">
        {/* Encabezado de la sección */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-black tracking-[0.4em] text-primary uppercase mb-4">
            The Hall of Fame
          </h2>
          <h3 className="text-5xl font-black tracking-tighter text-white">
            AWARD WINNERS
          </h3>
        </div>

        {/* El Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[800px]">
          {/* Tarjeta Grande: Baldur's Gate 3 */}
          <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-lg bg-surface-container min-h-[400px]">
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaq_6pRVjRIPBEDzhs4cAFfhVPlcBcmOgB_KKRdk8T_KkcRcNlMCyCXZiKXjvw1hOZvfp0AaqO4C3Br8om_4pWze7nQN7b-wxRBWQ1OpeA6heZselatX26AWDI4oKneqdVSCLazkMhvMLZY4VoczUIDyu9WW80wRw_-owzrAIhxD97Cy75fwpwXK_W8z4M9kRH8raCnozIre6eGJ19o6JhcZylH21KkBWuKMbL7ANaOjxwtVUzpamQaxPu6xYSsoJWAdVDB3VCcUJg"
              alt="Baldur's Gate 3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">
                  Game of the Year
                </span>
              </div>
              <h4 className="text-5xl font-black tracking-tighter mb-4 text-white">
                BALDUR'S GATE 3
              </h4>
              <p className="text-on-surface-variant max-w-lg mb-8">
                Gather your party and return to the Forgotten Realms in a tale
                of fellowship and betrayal, sacrifice and survival, and the lure
                of absolute power.
              </p>
              <button className="bg-white text-background px-8 py-3 font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
                VIEW STORY
              </button>
            </div>
          </div>

          {/* Tarjeta Mediana 1: The Last of Us */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-lg bg-surface-container min-h-[300px]">
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoB5q-NGKYDIZVdY59btNJhtQ0tnZQQnPYyt_PBVAbQtGdyz7HAegfUvc-f5hi01P_YNUgDdR6XUlq2S4Jbf191GtIinDMBZZJme5QMQ_laKnPFjgRTQavHQQrj4ESrbkNihNReJgBTkFEcyKyph0xnx8mUoiCDDOQvMSu1WBGm4_iuS-024rnK3B2_-UrMugv8aAYiHsmiesnWUizWpD2h8G8nWhj0e3lPb2mXzLoQt-wb8tli3RT2_p4Wbqjarv0Bq-9sExrWvzt"
              alt="The Last of Us"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-2 block">
                Best Narrative
              </span>
              <h4 className="text-2xl font-bold tracking-tight text-white">
                THE LAST OF US
              </h4>
            </div>
          </div>

          {/* Tarjeta Mediana 2: Elden Ring */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-lg bg-surface-container min-h-[300px]">
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe5S9mWw7p-TFJy4HJWsJA9ptfwxyLyRJ5icsoeCi6RHwsoxnQWVC6EDO4YepsDMlMyP8Pie2T1H3bDiSn8iyU537ocNGYlVHRarCdD6foO9thYCYxEKsDsR_yEVuAjT7bb1CGuVXCk3iBt5Q8k-ew_3nUACD4oIXvDztqDh3SKuqXgQBnFkEZPH0yQMVwZmwGvtVXt7HmkKWWYpxlIrvX92bNXgJ1OB6BwpEs8dDbyGmh3fdfsuR6d_XRfXMpSs0nFWReKdq59cWs"
              alt="Elden Ring"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-2 block">
                Best Art Direction
              </span>
              <h4 className="text-2xl font-bold tracking-tight text-white">
                ELDEN RING
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
