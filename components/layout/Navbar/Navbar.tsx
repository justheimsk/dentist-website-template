import { Button } from "@/components/ui/button";
import { MenuLink } from "./MenuLink";
import { Container } from "../Container";

export function Navbar() {
  return (
    <Container className="w-full sticky top-2">
      <nav className="h-14 mt-3 backdrop-blur-sm bg-opacity-50 bg-gray-200 rounded-full px-5 flex items-center justify-between">
        <div className="bg-blue-500 rounded-full h-8 w-8"></div>
        <ul className="flex items-center gap-5">
          <MenuLink>Tratamentos</MenuLink>
          <MenuLink>Preços</MenuLink>
          <MenuLink>Sobre nós</MenuLink>
          <MenuLink>Contato</MenuLink>
        </ul>
        <Button size="sm">Agendar</Button>
      </nav>
    </Container>
  )
}
