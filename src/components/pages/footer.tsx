import React from "react";
import { figtree , code} from "../fonts/fonts";
import { ScratchToReveal } from "../ui/scratch-to-reveal";

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      <div
        className={`flex flex-col justify-center items-center w-full max-w-screen-lg mx-auto text-gray-200 p-10 ${figtree.className}`}
      >
        <ScratchToReveal
          width={300}
          height={100}
          minScratchPercentage={70}
          className="flex flex-col mx-auto items-center justify-center overflow-hidden rounded-2xl mb-10 border-2 bg-gray-100 text-slate-600"
          gradientColors={["#40ffaa", "#4079ff", "#40ffaa"]}
        >
          <p>Pss.. Ten un regalo 🎁</p>
          <p>
            <code className="text-2xl font-bold">2025M</code>
          </p>
          <p className="text-xs">¡Envía este código para obtener un 25% de descuento!</p>
        </ScratchToReveal>
        <p>
          © {new Date().getFullYear()} Alto Perfil. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
