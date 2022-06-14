import { CaretLeft } from "phosphor-react";
import { MobileMenuContainer } from "../styles";
import { ActiveLink } from "./ActiveLink";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <header>
        <CaretLeft size={32} onClick={onClose} />
      </header>

      <main>
        <ActiveLink onClick={onClose} to="/">
          Home
        </ActiveLink>
        <ActiveLink onClick={onClose} to="/plans">
          Planos
        </ActiveLink>
        <ActiveLink onClick={onClose} to="/simulation">
          Simulação
        </ActiveLink>
      </main>
    </MobileMenuContainer>
  );
}
