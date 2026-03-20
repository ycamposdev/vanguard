import DescubrirHero from "@/components/sections/descubrir/DescubrirHero";
import Ganadores from "@/components/sections/descubrir/Ganadores";
import OcultaGem from "@/components/sections/descubrir/OcultaGem";
import Proximo from "@/components/sections/descubrir/Proximo";

export default function DiscoverPage() {
  return (
    <main>
      {/* Sección Hero Editorial */}
      <DescubrirHero />
      <OcultaGem />
      <Ganadores />
      <Proximo />
      {/* Aquí iremos agregando las siguientes secciones: Hidden Gems, Bento Grid, etc. */}
    </main>
  );
}
