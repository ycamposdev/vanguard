import Destacados from "@/components/sections/Destacados";
import Hero from "@/components/sections/Hero";
import Tendencias from "@/components/sections/Tendencias";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Destacados />
      <Tendencias />
    </>
  );
}
