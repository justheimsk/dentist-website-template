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
        <Section>
          <div className="text-center flex flex-col justify-center md:text-left w-full lg:w-1/2">
            <h1 className="text-5xl font-bold leading-tight">Cuidando Do Seu Sorriso Com <span className="text-blue-500">Excelência</span> e <span className="text-blue-500">Carinho</span></h1>
            <div className="flex mt-6 items-center justify-center md:justify-normal gap-7">
              <Button className="font-extrabold bg-blue-500" size="lg">Agendar</Button>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-lg">10+</span>
                <span className="text-sm">Anos de experiencia!</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-normal items-center gap-3 mt-5">
              <div className="relative flex items-center justify-center w-5 h-5">
                <span className="w-full inline-flex h-full absolute animate-ping rounded-full bg-green-400"></span>
                <span className="w-4 h-4 rounded-full inline-flex relative bg-green-500"></span>
              </div>
              <span className="text-sm">Agende sua avaliação gratuita!</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image className="w-[70%] md:w-[70%] max-w-[500px] object-contain object-center" src="/woman.png" width={1000} height={1000} alt="Woman" />
          </div>
        </Section>
      </Container>
      <Container>
        <Section className="mt-10">
          <div className="flex flex-col text-center w-full">
            <h2 className="text-2xl font-bold">Os tratamentos mais realizados</h2>
            <div className="flex flex-col mt-8 gap-5 md:flex-row">
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
