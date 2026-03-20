import NavegadorVideojuego from "@/components/sections/tienda/NavegadorVideojuego";
import TiendaSidebar from "@/components/sections/tienda/TiendaSidebar";

export default function StorePage() {
  return (
    <div className="pt-12 pb-12 px-8 max-w-[1920px] mx-auto flex gap-10">
      <TiendaSidebar />
      <NavegadorVideojuego />
    </div>
  );
}
