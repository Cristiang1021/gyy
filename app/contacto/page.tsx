"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
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
        <h1 className="text-4xl font-bold mb-4 text-center text-slate-900">Contáctenos</h1>
        <p className="text-xl text-center mb-12 text-slate-600">Estamos aquí para ayudarle con sus necesidades legales</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-slate-800 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">Información de contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-amber-400" />
                <p>10 de Agosto Y Magdalena Davalos</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-amber-400" />
                <p>0967095478</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-amber-400" />
                <p>info@gyabogados.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-amber-400" />
                <p>Lunes - Viernes: 9am - 6pm</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">Nuestra ubicación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164965!2d-73.98823668459377!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621538149898!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">Programe una consulta</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Estamos disponibles para discutir su caso. Contáctenos por teléfono o correo electrónico para programar una consulta inicial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar ahora
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar correo
                </Button>
              </div>
            </CardContent>
          </Card>
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
