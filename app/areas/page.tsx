"use client";

import Image from "next/image";


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <Image
        src="/404-image.gif" // Asegúrate de tener una imagen adecuada para el error 404
        alt="Página no encontrada"
        width={500}
        height={500}
        className="mb-8"
      />
      <h1 className="text-5xl font-bold text-slate-800 mb-4">Página No Encontrada</h1>
      <p className="text-xl text-slate-600 mb-6">
        Lo sentimos, no hemos podido encontrar la página que buscas. <br />
        Puede que no hayas pagado - Contacta con el administrador.
      </p>
    </div>
  );
}