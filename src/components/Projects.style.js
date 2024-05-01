import styled from "styled-components";

export const ProjectsContainer = styled.section`
  margin: 10rem auto;
  width: 80%;
  max-width: 120rem;
  text-align: center;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(65, 50, 100, 0.08) 0px 30px 50px 0px;
  padding: 2rem;
  max-width: 50rem;
  place-items: center;
  box-sizing: border-box;
  margin: 5rem auto;
  text-align: left;

  @media (min-width: 992px) {
    flex-direction: row;
    max-width: 80rem;
  }
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (min-width: 882px) {
    width: 50%;
    margin: 1rem;
  }
`;

export const ProjectImage = styled.img`
  max-width: 40rem;
  transition: transform 0.3s ease;
  object-fit: contain;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectInfo = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  max-width: 30rem;

  @media (min-width: 882px) {
    width: 50%;
    margin: 2rem;
  }
`;

export const ProjectTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-primary--1);
  margin-bottom: 2rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey--1);
  margin-bottom: 2rem;
  line-height: 2.5rem;
`;

export const ProjectTechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 2rem 0;
`;

export const ProjectTechStack = styled.button`
  font-size: 1.4rem;
  color: var(--color-grey--1);
  background-color: #e5e7eb;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ProjectButton = styled.button`
  padding: 1rem 2rem;
  border: 2px solid var(--color-primary--2);
  border-radius: 0.5rem;
  cursor: pointer;
  margin-right: 1rem;
  background-color: transparent;
  transition: var(--transition);
  color: var(--color-dark--1);

  &:hover {
    background-color: var(--color-primary--2);
    color: white;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: white;
  }
`;
