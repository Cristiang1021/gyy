/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Facebook, MapPin, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const carouselImages = [
  { src: "/hero1.jpeg", alt: "Imagen 1 - G&G Abogados" },
  { src: "/hero2.jpeg", alt: "Imagen 2 - G&G Abogados" },
  { src: "/hero3.jpeg", alt: "Imagen 3 - G&G Abogados" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const phrases = [
    "Estudia: El derecho se transforma constantemente. Si no sigues sus pasos, serás cada día un poco menos abogado.",
    "Piensa: El derecho se aprende estudiando, pero se ejerce pensando.",
    "Trabaja: La abogacía es una ardua fatiga puesta al servicio de las causas justas.",
    "Lucha: Tu deber es luchar por el derecho; pero el día en que encuentres en conflicto el derecho con la justicia, lucha por la justicia.",
    "Sé leal: Leal con tu cliente, al que no debes abandonar hasta que comprendas que es indigno de ti.",
    "Tolera: Tolera la verdad ajena en la misma medida en que quieres que sea tolerada la tuya.",
    "Ten paciencia: En el derecho, el tiempo se venga de las cosas que se hacen sin su colaboración.",
    "Ten fe: Ten fe en el derecho, como el mejor instrumento para la convivencia humana.",
    "Olvida: Concluido el combate, olvida tan pronto tu victoria como tu derrota.",
    "Ama tu profesión: Considera la abogacía como un honor que puedes recomendar con orgullo.",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 2000);

    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 15000);

    return () => {
      clearInterval(interval);
      clearInterval(phraseInterval);
    };
  }, [phrases.length]);;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white text-slate-800 shadow-md">
  <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
    <Link href="/">
      <Image
        src="/logo.png"
        alt="G&G Abogados"
        width={80}
        height={40}
        className="object-contain"
        priority
      />
    </Link>
    <div className="hidden md:flex space-x-8 font-medium">
      <Link href="/nosotros" className="hover:text-blue-600">
        Sobre Nosotros
      </Link>
      <Link href="/abogados" className="hover:text-blue-600">
        Nuestros Abogados
      </Link>
      <Link href="/areas" className="hover:text-blue-600">
        Servicios Legales
      </Link>
      <Link href="/servicios_educativos" className="hover:text-blue-600">
        Servicios Educativos
      </Link>
      <Link href="/contacto" className="hover:text-blue-600">
        Contacto
      </Link>
    </div>
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden p-2 rounded bg-slate-200"
      aria-label="Abrir Menú"
    >
      ☰
    </button>
  </nav>
  {menuOpen && (
    <div className="absolute top-0 right-0 w-64 h-full bg-white text-slate-800 shadow-lg flex flex-col items-start p-6 md:hidden z-50">
      <button
        onClick={() => setMenuOpen(false)}
        className="self-end mb-4 text-slate-800 text-xl font-bold"
      >
        ✖
      </button>
      <Link
        href="/nosotros"
        className="mb-4 hover:text-blue-600"
        onClick={() => setMenuOpen(false)}
      >
        Sobre Nosotros
      </Link>
      <Link
        href="/abogados"
        className="mb-4 hover:text-blue-600"
        onClick={() => setMenuOpen(false)}
      >
        Nuestros Abogados
      </Link>
      <Link
        href="/areas"
        className="mb-4 hover:text-blue-600"
        onClick={() => setMenuOpen(false)}
      >
        Servicios Legales
      </Link>
      <Link
        href="/servicios_educativos"
        className="mb-4 hover:text-blue-600"
        onClick={() => setMenuOpen(false)}
      >
        Servicios Educativos
      </Link>
      <Link
        href="/contacto"
        className="hover:text-blue-600"
        onClick={() => setMenuOpen(false)}
      >
        Contacto
      </Link>
    </div>
  )}
</header>


      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section className="relative h-[70vh] overflow-hidden">
          {carouselImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Su tranquilidad legal, nuestra prioridad
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center">
              Asesoría legal experta en Riobamba y sus alrededores
            </p>
            <div className="space-x-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-900 text-white">
                <Link href="/nosotros">Conozca a Nuestro Equipo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white"
              >
                <Link href="/areas">Nuestros Servicios</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              ¿Por qué elegir G&G Abogados?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Equipo Experimentado",
                  content:
                    "Nuestros abogados cuentan con décadas de experiencia en diversas áreas legales.",
                },
                {
                  title: "Enfoque Centrado en el Cliente",
                  content:
                    "Priorizamos sus necesidades y trabajamos incansablemente para obtener los mejores resultados.",
                },
                {
                  title: "Historial Probado",
                  content:
                    "Nuestros casos de éxito reflejan nuestro compromiso y dedicación con nuestros clientes.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-blue-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quotes Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <div className="text-2xl md:text-3xl italic font-serif text-gray-700">
              &ldquo;{phrases[currentPhrase]}&rdquo;
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Testimonios de Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="bg-slate-700 p-6 rounded-lg italic">
                "Gracias a G&G, resolví una disputa laboral compleja con resultados favorables. Su
                equipo me dio confianza desde el primer día."
              </blockquote>
              <blockquote className="bg-slate-700 p-6 rounded-lg italic">
                "El equipo de G&G manejó mi caso de familia con empatía y profesionalismo. Estoy
                muy agradecida por su apoyo constante."
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ml-4">
          <div className="flex items-center justify-center md:justify-start ml-4">
            <Image
              src="/logo.png"
              alt="G&G Abogados"
              width={80}
              height={40}
              className="object-contain bg-white p-2 rounded shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <h3 className="text-xl font-semibold mb-2">G&G Abogados</h3>
            <p className="text-sm text-center md:text-left">
              Expertos en derecho, comprometidos con la justicia y la excelencia legal.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <h3 className="text-xl font-semibold mb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="hover:text-blue-600 transition duration-200">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/abogados" className="hover:text-blue-600 transition duration-200">
                  Nuestros Abogados
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-blue-600 transition duration-200">
                  Servicios Legales
                </Link>
              </li>
              <li>
                <Link href="/servicios_educativos" className="hover:text-blue-600 transition duration-200">
                  Servicios Educativos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-blue-600 transition duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <h3 className="text-xl font-semibold mb-2">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <a
                  href="https://maps.app.goo.gl/vTo9ijVYJXon1Y1t8"
                  className="hover:text-blue-400 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  10 de Agosto y Magdalena Dávalos
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="https://wa.link/7nlxoo"
                    className="hover:text-blue-400 transition duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    0967095478
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Facebook className="w-5 h-5 mr-2 text-blue-400" />
                <a
                  href="https://www.facebook.com/GyGFirmadeAbogados"
                  className="hover:text-blue-400 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm">&copy; 2024 G&G Abogados. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
