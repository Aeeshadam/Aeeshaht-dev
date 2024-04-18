import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 8rem;
  background-color: var(--color-light--1);
  padding: 2.5rem 5rem;
  display: flex;
`;

export const RightContiner = styled.div`
  display: flex;
  flex: 70%;
  align-items: center;
  justify-content: flex-end;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 30%;
  align-items: flex-start;
`;
