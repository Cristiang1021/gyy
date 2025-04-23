"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Gavel,
  Scale,
  Building2,
  Briefcase,
  DollarSign,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { Facebook, MapPin, MessageSquare } from "lucide-react";
import ChatBot from "@/components/ChatBot";

// Datos organizados por categoría
const categories = {
  publico: [
    {
      title: "Derecho Administrativo",
      description:
        "Asuntos relacionados con organismos gubernamentales, regulaciones y procedimientos administrativos.",
      icon: Building2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Derecho Constitucional",
      description:
        "Asesoramiento en temas constitucionales y defensa de derechos fundamentales.",
      icon: Scale,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Derecho Penal",
      description:
        "Defensa sólida en casos penales, desde delitos menores hasta litigios complejos.",
      icon: Gavel,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Derecho Procesal",
      description:
        "Procedimientos judiciales, garantizando la defensa efectiva de sus intereses.",
      icon: Scale,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Derecho Laboral",
      description:
        "Protección de derechos laborales para empleados y empleadores en disputas y negociaciones.",
      icon: Briefcase,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Derecho Tributario",
      description:
        "Cumplimiento fiscal, planificación tributaria y litigios fiscales.",
      icon: DollarSign,
      color: "bg-indigo-100 text-indigo-600",
    },
  ],
  privado: [
    {
      title: "Derecho Civil",
      description:
        "Asesoramiento en contratos, responsabilidad civil, propiedad y litigios comerciales.",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
  ],
};

export default function PracticeAreas() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"publico" | "privado">("publico");

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
      <main className="bg-slate-50 flex-grow">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
            Servicios Legales
          </h1>
          <p className="text-lg text-center mb-12 text-gray-600 ">
            Explore nuestras áreas de especialización y cómo podemos ayudarle.
          </p>

          {/* Tabs para las categorías */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab("publico")}
              className={`py-2 px-6 font-semibold text-lg rounded-lg transition ${
                activeTab === "publico"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              Derecho Público
            </button>
            <button
              onClick={() => setActiveTab("privado")}
              className={`py-2 px-6 font-semibold text-lg rounded-lg transition ${
                activeTab === "privado"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              Derecho Privado
            </button>
          </div>

          {/* Tarjetas dinámicas basadas en la categoría activa */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories[activeTab].map((area, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${area.color}`}
              >
                <CardHeader className="p-4">
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
        </div>
      </main>

      <ChatBot />

      
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