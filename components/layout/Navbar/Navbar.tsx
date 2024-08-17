import { Button } from "@/components/ui/button";
import { MenuLink } from "./MenuLink";
import { Container } from "../Container";
import { RxHamburgerMenu } from "react-icons/rx";

export function Navbar() {
  return (
    <Container className="w-full sticky z-50 top-2">
      <nav className="h-14 mt-3 backdrop-blur-sm bg-opacity-50 bg-gray-200 rounded-full px-5 flex items-center justify-between">
        <div className="bg-blue-500 rounded-full h-8 w-8"></div>
        <ul className="hidden lg:flex items-center gap-5">
          <MenuLink>Tratamentos</MenuLink>
          <MenuLink>Preços</MenuLink>
          <MenuLink>Sobre nós</MenuLink>
          <MenuLink>Contato</MenuLink>
        </ul>
        <div className="flex gap-3 cursor-pointer lg:gap-0 items-center justify-center">
          <Button size="sm">Agendar</Button>
          <div className="lg:hidden">
            <RxHamburgerMenu className="text-3xl" />
          </div>
        </div>
      </nav>
    </Container>
  )
}
