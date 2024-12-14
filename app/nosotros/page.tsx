"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white text-slate-800 shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="G&Y Abogados"
              width={80}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-8 font-medium">
            <Link href="/nosotros" className="hover:text-amber-600">
              Sobre Nosotros
            </Link>
            <Link href="/abogados" className="hover:text-amber-600">
              Nuestros Abogados
            </Link>
            <Link href="/areas" className="hover:text-amber-600">
              Áreas de Práctica
            </Link>
            <Link href="/contacto" className="hover:text-amber-600">
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
          <div className="absolute top-16 left-0 w-full bg-white text-slate-800 flex flex-col items-center space-y-4 py-4 md:hidden">
            <Link href="/nosotros" onClick={() => setMenuOpen(false)}>
              Sobre Nosotros
            </Link>
            <Link href="/abogados" onClick={() => setMenuOpen(false)}>
              Nuestros Abogados
            </Link>
            <Link href="/areas" onClick={() => setMenuOpen(false)}>
              Áreas de Práctica
            </Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-slate-900">
            Sobre G&Y Abogados
          </h1>

          {/* Sección de Historia */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/oficina.jpeg"
                alt="Oficina de G&Y Abogados"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">
                Nuestra Historia
              </h2>
              <p className="mb-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet porttitor dui tristique tincidunt. 
              Sed volutpat quam ut nisi facilisis, vel pharetra augue eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Phasellus quis imperdiet sem. Vestibulum maximus finibus urna. Morbi vel massa nec leo dapibus sodales. 
              Mauris mauris erat, tempor nec vestibulum eu, ultrices sit amet justo. Suspendisse pretium mauris urna, 
              et ultricies sapien mattis non. Nullam dignissim sagittis egestas. Vivamus odio ante, tincidunt sagittis augue sit amet, volutpat facilisis sem. 
              Etiam efficitur posuere efficitur. Integer in facilisis enim. Morbi eget lorem rhoncus, laoreet ante vel, tempor purus. 
              Sed vulputate hendrerit ex, non aliquet eros egestas vitae. Nam vulputate maximus pellentesque. Integer rutrum in mauris ac congue.
              </p>
              <p className="text-gray-700">

              </p>
            </div>
          </div>

          {/* Sección de Misión y Visión */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-slate-800">
              Nuestra Misión y Visión
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-600">
                    Nuestra Misión
                  </h3>
                  <p className="text-gray-700">
                  Asesorar a la ciudadanía ecuatoriana en temas legales, precautelando sus intereses y en necesidades.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-600">
                    Nuestra Visión
                  </h3>
                  <p className="text-gray-700">
                  Nuestra firma de abogados se proyecta en convertirse en un modelo de 
                  difusión de valores éticos y ofrecer asesoría legal con eficiencia y responsabilidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sección de Valores */}
          <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Integridad", content: "Adherencia a los más altos estándares éticos." },
                { title: "Excelencia", content: "Búsqueda constante de la perfección." },
                {
                  title: "Enfoque en el Cliente",
                  content: "Las necesidades del cliente son nuestra prioridad.",
                },
                { title: "Trabajo en Equipo", content: "Colaboración para lograr los mejores resultados." },
                {
                  title: "Comunidad",
                  content: "Compromiso con el bienestar de nuestra comunidad.",
                },
                { title: "Innovación", content: "Soluciones legales creativas y efectivas." },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-slate-700 p-4 rounded-lg hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold mb-2 text-amber-300">
                    {value.title}
                  </h3>
                  <p>{value.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Logo de la firma */}
    <div className="flex items-center justify-center md:justify-start">
      <Image
        src="/logo.png"
        alt="G&Y Abogados"
        width={80}
        height={40}
        className="object-contain bg-white p-2 rounded shadow-md" // Fondo blanco y sombra
      />
    </div>

    {/* Información de la firma */}
    <div className="flex flex-col justify-center items-center md:items-start">
      <h3 className="text-xl font-semibold mb-2">G&Y Abogados</h3>
      <p className="text-sm text-center md:text-left">
        Expertos en derecho, comprometidos con la justicia y la excelencia legal.
      </p>
    </div>

    {/* Enlaces rápidos */}
    <div className="flex flex-col justify-center items-center md:items-start">
      <h3 className="text-xl font-semibold mb-2">Enlaces Rápidos</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/nosotros" className="hover:text-amber-400 transition duration-200">
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link href="/abogados" className="hover:text-amber-400 transition duration-200">
            Nuestros Abogados
          </Link>
        </li>
        <li>
          <Link href="/areas" className="hover:text-amber-400 transition duration-200">
            Áreas de Práctica
          </Link>
        </li>
        <li>
          <Link href="/contacto" className="hover:text-amber-400 transition duration-200">
            Contacto
          </Link>
        </li>
      </ul>
    </div>

    {/* Contacto */}
    <div className="flex flex-col justify-center items-center md:items-start">
      <h3 className="text-xl font-semibold mb-2">Contacto</h3>
      <ul className="space-y-4">
        <li className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-amber-400" />
          <a
            href="https://maps.app.goo.gl/vTo9ijVYJXon1Y1t8"
            className="hover:text-amber-400 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            10 de Agosto y Magdalena Dávalos
          </a>
        </li>
        <li className="flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-amber-400" />
          <div className="flex flex-col space-y-1">
            <a
              href="https://wa.link/7nlxoo"
              className="hover:text-amber-400 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              0967095478
            </a>
            <a
              href="https://wa.link/13j82r"
              className="hover:text-amber-400 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              0963134740
            </a>
            <a
              href="https://wa.link/qg0avf"
              className="hover:text-amber-400 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              0993871070
            </a>
          </div>
        </li>
        <li className="flex items-center">
          <Facebook className="w-5 h-5 mr-2 text-amber-400" />
          <a
            href ="https://www.facebook.com/GyGFirmadeAbogados"
            className="hover:text-amber-400 transition duration-200"
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
    <p className="text-sm">&copy; 2024 G&Y Abogados. Todos los derechos reservados.</p>
  </div>
</footer>
    </div>
  );
}
