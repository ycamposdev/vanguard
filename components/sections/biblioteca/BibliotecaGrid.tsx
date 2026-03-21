import React from "react";
import TarjetaVideojuego from "./TarjetaVideojuego";
import { videojuegoService } from "@/services/game.service";

export default async function BibliotecaGrid() {
  const videojuegos = await videojuegoService();

  const games = [
    {
      id: 1,
      title: "God of War",
      genre: "Action / Adventure",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDUybzXDvteffU55ghWr41FfV2SA-CmHPZJPaNwaGPoTO0-VDdudTWxacAaRY1IMYtIOblSUg5sHtsN2If9Lfu724ZDBX4tbYsOW48kYyTbNQujGZyqMVWPEkUsQ4txcuzQnbnjT7dN5QvTQEkF0jSUzvMQA54zbckACj5T5OFbGrT4427F7dlhKZp6kDP2-NCYIbCDbDrn0pCd8i1aAcaw6Yf1h2O7_l8YvvPN20Mnx8RBJ2rCPQZodyoa2Ay8GcoESmdVFPGVeHlJ",
      isInstalled: true,
    },
    {
      id: 2,
      title: "Elden Ring",
      genre: "RPG / Fantasy",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDcUQkV7md2truIo007RNDYgemYx3lWF04dHOq1IqdNpMfDpF52Yv4Av-Gsmj9w-l23F8tYQ4I8OY_JQUxQrzVKioiW3lEpiQzkN5Dzi6d1yoQdmaZhuOgBiCGeAAC0ra4OjGimHP2PhxAXQ5bH6Y0MNN4EDS2eWnpPe-26QEqmYtOAEtHueES5WrMjjoLzWjQDe2qexnadsc2kmAJ2rlBXRcsaZCS-CtOUQKbIAwsaot6lNeDvD5tA1NOI8OH9BWAizfdakaCkD4t6",
      isInstalled: true,
    },
    {
      id: 3,
      title: "Cyberpunk 2077",
      genre: "Action / RPG",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBb1nlVBNmEF9jMZmVaDg5BHKDHF8SN4kaFxMWcYMoRKLnVgO3KEzyXXvwU4rIheZDiaQN115bxBb4aaP4HIbdSarZpV0wzbDcygzc66VQVws4kRTSKh9iKAQr7t3awHB5wF_Ni92AQqxmj6Y7az0zZeLPX-NJAO6l6YBny54jYe3bAyJ6ZITztqiGtQyPSowrGrxAL9d5-7hi8jwPxgkehU_ymOD38u3-bKX7H7AQEXf6Va8bYGRRxDy2JCGc598IAMpoXClGkCWQA",
      isInstalled: false,
    },
    {
      id: 4,
      title: "Journey",
      genre: "Adventure / Indie",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuANAyA_rMfuAhBofil3yJiuYepbUgaHYB39q9Cu1qQYw-drWl4SS9b87UnIM--MetI36bAGYXCzAn0WOnJae8rPyHt4u7dTW-iG-BAhi47gwBV7uwe4UlDT_3BMT8Pm6K51ilPcCB14y8ADR3Do_EHk5uvjAtVUJ9VCMdgBmvn4EJkwmcIwpucH5lXHT1n55PlMHFhkUGdvGfFERu1eb4uSZmyAR5mcE7iZ3BHRu6wxI32uO00xrCRpIi_OqpAJYtDE3xaIoeyDJacm",
      isInstalled: true,
    },
    {
      id: 5,
      title: "Horizon Zero Dawn",
      genre: "Action / RPG",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDIi8I3FYpwgeczQ53rc5JEcJak_0Mj5SxtWe-shVJL6j5pfGbSv053qJ8WsGNM0uKARJI0wv_vMhV0rZoXfLattKf2Cx0T_3TuJRCDC_8xQK93HKnp3jn_dLssBSK4fWqD4g-DQZk6jTnDbzTYZ-iC14iJvkFLD6OyFqqBT_BfIpWqdgAkQNBkTIkeMaJFwo5KO33cr7FkgohkySKj-itk_epogEIh3HqD-CNgoYBrfVjBRjEBLt32bqekcXWIC-vsPHy3nMl1bt0f",
      isInstalled: true,
    },
    {
      id: 6,
      title: "Ghost of Tsushima",
      genre: "Action / Samurai",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-UtIslY2lV8vaI9A5aaRfMpW2Tea27ndI78IIMUM4ZMFpFaJ1Tn_yLsQfanzumRtYditsIKNKXvEa9E_iP3GYsXO5m8cfRuFKsWwThQ-w-dOuPY5EoEta-qQoxAaUeAgIudnvrytkj0W7G9AhjKWLBABz2ErlEtQ0m6Ncayz-xq1wweOiv5dO4lM05acKK1pqcyuUGmx5kmrxY3gspA_-V48qvbO3OZJLHa4L-DIWcZB8JlNfRNkNJkzx_pPY9yJQMhmaxMptyOY5",
      isInstalled: false,
    },
    {
      id: 7,
      title: "Red Dead Redemption 2",
      genre: "Western / Open World",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDktEJMaMhKNdbuvsoNL5iOUZaXXhhkKYblKsduC_nVRTA3EeB8mxzwPoKlIxIgXKC3sRSYtUqEkGGdTVmDvILJmSh5x84q7j2HC4HTqhbbVFMhLvLRdZePVINfA4SevNOtSpd6vWl4zJjTyDEqnyToXhgtOrgTf-4d8oDiGPMtJ1RuXsiy537xsi1kSMC0HjLoQcKnHs523os3mIQbFqClinrI7gRvj29pGN5opK0-A-I28JY7boU6uvGZuYqxolFx_wdCZR0ILVfQ",
      isInstalled: true,
    },
    {
      id: 8,
      title: "Spiderman",
      genre: "Action / Hero",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAePBO4BUKx5HTRyvOyYkvkmVRNJkUcMVSqH_8318_AufOH0x9XqKorW_giepOhi9-gLj-wj-ukakl7o5s5pkn04253V6TrLxypHe7VBe2HPzsF5kU3pkrFin_sVvtDAznxVBNz26nf0pB6-oKT2VgCSnqepBY3RnrAQ_wFAnGO0VmjpfJ-RofELiSoncz_EajcFwaS4u7oHmrnhm_R_jHCzt2uckVvqx8u7ZcL-CiTJQJzYxL781lKz4UPFSO0PnBmNFbMOg7uF5UA",
      isInstalled: true,
    },
  ];

  return (
    <section className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {videojuegos.map((game: any) => (
        <TarjetaVideojuego
          key={game.id}
          title={game.titulo}
          genre={game.categoria}
          image={game.imagen}
          isInstalled={game.isInstalled}
        />
      ))}
    </section>
  );
}
