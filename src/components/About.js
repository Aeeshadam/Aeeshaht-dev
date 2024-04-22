import {
  AboutContainer,
  AboutImage,
  AboutContent,
  AboutP,
  Tittle,
  InnerContainer,
} from "./About.style";
import image from "../icons/About-img.jpeg";

const About = () => {
  return (
    <AboutContainer id="about">
      <InnerContainer>
        <AboutImage src={image} alt="About image" />
        <AboutContent>
          <Tittle>About Me</Tittle>
          <AboutP>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </AboutP>
          <AboutP>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </AboutP>
        </AboutContent>
      </InnerContainer>
    </AboutContainer>
  );
};

export default About;
