"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, BookOpen, ExternalLink, MapPin, MessageSquare, Facebook } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const serviciosEducativos = [
  {
    title: "Proyectos de Investigación Pre y Posgrado",
    description:
      "Asesoramiento y desarrollo de proyectos de investigación para estudiantes de pregrado y posgrado en el ámbito del derecho.",
    icon: GraduationCap,
  },
  {
    title: "Artículos Científicos en Derecho y Educación",
    description:
      "Asistencia en la redacción y publicación de artículos científicos en el campo del derecho y la educación.",
    icon: FileText,
  },
  {
    title: "Estudios de Caso en Derecho y Educación",
    description:
      "Elaboración y análisis de estudios de caso que exploran la intersección entre el derecho y la educación.",
    icon: BookOpen,
  },
];

const publicaciones = [
  {
    title: "Publicaciones en la Revista Sociedad & Tecnología",
    url: "https://revistas.utb.edu.ec/index.php/sr/search/authors/view?givenName=Klever%20Anibal&familyName=Guam%C3%A1n%20Chacha&affiliation=Docencia%20universitaria&country=EC&authorName=Guam%C3%A1n%20Chacha%2C%20Klever%20Anibal",
    description:
      "Autor: Dr. Klever Aníbal Guamán Chacha. Colección de artículos publicados en la revista de la Universidad Técnica de Babahoyo, abordando temas de derecho y educación.",
  },
  {
    title: "La mediación como política social aplicada al fortalecimiento de la cultura de paz en Ecuador",
    url: "http://scielo.sld.cu/scielo.php?script=sci_abstract&pid=S2218-36202020000400265",
    description:
      "Autores: Klever Aníbal Guamán Chacha, Ned Vito Quevedo Arnaiz, Nemis García Arias. Publicado en la Revista Conrado, vol.16 no.76 Cienfuegos jul.-ago. 2020.",
  },
  {
    title: "Contribuciones científicas en ResearchGate",
    url: "https://www.researchgate.net/scientific-contributions/Klever-Anibal-Guaman-Chacha-2175849192",
    description:
      "Perfil de investigación del Dr. Klever Aníbal Guamán Chacha en ResearchGate, mostrando sus publicaciones, proyectos y colaboraciones académicas.",
  },
  {
    title: "Artículo en Dilemas Contemporáneos: Educación, Política y Valores",
    url: "https://dilemascontemporaneoseducacionpoliticayvalores.com/index.php/dilemas/article/view/4337",
    description:
      "Autor: Dr. Klever Aníbal Guamán Chacha. Investigación publicada en la revista 'Dilemas Contemporáneos', abordando temas actuales en el campo del derecho y la educación.",
  },
  {
    title: "Mediation as a social policy applied to strengthening the culture of peace in Ecuador",
    url: "http://scielo.sld.cu/scielo.php?script=sci_abstract&pid=S2218-36202020000400265&lng=es&nrm=iso&tlng=en",
    description:
      "Authors: Klever Aníbal Guamán Chacha, Ned Vito Quevedo Arnaiz, Nemis García Arias. English version of the study on mediation and peace culture in Ecuador, published in Revista Conrado.",
  },
  {
    title: "Publicaciones en UNIANDES EPISTEME",
    url: "https://revista.uniandes.edu.ec/ojs/index.php/EPISTEME/search/authors/view?givenName=Klever%20An%C3%ADbal&familyName=Guam%C3%A1n%20Chacha&affiliation=Extensi%C3%B3n%20Riobamba%2CUniversidad%20Regional%20Aut%C3%B3noma%20de%20los%20Andes&country=EC&authorName=Guam%C3%A1n%20Chacha%2C%20Klever%20An%C3%ADbal",
    description:
      "Autor: Dr. Klever Aníbal Guamán Chacha. Colección de artículos publicados en la revista UNIANDES EPISTEME de la Universidad Regional Autónoma de los Andes, Ecuador.",
  },
  {
    title: "La mediación comunitaria como política pública y social para la solución de conflictos",
    url: "https://dialnet.unirioja.es/servlet/articulo?codigo=8797386",
    description:
      "Autores: Klever Aníbal Guamán Chacha, Ned Vito Quevedo Arnaiz, Nemis García Arias. Publicado en Revista Universidad y Sociedad, ISSN-e 2218-3620, Vol. 14, Nº. S3, 2022, págs. 291-300.",
  },
];

export default function ServiciosEducativos() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white text-slate-800 shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0 ">
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
            <Link href="/nosotros" className="hover:text-amber-600">
              Sobre Nosotros
            </Link>
            <Link href="/abogados" className="hover:text-amber-600">
              Nuestros Abogados
            </Link>
            <Link href="/areas" className="hover:text-amber-600">
              Servicios Legales
            </Link>
            <Link href="/servicios_educativos" onClick={() => setMenuOpen(false)}>
              Servicios Educativos
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
              Servicios Legales
            </Link>
            <Link href="/servicios_educativos" className="hover:text-amber-600">
              Servicios Educativos
            </Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-[#f0f4f8] to-white">
        <motion.div
          className="container mx-auto py-16 px-4"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Hero Section */}
          <motion.div variants={fadeIn} className="text-center mb-12">
            <Image
              src="/educational-logo.png"
              alt="Logo Servicios Educativos"
              width={150}
              height={150}
              className="mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2c3e50]">
              Servicios Educativos
            </h1>
            <p className="text-xl text-[#34495e]">
              Impulsando el conocimiento en el ámbito legal y educativo
            </p>
          </motion.div>

          {/* Servicios */}
          <motion.section variants={fadeIn} className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#3498db]">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviciosEducativos.map((servicio, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex flex-col items-center text-2xl font-semibold text-[#2c3e50]">
                        <div className="bg-[#e74c3c] rounded-full p-6 mb-4">
                          <servicio.icon className="h-16 w-16 text-white" />
                        </div>
                        {servicio.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#34495e] text-center">{servicio.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Publicaciones */}
          <motion.section variants={fadeIn}>
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#3498db]">Conoce Nuestro Trabajo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publicaciones.map((pub, index) => (
                <motion.div key={index} whileHover={{ scale: 1.03 }}>
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[#2c3e50]">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <p className="text-[#34495e] mb-4">{pub.description}</p>
                      <Button asChild variant="outline" className="w-full mt-auto">
                        <Link href={pub.url} target="_blank" rel="noopener noreferrer">
                          Ver Publicación <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
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
                  Servicios Legales
                </Link>
              </li>
              <li>
                <Link href="/servicios_educativos" className="hover:text-amber-400 transition duration-200">
                  Servicios Educativos
                </Link>
              </li>
              <li>
          <Link href="/contacto" className="hover:text-amber-400 transition duration-200">
            Contacto
          </Link>
        </li>
            </ul>
          </div>
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
                </div>
              </li>
              <li className="flex items-center">
                <Facebook className="w-5 h-5 mr-2 text-amber-400" />
                <a
                  href="https://www.facebook.com/GyGFirmadeAbogados"
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
          <p className="text-sm">&copy; 2024 G&G Abogados. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
