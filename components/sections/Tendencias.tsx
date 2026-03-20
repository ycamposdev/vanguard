import React from "react";
// import { TarjetaTendencia } from "../ui/TarjetaTendencia";
import TarjetaTendencia from "../ui/TarjetaTendencia";

const trendingGames = [
  {
    id: 1,
    title: "God of War Ragnarok",
    category: "Action, Adventure",
    price: "$59.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDB5vZ8obqdIP9Sq0ql9LeaOhQUxJfu92oxaocggekg8HWPtuJTofBSCIRHJYpVQ1Z7rEIBxdtjYKyMVKu1cSvk3oNMHQ2-ODzDjKtT-d9GL3F5OCDyQ-S2kWSx88JTLkILREfawmvy9KpUNWUv96Jz8IzuRVa2g5Cu-zwNFRtUd6TkhIGCdqhacXnjOF51EXH0vb-uUXYZzFi8SSlKjtSE4Tx9PTe4aYIapXs25lgQUAzdf4M8eSrus8N9BjL_fvdwFLuqCpF-ebft",
  },
  {
    id: 2,
    title: "Journey Collector's",
    category: "Indie, Atmospheric",
    price: "$19.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlm68nknKFVLtWgChZws-OBarhf1Vw3W128eSJUNkcvxFd_2MaXpat7jOmo7uQk_R4ilXWxWOVO8ikMB9nS40m5_oDWHDqhyfEYblOyByLYSM70zFe17VldId8UjNYjruM4ZeEkdaU4ro2OTycPU9eCaEcBU9s_RoTsGslsGUYkmow4wzvIuOAnxCUhjLDRpokH13q6XPa0rpjMd7U0Yvg7Gnm1KYxoYkVPx0s22X1MZgjLXHih1puj0hUlOlETgGMD9zygR-wAn24",
  },
  {
    id: 3,
    title: "Modern Warfare III",
    category: "Action, FPS",
    price: "$69.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAt2McXCewZSnbIh2bf44j-4kFQupsoIZxkdEQHs5kN9hq5JZpSS3MVA9BSRMLJWiUA_w15Pkyn92VBmPmUzK0xzucSP9kagQjeqws424932au-HsLNIdvOxi-wEcdv8_4Bj6dfps6OzQteZo6uZeJb9JN7I740luki9AuyXBPMd-clJgFFdWPP5gU5JRn3zkG3315NrynwWDo5rnzLpyIGh2HNVfMWaq3lDZtFKvYJRycwaoQxTJLc2zux0fucwaKZRoLRjy9GLdha",
  },
];

export default function Tendencias() {
  return (
    <section className="bg-[#0f49bd]/5 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 font-display">
          Trending Now
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trendingGames.map((game) => (
            <TarjetaTendencia
              key={game.id}
              title={game.title}
              category={game.category}
              price={game.price}
              image={game.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
