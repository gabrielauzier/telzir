import { useLocation } from "react-router-dom";
import { Container, NavLink } from "./styles";

export function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
      <div>
        <nav>
          <NavLink to="/" className={pathname === "/" ? "active" : ""}>
            Home
          </NavLink>
          <NavLink
            to="/plans"
            className={pathname === "/plans" ? "active" : ""}
          >
            Planos
          </NavLink>
          <NavLink
            to="/simulation"
            className={pathname === "/simulation" ? "active" : ""}
          >
            Simulação
          </NavLink>
        </nav>
      </div>
    </Container>
  );
}
