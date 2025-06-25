"use client";

import { Button } from "./Button";
import React, { useState } from "react";

export default function HomePage() {
  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen bg-red-100`}
    >
      <div className="w-full max-w-4xl bg-pink-400 rounded-2xl shadow-2xl flex flex-col h-[750px]">
        <div className="my-8 w-full max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4 ">
          <h1 className="text-2xl font-bold text-center mb-4">
            Buttons examples
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Botón primario habilitado
              </h2>
              <Button
                label="Mostrar alerta"
                onClick={() => alert("¡Alerta desde el botón primario!")}
                className="w-full"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Botón secundario habilitado
              </h2>
              <Button
                label="Cambiar color de fondo"
                onClick={() => (document.body.style.background = "#fbbf24")}
                className="w-full bg-yellow-500 hover:bg-yellow-600"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Botón primario deshabilitado
              </h2>
              <Button
                label="Deshabilitado"
                onClick={() => {}}
                className="w-full"
                disabled
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Botón secundario deshabilitado
              </h2>
              <Button
                label="No disponible"
                onClick={() => {}}
                className="w-full bg-gray-400"
                disabled
              />
            </div>
            {/* Botón con contador */}
            <div>
              <h2 className="text-lg font-semibold mb-1">Botón con contador</h2>
              <CounterButton />
            </div>
            {/* Botón que muestra la hora actual */}
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Botón que muestra la hora
              </h2>
              <Button
                label="Mostrar hora"
                onClick={() => alert(new Date().toLocaleTimeString())}
                className="w-full bg-green-500 hover:bg-green-600"
              />
            </div>
            {/* Botón que redirige */}
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Botón de redirección
              </h2>
              <Button
                label="Ir a Google"
                onClick={() => window.open("https://www.google.com", "_blank")}
                className="w-full bg-purple-500 hover:bg-purple-600"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Componente reutilizable con estado local
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <Button
      label={`Contador: ${count}`}
      onClick={() => setCount(count + 1)}
      className="w-full bg-indigo-500 hover:bg-indigo-600"
    />
  );
}
