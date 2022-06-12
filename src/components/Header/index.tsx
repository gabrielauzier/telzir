import { useState } from "react";
import { SocialSignInButton } from "../SocialSignInButton";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { Container, MenuIconForMobile } from "./styles";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <Container>
      <div>
        <Navbar />

        <MenuIconForMobile onClick={toggleMobileMenu} />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

        <SocialSignInButton />
      </div>
    </Container>
  );
}
