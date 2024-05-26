import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  background: rgb(234, 237, 240);
  background: linear-gradient(
    24deg,
    rgba(234, 237, 240, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  max-width: 100rem;
  margin: 5rem auto;
  padding: 0 5rem;
  flex-direction: column;

  @media (min-width: 882px) {
    flex-direction: row;
  }
`;

const AboutImage = styled.img`
  object-fit: cover;
  max-width: 40rem;
  width: 100%;

  @media (min-width: 882px) {
    margin-bottom: 2rem;
    width: 50%;
  }
`;

const AboutContent = styled.div`
  flex: 1;

  max-width: 40rem;
  width: 100%;

  @media (min-width: 882px) {
    padding-left: 5rem;
    width: 50%;
    max-width: 60rem;
  }
`;

const Tittle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-primary--2);
  margin: 3rem 0;
  text-transform: uppercase;
`;

const AboutTittle = styled(Tittle)`
  text-align: center;

  @media (min-width: 882px) {
    text-align: left;
  }
`;
const AboutP = styled.p`
  color: var(--color-dark--1);
  line-height: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;

  @media (min-width: 882px) {
    font-size: 1.6rem;
  }
`;

export {
  AboutContainer,
  AboutImage,
  AboutContent,
  Tittle,
  AboutP,
  AboutTittle,
};
