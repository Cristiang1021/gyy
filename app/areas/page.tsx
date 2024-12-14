"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, Scale, Building2, Users, Briefcase, UserPlus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, MessageSquare } from "lucide-react";

const practiceAreas = [
  {
    title: "Derecho Penal",
    description:
      "Defendemos sus derechos en casos penales, desde delitos menores hasta casos complejos, con una estrategia sólida y experiencia en litigios.",
    icon: Gavel,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Derecho Civil",
    description:
      "Manejamos una amplia gama de asuntos civiles, incluyendo contratos, propiedad, responsabilidad civil y litigios comerciales.",
    icon: Scale,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Derecho Administrativo",
    description:
      "Le representamos en asuntos relacionados con organismos gubernamentales, regulaciones y procedimientos administrativos.",
    icon: Building2,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Derecho Familiar",
    description:
      "Ofrecemos orientación compasiva en divorcios, custodia de niños, adopciones y otros asuntos familiares delicados.",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Derecho Laboral",
    description:
      "Protegemos los derechos de empleados y empleadores en disputas laborales, negociaciones y cumplimiento normativo.",
    icon: Briefcase,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Mediación",
    description:
      "Facilitamos la resolución de conflictos fuera de los tribunales, ayudando a las partes a llegar a acuerdos mutuamente beneficiosos.",
    icon: UserPlus,
    color: "bg-indigo-100 text-indigo-600",
  },
];

export default function PracticeAreas() {
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
      <main className="bg-slate-50 flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-slate-900">Nuestras Áreas de Práctica</h1>
          <p className="text-xl text-center mb-12 text-slate-600">
            Experiencia legal integral para todas sus necesidades
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className={`${area.color} p-4`}>
                  <CardTitle className="flex items-center text-2xl font-semibold">
                    <area.icon className="mr-2 h-6 w-6" />
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 bg-white">
                  <p className="text-slate-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-slate-800 text-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-center">¿Necesita asesoramiento legal?</h2>
            <p className="text-center mb-8">
              Nuestro equipo de expertos está listo para ayudarle en cualquiera de estas áreas de práctica.
            </p>
            <div className="flex justify-center">
              <a
                href="/contacto"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-2 px-6 rounded-full transition duration-300"
              >
                Solicite una Consulta
              </a>
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
