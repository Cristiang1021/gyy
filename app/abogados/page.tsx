"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Facebook, MapPin, MessageSquare } from "lucide-react";

const defaultAvatar = "/avatar.png"; // Ruta de la imagen predeterminada

const foundingPartners = [
  {
    id: 1,
    name: "Dr. Klever Guamán",
    specialty: "Socio Fundador",
    image: "/klever_guaman.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/7nlxoo", // Agrega el enlace de WhatsApp aquí
  },
  {
    id: 2,
    name: "Abg. Cristian Yuqui",
    specialty: "Socio Fundador",
    image: "/cristian_yuqui.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/qa6wwc", // Agrega el enlace de WhatsApp aquí
  },
  {
    id: 3,
    name: "Abg. Víctor Ríos",
    specialty: "Socio Fundador",
    image: "/victor_rios.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/lusepd", // Agrega el enlace de WhatsApp aquí
  },
  {
    id: 4,
    name: "Abg. Stalin Lloay",
    specialty: "Socio Fundador",
    image: "/stalyn_lloay.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/yz0hhb", // Agrega el enlace de WhatsApp aquí
  },
];

const associates = [
  {
    id: 5,
    name: "Abg. Luis Ilbay",
    specialty: "Asociado",
    image: "/luis_ilbay.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/n81mfi", // Agrega el enlace de WhatsApp aquí
  },
  {
    id: 6,
    name: "Abg. Marco Huilca",
    specialty: "Asociado",
    image: "/marco_huilca.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/nippfd", // Agrega el enlace de WhatsApp aquí
  },
  {
    id: 7,
    name: "Abg. Diego Erazo",
    specialty: "Asociado",
    image: "/diego_erazo.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/jytwnd", // Agrega el enlace de WhatsApp aquí
  },
  {
    id: 8,
    name: "Abg. Juan Cajilema",
    specialty: "Asociado",
    image: "/juan_cujilema.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/joc5nu", // Agrega el enlace de WhatsApp aquí
  },
  {
    id: 9,
    name: "Abg. Sandra Zumba",
    specialty: "Asociada",
    image: "/sandra_zumba.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/cgf8f2", // Agrega el enlace de WhatsApp aquí 
  },
  {
    id: 10,
    name: "Abg. Sandra Cabezas",
    specialty: "Asociada",
    image: "/sandra_cabezas.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/ba9qeh", // Agrega el enlace de WhatsApp aquí 
  },
  {
    id: 11,
    name: "Abg. Erika Vilema",
    specialty: "Asociada",
    image: "/erika_vilema.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/1fbogx", // Agrega el enlace de WhatsApp aquí 
  },
  {
    id: 12,
    name: "Abg. Francis Molina ",
    specialty: "Asociado",
    image: "/francis_molina.jpeg",
    bio: "",
    whatsappLink: "https://wa.link/mcbh6r", // Agrega el enlace de WhatsApp aquí 
  },
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
      <main className="container mx-auto py-8 px-4">
        {/* Founding Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-slate-800">
            Socios Fundadores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foundingPartners.map((partner) => (
              <Card
                key={partner.id}
                className="bg-slate-100 hover:shadow-lg transition duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={partner.image || defaultAvatar}
                      alt={partner.name}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mt-4">{partner.name}</h3>
                  <p className="text-blue-600">{partner.specialty}</p>
                  <p className="text-gray-700 mt-2">{partner.bio}</p>
                  <Button
                    asChild
                    className="mt-4 bg-blue-800 text-white hover:bg-blue-700"
                  >
                    <a href={partner.whatsappLink} target="_blank" rel="noopener noreferrer">
                      Consultas
                    </a>
                  </Button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {associates.map((lawyer) => (
              <Card
                key={lawyer.id}
                className="bg-slate-100 hover:shadow-md transition duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={lawyer.image || defaultAvatar}
                      alt={lawyer.name}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{lawyer.name}</h3>
                  <p className="text-blue-600">{lawyer.specialty}</p>
                  <p className="text-gray-700 mt-2">{lawyer.bio}</p>
                  <Button
                    asChild
                    className="mt-4 bg-blue-800 text-white hover:bg-blue-700"
                  >
                    <a href={lawyer.whatsappLink} target="_blank" rel="noopener noreferrer">
                      Consultas
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
