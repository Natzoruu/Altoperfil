'use client'
import AnimatedContent from "@/jsrepo/AnimatedContent/AnimatedContent";
import BlurText from "@/jsrepo/BlurText/BlurText";
import SpotlightCard from "@/jsrepo/SpotlightCard/SpotlightCard";
import CountUp from "@/jsrepo/CountUp/CountUp";
import TrueFocus from "@/jsrepo/TrueFocus/TrueFocus";
import React from "react";
import {
  BiRightArrowAlt,
  BiSolidShoppingBag,
  BiSolidUserDetail,
} from "react-icons/bi";
import GradientText from "@/jsrepo/GradientText/GradientText";
import { figtree } from "../fonts/fonts";
import { Testimonials } from "./testimonials";

const WhyUs = () => {
  return (
    <div
      className={`w-full flex flex-col ${figtree.className} h-fit items-center justify-center space-y-8 mt-16 mx-auto text-gray-200`}
    >
      <div
        className={`w-full flex flex-col ${figtree.className} h-fit items-center p-10 justify-center space-y-8 mt-16 mx-auto text-gray-200`}
      >
        <BlurText
          text="¿Por qué Elegirnos?"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-5xl font-bold justify-center items-center my-8"
          animationFrom={{ opacity: 0, y: -50 }}
          animationTo={{ opacity: 1, y: 0 }}
          onAnimationComplete={() => {}}
        />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto">
            <div className="flex w-full">
              <SpotlightCard
                className="custom-spotlight-card !p-8 justify-items-start !w-full !bg-black/30 backdrop-blur-sm"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <h3 className="font-bold text-md md:text-xl mb-4">
                  Contenido diseñado para convertir seguidores en clientes
                </h3>
                <div className="grid grid-cols-3 w-full mt-20">
                  <div className="flex flex-col w-full justify-center items-center">
                    <BiSolidUserDetail className="text-5xl" />
                    <span className="text-xs">Seguidores</span>

                    <CountUp
                      from={0}
                      to={100}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-5xl font-bold mt-8"
                      onStart={undefined}
                      onEnd={undefined}
                    />
                  </div>
                  <div className="flex flex-col w-full justify-center items-center">
                    <BiRightArrowAlt className="text-5xl" />
                  </div>
                  <div className="flex flex-col w-full justify-center items-center">
                    <BiSolidShoppingBag className="text-5xl" />
                    <span className="text-xs">Clientes</span>
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="custom-class"
                    >
                      <CountUp
                        from={0}
                        to={100}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-5xl font-bold mt-8"
                        onStart={undefined}
                        onEnd={undefined}
                      />
                    </GradientText>
                  </div>
                </div>
              </SpotlightCard>
            </div>
            <div className="flex w-full">
              <SpotlightCard
                className="custom-spotlight-card !p-8 justify-items-start !w-full !bg-black/30 backdrop-blur-sm"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <h3 className="font-bold text-md md:text-xl text-center w-full mb-20">
                  Contamos una experiencia de más de
                </h3>
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  <CountUp
                    from={0}
                    to={5}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-8xl font-bold"
                    onStart={undefined}
                    onEnd={undefined}
                  />

                  <p className="text-lg font-bold">AÑOS</p>
                </GradientText>

                <h3 className="font-bold text-xl mb-4 w-full text-center mt-20">
                  Creando Marcas Personales
                </h3>
              </SpotlightCard>
            </div>
            <div className="flex justify-center items-center md:col-span-2 w-full h-fit">
              <SpotlightCard
                className="custom-spotlight-card !p-8 justify-items-start !w-full !bg-black/30 backdrop-blur-sm"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <span className="text-3xl md:text-5xl font-bold">
                  <TrueFocus
                    sentence="Enfoque en Resultados"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#fff"
                    animationDuration={0.5}
                    pauseBetweenAnimations={0.5}
                  />
                </span>
              </SpotlightCard>
            </div>
          </div>
        </AnimatedContent>
      </div>

      <Testimonials />
    </div>
  );
};

export default WhyUs;
