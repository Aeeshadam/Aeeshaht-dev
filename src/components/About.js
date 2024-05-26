import {
  AboutContainer,
  AboutImage,
  AboutContent,
  AboutP,
  AboutTittle,
  InnerContainer,
} from "./About.style";
import image from "../icons/About-img.jpeg";

const About = () => {
  return (
    <AboutContainer id="about">
      <InnerContainer data-aos="fade-up" data-aos-duration="1500">
        <AboutImage src={image} alt="About image" />
        <AboutContent>
          <AboutTittle>About Me</AboutTittle>
          <AboutP>
            During my academic journey, I took it upon myself to attend a UI/UX
            bootcamp where I was a top performer and led a team to deliver real
            life user interface.
          </AboutP>

          <AboutP>
            Fast forward to my new life in the UK, I embarked on a journey that
            led me from the frontline of customer service to the helm of
            operations management. But deep down, I knew my passion lay
            elsewhere. It was during those long shifts that I found solace in
            coding, slowly but steadily teaching myself the fundamentals of web
            development.
          </AboutP>
          <AboutP>
            Today, I'm on a mission to leverage my diverse background in
            customer service and my newfound skills in coding to create
            impactful digital experiences. My main stack currently is React.js
            in combination with CSS and TypeScript.
          </AboutP>
        </AboutContent>
      </InnerContainer>
    </AboutContainer>
  );
};

export default About;
