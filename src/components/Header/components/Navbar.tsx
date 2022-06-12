import { useLocation } from "react-router-dom";
import { NavLink } from "../styles";

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav>
      <NavLink to="/" className={pathname === "/" ? "active" : ""}>
        Home
      </NavLink>
      <NavLink to="/plans" className={pathname === "/plans" ? "active" : ""}>
        Planos
      </NavLink>
      <NavLink
        to="/simulation"
        className={pathname === "/simulation" ? "active" : ""}
      >
        Simulação
      </NavLink>
    </nav>
  );
}
