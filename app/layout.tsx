import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"; // Usamos la fuente del HTML original
import "./globals.css";
import Header from "../components/layout/Header"; // Asegúrate que el alias @ apunte a src

// Configuramos la fuente Space Grotesk para optimizar el CLS (Cumulative Layout Shift)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Vanguard",
  description: "La plataforma de videojuegos del futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} dark`}>
      <head>
        {/* Importamos los iconos que extrajimos del HTML */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display">
        {/* El Header VA AQUÍ ADENTRO para heredar estilos y contexto */}
        <Header />

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
