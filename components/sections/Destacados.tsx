import React from "react";
import { TarjetaGame } from "../ui/TarjetaGame";

const featuredGames = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    price: "$59.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwdwhFU-6fGSZFYg-0oepczkh9rBRmrTuBoaPCmW9JtaP-gHcRzagsmNet8wqDx7ExOLrTkG5regdN5MawN0LvjUbmgUAhf5QI3ssTZXqCuayAJEUXEelBpmqpDBLFdZNsShe0k4kFzT-54npGxMqDFxFBgX4zo9_OBJEXOZ8IajJuuTWCYN1JuzILunYkIvKA7HqztnhY1zkTdqhRlPsGFxmZMgyvm8O6KZGQKssmqq0SU9VoT1S0oqfdpTUPNzVDbG1W3LgxSuG_",
  },
  {
    id: 2,
    title: "Final Fantasy VII",
    price: "$69.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKgjZhAfwNvfSKhinkK42BcW0j2SQXq5pV9pLmcwBmaDURLeP6rJjRGeUpnsErT5VLHl1Jlu_KKVRUPBWd4PjK6kIUu-JrK_Y5SuImJXnnPdDY8tEfHyASd1uR3AwxV61mt2YBSYSc9Q5LjhPVzHoxwyVZbaHtIIAwZOgQpUekkhzFL3tXUyoMMvMbByinjWe3dN4G2brpghEZss35BgSXrobYNqVQLCmyLUiBO20G3dgtyoje_pR8I1EFDhsPtyd9-GQzxoQT4RKl",
  },
  {
    id: 3,
    title: "Starfield",
    price: "$69.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfdLFoyXSqeNqKgjMSpAk1Qin0vica9iCeYI9r7EhGhk4ZzxfXNhAGD3OGjdrVnHGYi--uX4ptye2aVm3Un1kAw80hhuZZb9WNKBluJGJ6Y3OdTrlqDPYXACL_Yvb7r6iOGi8KK3LRn3tiOdcMBu9mCnRs2iJQMsYh8R-y8KAQbuWQdTOJDZH4sWgREpTaUPYp2QxPvyzWntZ-jdsa_j3HTe0oO3RLurIacEWQ8yWqXpiwBn0WDrZUcjpDkMfbwjJ275XG-93Xqguc",
  },
  {
    id: 4,
    title: "Hades II",
    price: "$29.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTULxgV-w-BlaFWsvR02OhQK_q2qwXBWi_65zH1K1JkGPOZ55fSlIhGLJ3pXYX52oh9mejBUCHGUaMij1UyoNoSewonUpfI7bdzHqAV9XXGrk9NCmZ5hxw9tve50YOaAHmx_xmsm8G37QZCpTXzAIf-zJ6rlPZyyTsjTz4fg41BrRWtDwUjLtsVpl-IPKFGOrSWQVwC7jpZYvCwC0wmYqXaExAg1rwHRKrN4cA_wrqQwuFJlm5CIxurDkpKs9BrwG_mkz8aYkpJO0S",
  },
  {
    id: 5,
    title: "Forza Horizon 5",
    price: "$49.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkTMoj2ct8QzteDeUhYXEv5t0MCtZFDuy10qvozZAI-HwFvKhxba4wx4qboi2sfksM9WQQE_xsIElc5Oe4uZzdFeEP_OEP5rQ-H5bwM0LBRa2fOyL0S4ZMb9yTIsmh2EkXshd5luCqI32r23TGosX5Z7LE9qPUdPlEQ7QZZ3_b8UfAIRjExPx1jjUFhvjppbHb4VjwZZtH0aSFS1lMeMxNSRNPk88pCAJE4qnOwgDHqPH0g5nUou-s7by7jF80qOSux53IwvnI2QDo",
  },
];

export default function Destacados() {
  return (
    <section className="px-6 py-12 lg:px-10">
      {/* Cabecera de la Sección */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 font-display">
            Featured Titles
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hand-picked experiences for every player
          </p>
        </div>

        <a
          className="group flex items-center gap-2 text-sm font-bold text-[#0f49bd]"
          href="#"
        >
          View All
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-base">
            arrow_forward
          </span>
        </a>
      </div>

      {/* Grid de Juegos */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {featuredGames.map((game) => (
          <TarjetaGame
            key={game.id}
            title={game.title}
            price={game.price}
            image={game.image}
          />
        ))}
      </div>
    </section>
  );
}
