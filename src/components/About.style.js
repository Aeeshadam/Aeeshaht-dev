import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  background: rgb(234, 237, 240);
  background: linear-gradient(
    24deg,
    rgba(234, 237, 240, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const InnerAboutContainer = styled.div`
  text-align: center;
  margin: 5rem auto;
  width: 70%;
  max-width: 120rem;
`;

const Tittle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-primary--2);
  margin: 3rem 0;
  text-transform: uppercase;
`;

const AboutP = styled.p`
  color: var(--color-dark--1);
  line-height: 2.5rem;
  margin-bottom: 1rem;
`;

export { AboutContainer, InnerAboutContainer, Tittle, AboutP };
