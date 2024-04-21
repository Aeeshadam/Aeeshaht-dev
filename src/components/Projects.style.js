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
  background-color: var(--color-light--1);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 10px 0px;
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
  }
`;

export const ProjectImage = styled.img`
  max-width: 30rem;
  margin: 0 auto;

  transition: transform 0.3s ease;

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
  font-size: 2rem;
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
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-right: 1rem;
  background-color: transparent;
  transition: var(--transition);

  &:hover {
    background-color: #e5e7eb;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: var(--color-dark--1);
`;
