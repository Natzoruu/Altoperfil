"use client"
import React, { useState } from "react";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import { figtree } from "@/app/layout";
import SpotlightCard from "@/jsrepo/SpotlightCard/SpotlightCard";
import Image from "next/image";
import { Input } from "@/once-ui/components";
import GradientText from "@/jsrepo/GradientText/GradientText";
import { ConfettiButton } from "../ui/confetti";
import AnimatedContent from "@/jsrepo/AnimatedContent/AnimatedContent";
import { toast } from "sonner"

const Form = () => {
  const [form, setForm] = useState({
  name: "",
  phone: "",
  email: ""
});
const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        throw new Error("Error en el envío del formulario");
      }

      const data = await res.json();
      console.log("Respuesta del servidor:", data);
      toast("Formulario enviado con éxito");
    } catch (error) {
      console.error(error);
      toast("Hubo un error enviando el formulario");
    }
  };


  return (
    <div className={`w-full text-gray-300 ${figtree.className}`}>
      <VelocityScroll defaultVelocity={3} className="my-[40px] md:my-[80px]">
        Tu Marca Personal Empieza Aquí -
      </VelocityScroll>
      <div className="div flex flex-col w-full max-w-screen-lg mx-auto py-10">
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
            <h3 className="font-bold text-2xl md:text-3xl text-center w-full">
              🌟¡Deja de soñar y empieza a destacar!
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <Image
                className="rounded-2xl"
                src="/img/rocket.jpeg"
                alt="Coohete simbólico de éxito y despegue de la marca personal"
                width={1248}
                height={832}
              />

              <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
                <p className="text-gray-400">
                  Llena el formulario y recibe un diagnóstico{" "}
                </p>
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
                  className="custom-class uppercase !font-bold"
                >
                  gratuito
                </GradientText>
                <Input id="name" label="Nombre" name="name" value={form.name} onChange={handleInput}/>
                <Input id="telefono" label="Teléfono" name="phone" value={form.phone} onChange={handleInput}/>
                <Input id="email" label="Email" name="email" value={form.email} onChange={handleInput}/>
                <ConfettiButton type="submit" className="btn bg-white/20">
                  Quiero Destacar 🚀
                </ConfettiButton>
              </form>
            </div>
          </SpotlightCard>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Form;
