import Footer from "@/components/pages/footer";
import Form from "@/components/pages/form";
import { Hero } from "@/components/pages/hero";
import Prices from "@/components/pages/prices";
import Services from "@/components/pages/services";
import WhyUs from "@/components/pages/why-us";
import { Flex } from "@/once-ui/components";

export default function Home() {
  return (
    <Flex
      as="header"
      fillHeight
      direction="column"
      background="page"
      align="center"
      className="p-0"
    >
      <section id = "hero">
        <Hero />
      </section>
      <section id = "services">
        <Services />
      </section>
      <section id = "WhyUs">
        <WhyUs />
      </section>
      <section id = "pricing">
        <Prices />
      </section>
      <section id = "form">
        <Form />
      </section>
      <section id = "footer">
        <Footer />
      </section>
    </Flex>
  );
}
