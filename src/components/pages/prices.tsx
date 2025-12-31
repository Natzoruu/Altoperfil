'use client'
import BlurText from "@/jsrepo/BlurText/BlurText";
import React from "react";
import { figtree } from "../fonts/fonts";
import PricingPage from "./pricing-page";

const Prices = () => {
  return (
    <div
      className={`flex flex-col w-full rounded-3xl ${figtree.className} items-center justify-center space-y-8 max-w-screen-2xl mt-16 p-10 mx-auto z-10`}
    >
      <BlurText
        text="Nuestros Servicios"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-3xl md:text-5xl text-center justify-center items-center text-slate-200 font-bold my-8"
        animationFrom={{ opacity: 0 }}
        animationTo={{ opacity: 1 }}
        onAnimationComplete={() => {}}
      />
      <PricingPage />
    </div>
  );
};

export default Prices;
