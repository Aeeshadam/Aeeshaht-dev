import styled from "styled-components";

export const HeroContainer = styled.section`
  margin: 10rem auto 5rem auto;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  background-color: white;
  max-width: 60rem;

  @media (min-width: 882px) {
    flex-direction: row;
    place-items: center;
    max-width: 120rem;
    margin: 5rem auto;
    margin: 15rem auto 5rem auto;
  }
`;

export const HeroLeft = styled.div`
  //width: 70%;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  max-width: 80%;

  @media (min-width: 882px) {
    margin: 5rem;
    max-width: 50rem;
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

  @media (min-width: 882px) {
    font-size: 8rem;
  }
`;

export const HeroP = styled.p`
  color: var(--color-dark--1);
  line-height: 2.7rem;
  margin: 3rem 0;

  font-size: 1.5rem;

  @media (min-width: 882px) {
    font-size: 1.8rem;
  }
`;

export const HeroRight = styled.div`
  max-width: 60rem;
  margin: 5rem;
  width: 70%;
  margin: 0 auto;
`;

export const HeroImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  animation-name: blobby;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-direction: alternate;

  @keyframes blobby {
    0% {
      border-radius: 50%;
    }
    20% {
      border-radius: 41% 59% 41% 59% / 53% 51% 49% 47%;
    }
    40% {
      border-radius: 43% 57% 41% 59% / 53% 52% 48% 47%;
    }
    80% {
      border-radius: 48% 52% 41% 59% / 48% 58% 42% 52%;
    }
    100% {
      border-radius: 50%;
    }
  }

  @media (min-width: 882px) {
    max-width: 45rem;
    width: 90%;
  }
`;
