import {
  AboutContainer,
  InnerAboutContainer,
  AboutP,
  Tittle,
} from "./About.style";

const About = () => {
  return (
    <AboutContainer id="about">
      <InnerAboutContainer>
        <Tittle>About Me</Tittle>
        <AboutP>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </AboutP>
        <AboutP>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </AboutP>
      </InnerAboutContainer>
    </AboutContainer>
  );
};

export default About;
