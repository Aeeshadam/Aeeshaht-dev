import styled from "styled-components";
import { ReactComponent as MenuIconSvg } from "../icons/Menu.svg";

export const NavbarContainer = styled.nav`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 10px 0px;
  background-color: var(--color-light--1);
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    padding: 1rem 5rem;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const MenuItems = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;

    margin: 1rem 0;
  }
`;

export const MenuItem = styled.li`
  padding: 1rem 0;
`;

export const MenuIcon = styled(MenuIconSvg)`
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-dark--1);
  transition: var(--transition);
  cursor: pointer;
  width: 100%;

  &:hover {
    color: var(--color-primary--2);
    font-weight: 500;
    padding-left: 1rem;

    @media (min-width: 768px) {
      padding-left: 0;
    }
  }
`;
