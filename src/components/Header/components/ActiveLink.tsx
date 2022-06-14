import { LinkProps, useLocation } from "react-router-dom";
import { NavLink } from "../styles";

export function ActiveLink({ ...rest }: LinkProps) {
  const { pathname } = useLocation();

  const className = pathname === rest.to ? "active" : "";

  return <NavLink {...rest} className={className}></NavLink>;
}
