import { Card } from "@/components/common/Card";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { UpperHeader } from "@/components/layout/UpperHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <UpperHeader />
      <Navbar />
      <Container>
        <Section fullHeight ignoreNavbar>
          <div className="block w-1/2">
            <h1 className="text-5xl font-bold leading-tight">Cuidando Do Seu Sorriso Com <span className="text-blue-500">Excelência</span> e <span className="text-blue-500">Carinho</span></h1>
            <div className="flex mt-6 items-center gap-7">
              <Button className="font-extrabold bg-blue-500" size="lg">Agendar</Button>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-lg">10+</span>
                <span className="text-sm">Anos de experiencia!</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image src="/woman.png" width={300} height={300} alt="Woman" />
          </div>
        </Section>
      </Container>
      <Container>
        <Section>
          <div className="flex flex-col text-center w-full">
            <h2 className="text-2xl font-bold">Os tratamentos mais realizados</h2>
            <div className="flex mt-8 gap-5">
              <Card label="Implantes dentários" description="Recupere a beleza e função" image="/implant.jpg" />
              <Card bigger label="Aparelho ortodôntico" description="Dê um sorriso com dentes simetricos" image="/aparelho.jpg" />
              <Card label="Limpeza dental" description="Deixe seus dentes brilhando" image="/wash.jpg" />
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}
