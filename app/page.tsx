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
            <div className="flex items-center mt-7 gap-3">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              <span className="text-sm font-bold">Primeira avaliação gratuita!</span>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image src="/woman.png" width={300} height={300} alt="Woman" />
          </div>
        </Section>
      </Container>
    </>
  );
}
