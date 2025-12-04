"use client"
import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import type { Metadata } from "next";
import "./globals.css";
import { Flex, Background, Column, ToastProvider } from "@/once-ui/components";
import { style } from "@/once-ui/resources/config";
import classNames from "classnames";
import { Roboto_Mono, Figtree } from "next/font/google";
import AltoPerfilLogo from "../components/shapes/alto-perfil-logo";
import { Toaster } from "sonner";

// const primary = Inter({
//   variable: "--font-primary",
//   subsets: ["latin"],
//   display: "swap",
// });

export const figtree = Figtree({
  variable: "--font-secondary",
  subsets: ["latin"],
  display: "swap",
});

const code = Roboto_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});


// export const metadata: Metadata = {
// title: "Alto Perfil",
// description: "Alto Perfil es una agencia de marketing digital que se especializa en la creación de contenido y estrategias de marketing para marcas personales.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      lang="es"
      fillHeight
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-border={style.border}
      data-theme={style.theme}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      className={classNames(
        code.variable,
        figtree.variable,
        'p-0'
      )}
    >
      <ToastProvider>
        <Column as="body" fillWidth margin="0" padding="0">
          <Background
            position="fixed"
            mask={{
              cursor: true,
            }}
            gradient={{
              colorEnd: "static-transparent",
              colorStart: "accent-solid-weak",
              display: true,
              height: 100,
              opacity: 100,
              tilt: 0,
              width: 150,
              x: 0,
              y: 0,
            }}

            grid={{
              color: "neutral-alpha-medium",
              display: true,
              height: "var(--static-space-32)",
              opacity: 20,
              width: "var(--static-space-32)",
            }}
          />
          <Background
        position="fixed"
        mask={{
          x: 100,
          y: 0,
          radius: 100,
        }}
        gradient={{
          colorEnd: "static-transparent",
          colorStart: "scheme-cyan-600-50",
          display: true,
          height: 100,
          opacity: 100,
          tilt: 0,
          width: 150,
          x: 0,
          y: 0,
        }}
        grid={{
          color: "neutral-alpha-medium",
          display: true,
          height: "var(--static-space-32)",
          opacity: 10,
          width: "var(--static-space-32)",
        }}
      />
      <Background
        position="fixed"
        mask={{
          x: 40,
          y: 0,
          radius: 60,
        }}
        gradient={{
          colorEnd: "static-transparent",
          colorStart: "scheme-yellow-400",
          display: true,
          height: 100,
          opacity: 70,
          tilt: 0,
          width: 150,
          x: 0,
          y: 0,
        }}
        grid={{
          color: "neutral-alpha-medium",
          display: true,
          height: "var(--static-space-32)",
          opacity: 10,
          width: "var(--static-space-32)",
        }}
      />
      <Background
        position="fixed"
        mask={{
          x: 0,
          y: 0,
          radius: 100,
        }}
        gradient={{
          colorEnd: "static-transparent",
          colorStart: "scheme-blue-400",
          display: true,
          height: 100,
          opacity: 30,
          tilt: 0,
          width: 150,
          x: 0,
          y: 0,
        }}
        grid={{
          color: "neutral-alpha-medium",
          display: true,
          height: "var(--static-space-32)",
          opacity: 10,
          width: "var(--static-space-32)",
        }}
      />
      <Background
        position="fixed"
        mask={{
          x: 70,
          y: 0,
          radius: 70,
        }}
        gradient={{
          colorEnd: "static-transparent",
          colorStart: "scheme-pink-400",
          display: true,
          height: 100,
          opacity: 40,
          tilt: 0,
          width: 150,
          x: 0,
          y: 0,
        }}
      />
      <Background
        position="fixed"
        mask={{
          x: 50,
          y: 0,
          radius: 50,
        }}
        gradient={{
          colorEnd: "static-transparent",
          colorStart: "scheme-green-400",
          display: true,
          height: 100,
          opacity: 80,
          tilt: 0,
          width: 150,
          x: 0,
          y: 0,
        }}
      />
      <Background
        position="fixed"
        mask={{
          x: 50,
          y: 120,
          radius: 100,
        }}
        gradient={{
          colorEnd: "static-transparent",
          colorStart: "accent-solid-weak",
          display: true,
          height: 100,
          opacity: 100,
          tilt: 0,
          width: 150,
          x: 0,
          y: 0,
        }}
        grid={{
          color: "neutral-alpha-medium",
          display: true,
          height: "var(--static-space-32)",
          opacity: 40,
          width: "var(--static-space-32)",
        }}
      />
          {children}
          <Toaster/>
        </Column>
      </ToastProvider>
    </Flex>
  );
}
