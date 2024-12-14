"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Facebook, MapPin, MessageSquare } from "lucide-react";

const defaultAvatar = "/avatar.png"; // Ruta de la imagen predeterminada

const foundingPartners = [
  {
    id: 1,
    name: "Dr. Klever Guamán",
    specialty: "Socio Fundador",
    image: "/klever_guaman.jpeg",
    bio: "Texto / descripción etc.",
  },
  {
    id: 2,
    name: "Abg. Cristian Yuqui",
    specialty: "Socio Fundador",
    image: "/cristian_yuqui.jpeg",
    bio: "Texto / descripción etc.",
  },
];

const associates = [
  { id: 3, name: "Abg. Luis Ilbay", specialty: "Titulo / especialidad, etc.", image: "/luis_ilbay.jpeg", bio: "Texto / descripción etc." },
  { id: 4, name: "Abg. Marco Huilca", specialty: "Titulo / especialidad, etc.", image: "/marco_huilca.jpeg", bio: "Texto / descripción etc." },
  { id: 5, name: "Abg. Víctor Ríos", specialty: "Titulo / especialidad, etc.", image: "/victor_rios.jpeg", bio: "Texto / descripción etc." },
  { id: 6, name: "Abg. Stalin Lloay", specialty: "Titulo / especialidad, etc.", image: null, bio: "Texto / descripción etc." },
  { id: 7, name: "Abg. Diego Erazo", specialty: "Titulo / especialidad, etc.", image: null, bio: "Texto / descripción etc." },
  { id: 8, name: "Abg. Sandra Zumba", specialty: "Titulo / especialidad, etc.", image: null, bio: "Texto / descripción etc." },
  { id: 9, name: "Abg. Sandra Cabezas", specialty: "Titulo / especialidad, etc.", image: null, bio: "Texto / descripción etc." },
  { id: 10, name: "Abg. Juan Cujilema", specialty: "Titulo / especialidad, etc.", image: null, bio: "Texto / descripción etc." },
  { id: 11, name: "Abg. Brayan Gavin", specialty: "Titulo / especialidad, etc.", image: null, bio: "Texto / descripción etc." },
  { id: 12, name: "Abg. Javier Macas", specialty: "Titulo / especialidad, etc.", image: null, bio: "Texto / descripción etc." },
];

export default function OurLawyers() {
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
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-slate-900">
          Nuestros Abogados
        </h1>

        {/* Founding Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-slate-800">
            Socios Fundadores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foundingPartners.map((partner) => (
              <Card key={partner.id} className="bg-slate-100 hover:shadow-lg transition duration-300">
                <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={partner.image || defaultAvatar}
                      alt={partner.name}
                      layout="fill"
                      objectFit="contain"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <h3 className="text-2xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-amber-600 mb-4">{partner.specialty}</p>
                    <p className="text-gray-700">{partner.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Associates */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center text-slate-800">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {associates.map((lawyer) => (
              <Card key={lawyer.id} className="hover:shadow-md transition duration-300">
                <CardContent className="p-6">
                  <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={lawyer.image || defaultAvatar}
                      alt={lawyer.name}
                      layout="fill"
                      objectFit="contain"
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 text-center">
                    {lawyer.name}
                  </h3>
                  <p className="text-amber-600 text-center">{lawyer.specialty}</p>
                  <p className="text-gray-700 mt-2 text-center text-sm">{lawyer.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
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
