import styled from "styled-components";

export const HeroContainer = styled.section`
  margin: 3rem auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  @media (min-width: 882px) {
    flex-direction: row;
    place-items: center;
    max-width: 120rem;
    margin: 10rem auto;
  }
`;

export const HeroLeft = styled.div`
  // width: 50%;
  width: 70%;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 882px) {
    margin: 5rem;
    max-width: 60rem;
    text-align: left;
  }
`;

export const HeroFirst = styled.p`
  color: var(--color-primary--2);
  font-size: 2rem;
  font-weight: 600;
  margin: 3rem 0;
`;

export const HeroH1 = styled.h1`
  color: var(--color-dark--0);
  font-size: 6.5rem;
  font-weight: 600;
  margin: 2rem 0;
`;

export const HeroP = styled.p`
  color: var(--color-dark--1);
  line-height: 2.7rem;
  margin: 3rem 0;
`;

export const HeroRight = styled.div`
  max-width: 60rem;
  margin: 5rem;

  @media (min-width: 882px) {
    margin: 5rem;
    max-width: 60rem;
  }
`;

export const HeroImage = styled.img`
  border-radius: 50%;

  @media (min-width: 882px) {
    max-width: 60rem;
    width: 100%;
  }
`;
