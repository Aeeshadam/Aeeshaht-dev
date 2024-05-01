import {
  ProjectsContainer,
  Project,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectTechStack,
  ProjectTechStackContainer,
  ProjectImageContainer,
  ProjectLink,
  ProjectButton,
} from "./Projects.style";
import { Tittle } from "./About.style";
import { projectData } from "../Data/projectData";

export const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <Tittle>Projects</Tittle>
        {projectData.length === 0 && (
          <ProjectTitle>Projects Coming Soon 😌</ProjectTitle>
        )}
        {projectData.map((project) => {
          return (
            <Project key={project.id}>
              <ProjectImageContainer>
                <ProjectImage src={project.image} />{" "}
              </ProjectImageContainer>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechStackContainer>
                  {project.techStack.map((tech) => {
                    return (
                      <ProjectTechStack key={tech}>{tech}</ProjectTechStack>
                    );
                  })}
                </ProjectTechStackContainer>
                <ProjectButton>
                  <ProjectLink href={project.sourceCode} target="_blank">
                    Source Code
                  </ProjectLink>
                </ProjectButton>
                <ProjectButton>
                  <ProjectLink href={project.demo} target="_blank">
                    Demo
                  </ProjectLink>{" "}
                </ProjectButton>
              </ProjectInfo>
            </Project>
          );
        })}
        <p>More projects Coming Soon 😌</p>
      </ProjectsContainer>
    </>
  );
};
