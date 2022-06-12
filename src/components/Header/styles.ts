import styled from "styled-components";
import { Link } from "react-router-dom";
import { List } from "phosphor-react";

export const Container = styled.div`
  height: 5rem;
  border-bottom: 1px solid var(--input-border);

  > div {
    padding: 0 2rem;

    max-width: 1120px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      height: 5rem;
      align-items: center;

      @media (max-width: 768px) {
        display: none;
      }
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

// for mobile devices
export const MenuIconForMobile = styled(List).attrs({
  size: 32,
  color: "black",
  weight: "fill",
})`
  height: 5rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
interface MobileContainerProps {
  isOpen: boolean;
}

export const MobileMenuContainer = styled.div<MobileContainerProps>`
  position: fixed;
  z-index: 999;
  width: 50%;
  height: 100%;
  padding: 5rem 2rem;
  background: var(--body-color);
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  text-align: center;

  box-shadow: 0 2px 8px 0 rgba(0, 0, 200, 0.2),
    0 1px 20px 0 rgba(250, 250, 250, 0.19);

  header {
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
    outline: none;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const MobileMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--text-color);
  cursor: pointer;
`;
