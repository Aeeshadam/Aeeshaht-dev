import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background-color: white;
  place-items: center;
  margin: 5rem auto;
  width: 70%;
  border-top: 1px solid var(--color-dark--1);
  padding: 3rem 0;
  border-bottom: 1px solid var(--color-dark--1);

  @media (min-width: 882px) {
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    place-items: center;
    max-width: 120rem;
    margin: 10rem auto;
  }
`;

export const Skill = styled.img`
  width: 6rem;
  object-fit: contain;
  padding: 1rem 0;
`;
