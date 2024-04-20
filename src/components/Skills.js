import { SkillsContainer, Skill } from "./Skills.style";
import { iconData } from "../Data/IconData";

const Skills = () => {
  return (
    <SkillsContainer>
      {iconData.map((item) => (
        <Skill key={item.name} src={item.src} />
      ))}
    </SkillsContainer>
  );
};
export default Skills;
