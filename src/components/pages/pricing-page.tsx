import {
  // Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedContent from "@/jsrepo/AnimatedContent/AnimatedContent";
import GradientText from "@/jsrepo/GradientText/GradientText";
import SpotlightCard from "@/jsrepo/SpotlightCard/SpotlightCard";
import { Check, X } from "lucide-react";
import { ConfettiButton } from "../ui/confetti";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="mx-auto py-5 w-full h-full">
      <div className="grid lg:grid-cols-3 gap-6 items-stretch">
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
          <PricingCard
            title="Plan Premium"
            price="3,500.000"
            description=""
            link="https://wa.link/p8jazi"
            features={[
              "Estrategia avanzada.",
              "Consultaria 1:1.",
              "Reuniónes semanales de seguimiento.",
              "Fortalecimiento en producción de contenido (Capacitaciones, talleres, etc).",
              "Post-producción del material audiovisual (30 contenidos mensuales).",
              "Análisis semanal de métricas.",
              "Manejo de Anuncios (Meta Ads)",
              "Landing Page optimizada para conversión.",
              "Grupo de apoyo y networking en WhatsApp.",
            ]}
          />
        </AnimatedContent>
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
          <PricingCard
            title="Plan Starter"
            price="1,500.000"
            description=""
            features={[
              "Estrategia avanzada.",
              "Reuniónes quincenales de seguimiento.",
              "Post-producción del material audiovisual (12 contenidos mensuales).",
              "Manejo de Anuncios (Meta Ads)",
              "Grupo de apoyo y networking en WhatsApp."
            ]}
            link="https://wa.link/uw7r25"
            limitations={["Análisis semanal de métricas", "Consultoria 1:1", "Landing Page optimizada para conversión", "Fortalecimiento en producción de contenido (Capacitaciones, talleres, etc)."]}
          />
        </AnimatedContent>
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
          <PricingCard
            title="Plan Standard"
            price="900.000"
            description=""
            features={[
              "Estrategia avanzada.",
              "Reuniónes Mensuales de seguimiento.",
              "Manejo de Anuncios (Meta Ads)",
              
            ]}
            limitations={["Análisis semanal de métricas", "Consultoria 1:1", "Landing Page optimizada para conversión", "Fortalecimiento en producción de contenido (Capacitaciones, talleres, etc).", "Grupo de apoyo y networking en WhatsApp."]}
            link = "https://wa.link/1xeay0"
          />
        </AnimatedContent>
      </div>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  limitations?: string[];
  isPro?: boolean;
  link : string ;
}

function PricingCard({
  title,
  price,
  description,
  features,
  limitations = [],
  link,
}: PricingCardProps) {
  return (
    <SpotlightCard
      className="custom-spotlight-card !p-2 md:!p-8 justify-between flex flex-col !w-full h-full !bg-black/30 backdrop-blur-sm"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <CardHeader>
        <CardTitle className="text-2xl text-gray-200">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          <p className="text-3xl sm:text-4xl font-bold mb-6">
            ${price}
            <span className="text-sm font-normal">/mes</span>
          </p>
        </GradientText>
        <ul className="space-y-2 text-start">
          {features.map((feature, index) => (
            <li key={index} className="flex text-gray-200 items-center">
              <Check className="mr-2 h-4 w-4 min-h-4 min-w-4 text-green-500" />
              {feature}
            </li>
          ))}
          {limitations.map((limitation, index) => (
            <li key={index} className="flex items-center text-muted-foreground">
              <X className="mr-2 h-4 w-4 min-h-4 min-w-4 text-red-500" />
              {limitation}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="w-full flex justify-center">
        <Link href={link}>
          <ConfettiButton type="button" className="btn bg-white/20 w-full">
            Elegir Plan 🔥
          </ConfettiButton>
        </Link>
      </CardFooter>
    </SpotlightCard>
  );
}
