import React from "react";
import TarjetaGem from "./TarjetaGem";

const GEMS_DATA = [
  {
    id: 1,
    title: "TUNIC",
    genre: "Action / Puzzle",
    price: 29.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAr7UuwbjkDkcaJQEPA5EAi7Ryft7oldBW_-6abYKRUZydiipmz60KsYOokb11EkvcnV3_tqIUkwd1zDN-uM1W4-qg1YoXxXr6vF3g6BesB-i5nHRHsat8u_qZCwQ7TCcLFMwd4jItGj4iVV0Hw2zh4WLyLv82ayLRRIp75RqnnSi0QBTkXlLg2jRdN6Q86z_Yo56UKTp5wbOGYy6dmBoSmzOcNiyTtyqDe8EKMMgHTZQCv6_ZTt4ZTE2lbek86jC92Ib4SuA3oZvxy",
  },
  {
    id: 2,
    title: "SIGNALIS",
    genre: "Survival Horror",
    price: 19.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfUBx7SxSORbSoho5YwTAsR0NOJLLqxJUIeYBGl_4iJoV2IQZrvwky-gWcu_yuWtYfNmOxkw4QKH67ekf0oeCCIbSczgj5SEG3JLE4pX2SXyfwBQ_sqfjdFVPMh2OhsNAIVdOHd0IXWsNPEeWj-1j7xa5BByI2h4nlLrrTpefaMLFGo5SXq8Pl56bTYPHM0YySjiMVc5tc0yZIrmWhtsGNb1RBGqaD3Ry4F-QjObgrL0fjeP-OO0Cwut1dXFnDQKxbRvyV6YlUmRWK",
  },
  {
    id: 3,
    title: "SABLE",
    genre: "Exploration",
    price: 24.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Jz3p6PpntLuuyDsZPQ2orSPctjn08yr-bMhOuQuLEZhVrcEdBsl4aiY_I4VTHJqG5s0t5wkDL-iPd1WKstWdINGVho629v2xg4gw2dqUVot69lQ8MxHPWOMal9VNbpqG7Z-mg2lqHtmwTIEAQ9d4nIpHrSYGxY-FafwUPFZ_wD3IZ2Ez2TqF23tOqCYLP3RJmiLjJCqijhxsvctV42Vn7jwfX4XQyRMiUpKBn3ne-4OuU0LQPbkwV79-KYHQWMKvUFD2YKndYcwc",
  },
  {
    id: 4,
    title: "INSCRYPTION",
    genre: "Roguelike",
    price: 19.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAM5bWe87iafdqbBaHrQeMxfXlKWUQKG9nU106Bvf9JWV3OftrDf_LLbhLlZGQv838Ae6qW3RcO4ILTPx07IcYILuAj_fL_g-uipIBqbj4uSa19HHJ8NS1vw9aMgw8TmfAdJp1dZZH3xaoaoh03rcHcWFSmeRLRw1yVK30bVOv7gXepnBzmbV9g43Wjpvw5m79nCiVE32B5wHqmx8mEmL-37O8q8pC3BzO15iJ4vngx7igybJq4ujFQuahjF9PeBcLDTe6dyTQM69Oz",
  },
];

export default function OcultaGem() {
  return (
    <section className="py-24 px-12 max-w-[1920px] mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-sm font-black tracking-[0.3em] text-primary uppercase mb-2">
            Curated Selection
          </h2>
          <h3 className="text-4xl font-bold tracking-tight text-white">
            HIDDEN GEMS
          </h3>
        </div>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold tracking-widest flex items-center gap-2 uppercase"
          href="#"
        >
          View Entire Archive{" "}
          <span className="material-symbols-outlined text-sm">north_east</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {GEMS_DATA.map((gem) => (
          <TarjetaGem key={gem.id} {...gem} />
        ))}
      </div>
    </section>
  );
}
