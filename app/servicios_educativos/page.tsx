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
    color: "bg-red-400", // Color para el ícono
  },
  {
    title: "Artículos Científicos en Derecho y Educación",
    description:
      "Asistencia en la redacción y publicación de artículos científicos en el campo del derecho y la educación.",
    icon: FileText,
    color: "bg-[#3498db]", // Azul
  },
  {
    title: "Estudios de Caso en Derecho y Educación",
    description:
      "Elaboración y análisis de estudios de caso que exploran la intersección entre el derecho y la educación.",
    icon: BookOpen,
    color: "bg-[#9b59b6]", // Púrpura
  },
];

const publicaciones = [
  {
    title: "¿Investigación científica, educativa o pedagógica en los trabajos del sistema de educación superior?",
    url: "https://revistas.utb.edu.ec/index.php/sr/search/authors/view?givenName=Klever%20Anibal&familyName=Guam%C3%A1n%20Chacha&affiliation=Docencia%20universitaria&country=EC&authorName=Guam%C3%A1n%20Chacha%2C%20Klever%20Anibal",
    description:
      "Autores: Klever A. Guamán Chacha, Luz M. Mosquera Arguello, Alan J. Orozco García y Nelis E. García Alcívar. El artículo analiza el tipo de investigación (científica, educativa o pedagógica) utilizada en trabajos universitarios, sus diferencias epistemológicas y metodológicas, y evidencia el predominio de enfoques científicos sobre los educativos y pedagógicos.",
  },  
  {
    title: "El positivismo y el positivismo jurídico",
    url: "http://scielo.sld.cu/scielo.php?script=sci_abstract&pid=S2218-36202020000400265",
    description:
      "Autores: Klever A. Guamán Chacha, Eduardo L. Hernández Ramos y Stalin I. Lloay Sánchez. El artículo expone las bases del positivismo como corriente filosófica y del positivismo jurídico, destacando sus fundamentos epistemológicos y su vigencia en la práctica del derecho.",
  },  
  {
    title: "La teoría del delito: fundamentos filosóficos",
    url: "https://www.researchgate.net/publication/352036472_La_teoria_del_delito_fundamentos_filosoficos",
    description: "Autores: Klever A. Guamán Chacha, Víctor M. Ríos Guamán y Cristian S. Yuqui Villacrés. Este artículo examina los fundamentos filosóficos de la teoría del delito, identificando que en las obras revisadas se abordan los elementos de dicha teoría sin determinar la posición teórica ni los fundamentos filosóficos subyacentes."
  },
  {
    title: "El derecho a la salud y el incumplimiento del aislamiento de las personas infectadas por Covid-19",
    url: "https://www.researchgate.net/publication/355329794_El_derecho_a_la_salud_y_el_incumplimiento_del_aislamiento_de_las_personas_infectadas_por_Covid-19",
    description: "Autores: César E. Ochoa Díaz, Klever A. Guamán Chacha, Eduardo L. Hernández Ramos y Jessica R. Castillo Vizuete. Este estudio analiza las implicaciones legales y éticas del incumplimiento del aislamiento por parte de personas infectadas con Covid-19, resaltando la necesidad de medidas punitivas para prevenir la propagación del virus."
  },
  {
    title: "El proyecto de investigación: la metodología de la investigación científica o jurídica",
    url: "https://www.researchgate.net/publication/353827174_El_proyecto_de_investigacion_la_metodologia_de_la_investigacion_cientifica_o_juridica",
    description: "Autores: Klever A. Guamán Chacha, Eduardo L. Hernández Ramos y Stalyn I. Lloay Sánchez. El artículo identifica las metodologías, paradigmas y métodos utilizados en proyectos de investigación en programas de derecho de universidades ecuatorianas, concluyendo que a menudo se emplean metodologías sin una clara comprensión de sus fundamentos epistemológicos."
  }, 
  {
    title: "Manifestaciones y consecuencias de la violencia política de género en Ecuador",
    url: "https://doi.org/10.46377/dilemas.v12i1.4337",
    description:
      "Autores: Klever A. Guamán Chacha, Eduardo L. Hernández Ramos y Marcos S. Huilca Herrera. El artículo estudia la violencia política de género en Ecuador desde un enfoque mixto, identificando formas como acoso verbal, exclusión y violencia digital, y evidenciando su impacto en la participación de las mujeres y la brecha entre ley y práctica.",
  },  
  {
    title: "El embarazo de adolescentes y sus consecuencias sociales",
    url: "https://revista.uniandes.edu.ec/ojs/index.php/EPISTEME/article/view/1565",
    description: "Autores: Eduardo I. Hernández Ramos, Klever A. Guamán Chacha y César E. Ochoa. El artículo analiza el impacto del embarazo adolescente en la salud, educación y entorno social de las jóvenes, destacando las consecuencias psicológicas, emocionales y educativas que enfrentan, así como la influencia de factores familiares y comunitarios."
  },  
];

export default function ServiciosEducativos() {
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
          {/* Servicios */}
          <motion.section variants={fadeIn} className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#3498db]">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviciosEducativos.map((servicio, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex flex-col items-center text-center text-2xl font-semibold text-[#2c3e50]">
                        <div className={`${servicio.color} rounded-full p-6 mb-4`}>
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