'use client'
import React from "react";
import SpotlightCard from "@/jsrepo/SpotlightCard/SpotlightCard";
import {
  BiBullseye,
  BiCameraMovie,
  BiRocket,
  BiTrendingUp,
} from "react-icons/bi";
import BlurText from "@/jsrepo/BlurText/BlurText";
import AnimatedContent from "@/jsrepo/AnimatedContent/AnimatedContent";
import { figtree } from "../fonts/fonts";

const Services = () => {
  return (
    <div
      className={`flex flex-col items-center ${figtree.className} justify-center space-y-8 max-w-screen-lg mt-16 p-10 mx-auto text-gray-200`}
    >
      <BlurText
        text="¿Qué hacemos por ti?"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-3xl md:text-5xl text-center justify-center items-center font-bold my-8"
        animationFrom={{ opacity: 0 }}
        animationTo={{ opacity: 1 }}
        onAnimationComplete={() => {}}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
        <div className="flex w-full">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <SpotlightCard
              className="custom-spotlight-card !p-8 justify-items-start !w-full !bg-black/30 backdrop-blur-sm"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <BiBullseye className="text-5xl !mb-4" />
              <h3 className="font-bold text-xl mb-4">
                Estrategia Personalizada
              </h3>
              <p className="text-gray-400">
                Creamos un plan estratégico diseñado a la medida de tus metas,
                tu audiencia y tu visión.
              </p>
            </SpotlightCard>
          </AnimatedContent>
        </div>

        <div className="flex w-full">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <SpotlightCard
              className="custom-spotlight-card !p-8 justify-items-start !w-full !bg-black/30 backdrop-blur-sm"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <BiCameraMovie className="text-5xl !mb-4" />
              <h3 className="font-bold text-xl mb-4">
                Postproducción de Contenido
              </h3>
              <p className="text-gray-400">
                Videos dinámicos, diseño gráfico
                impactante y contenido visual de alta calidad.
              </p>
            </SpotlightCard>
          </AnimatedContent>
        </div>

        <div className="flex w-full">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <SpotlightCard
              className="custom-spotlight-card !p-8 justify-items-start !w-full !bg-black/30 backdrop-blur-sm"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <BiTrendingUp className="text-5xl !mb-4" />
              <h3 className="font-bold text-xl mb-4">Optimización de Redes</h3>
              <p className="text-gray-400">
                Conecta con tu público de manera auténtica, fortalece tu
                comunidad y atrae nuevos seguidores.
              </p>
            </SpotlightCard>
          </AnimatedContent>
        </div>

        <div className="flex w-full">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <SpotlightCard
              className="custom-spotlight-card !p-8 justify-items-start !w-full !bg-black/30 backdrop-blur-sm"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <BiRocket className="text-5xl !mb-4" />
              <h3 className="font-bold text-xl mb-4">
                Crecimiento real
              </h3>
              <p className="text-gray-400">
                Convertimos tus perfiles en herramientas para atraer clientes y
                oportunidades.
              </p>
            </SpotlightCard>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default Services;
