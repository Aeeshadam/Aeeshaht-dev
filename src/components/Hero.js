import {
  HeroContainer,
  HeroFirst,
  HeroH1,
  HeroImage,
  HeroLeft,
  HeroP,
  HeroRight,
} from "./Hero.style";

import image from "../icons/Aishat-img.jpeg";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroFirst> Hello 👋</HeroFirst>
        <HeroH1>I'm Aishat Agbolade</HeroH1>
        <HeroP>
          A passionate Front-end Engineer based in the United Kingdom
        </HeroP>
      </HeroLeft>
      <HeroRight>
        <HeroImage src={image} />
      </HeroRight>
    </HeroContainer>
  );
};
export default Hero;
