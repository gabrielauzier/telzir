import { X as CloseIcon } from "phosphor-react";
import { MobileMenuContainer, MobileMenuLink } from "../styles";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <header>
        <CloseIcon size={32} color="black" onClick={onClose} />
      </header>

      <main>
        <MobileMenuLink onClick={onClose} to="/">
          Home
        </MobileMenuLink>
        <MobileMenuLink onClick={onClose} to="/plans">
          Planos
        </MobileMenuLink>
        <MobileMenuLink onClick={onClose} to="/simulation">
          Simulação
        </MobileMenuLink>
      </main>
    </MobileMenuContainer>
  );
}
