import { ActiveLink } from "./ActiveLink";

export function Navbar() {
  return (
    <nav>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/plans">Planos</ActiveLink>
      <ActiveLink to="/simulation">Simulação</ActiveLink>
    </nav>
  );
}
