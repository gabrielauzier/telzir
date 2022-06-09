import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 5rem;
  border-bottom: 1px solid var(--input-border);

  div {
    padding: 0 2rem;

    max-width: 1120px;
    margin: auto;

    nav {
      height: 5rem;
    }
  }
`;

export const NavLink = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 5rem;
  line-height: 5rem;
  color: var(--text-title);
  text-decoration: none;
  font-weight: 500;

  & + a {
    margin-left: 2rem;
  }

  &::after {
    content: "";
    width: 0%;
    height: 3px;
    background-color: var(--base-color);
    border-radius: 3px 3px 0 0;

    position: absolute;
    bottom: 1px;
    left: 0;
    transition: width 0.2s;
  }

  &:hover {
    color: var(--base-color);

    &::after {
      width: 100%;
    }
  }

  &.active {
    color: var(--base-color);
    font-weight: bold;

    &::after {
      width: 100%;
    }
  }
`;
