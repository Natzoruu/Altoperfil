"use client"
import { Badge, RevealFx } from "@/once-ui/components";
import React from "react";
import { Text } from "@/once-ui/components";
import AltoPerfilLogo from "../shapes/alto-perfil-logo";
import { figtree } from "@/app/layout";
import { RainbowButton } from "../ui/rainbow-button";
// import { TeamAvatars } from "../ui/team-avatars";

export const Hero = () => {
  return (
    <div
      className={`flex ${figtree.className} flex-col items-center justify-center h-fit space-y-8 max-w-screen-lg mt-16 p-10 mx-auto`}
    >
      <RevealFx speed="medium" delay={0} translateY={0} className="">
        <div className="flex flex-col items-center justify-center space-y-8 max-w-screen-lg pb-10">
          <AltoPerfilLogo className="w-32 h-32 mx-auto mb-20" />
          <button onClick={(e : React.MouseEvent<HTMLButtonElement>)=>{
            e.preventDefault();
            document.getElementById("form")?.scrollIntoView({
              behavior : "smooth"
            })
          }}>
            <Badge className="text-white !bg-transparent" arrow effect>
              Sube de nivel 🚀
            </Badge>
          </button>
          <h1 className="text-4xl font-bold md:text-6xl text-center text-white mt-12">
            ¡Transforma tu Marca Personal en una Potencia Digital!
          </h1>
          {/* <TeamAvatars /> */}
          <Text onBackground="neutral-medium" marginBottom="16">
            Descubre cómo hacer que tu marca personal brille entre miles con
            contenido estratégico, autenticidad y el respaldo de un equipo
            experto comprometido con tu éxito.
          </Text>
          <RainbowButton className="" onClick={(e : React.MouseEvent<HTMLButtonElement>)=>{
            e.preventDefault();
            document.getElementById("pricing")?.scrollIntoView({
              behavior : "smooth"
            })
          }}>
            Quiero potenciar mi Marca Personal
          </RainbowButton>
        </div>
      </RevealFx>
    </div>
  );
};

export default Hero;
