import BibliotecaHero from "@/components/sections/biblioteca/BibliotecaHero";
import BibliotecaControls from "@/components/sections/biblioteca/BibliotecaControl";
import BibliotecaGrid from "@/components/sections/biblioteca/BibliotecaGrid";

export default function LibraryPage() {
  return (
    <main className="">
      <BibliotecaHero />
      <BibliotecaControls />
      <BibliotecaGrid />
    </main>
  );
}
