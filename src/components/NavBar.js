import { NavbarContainer, LeftContainer, RightContiner } from "./NavBar.style";
import { Logo } from "./Logo";
import { ReactComponent as LogoSVG } from "../icons/Menu.svg";

const NavBar = () => {
  return (
    <NavbarContainer>
      <LeftContainer>
        <Logo />
      </LeftContainer>
      <RightContiner>
        <LogoSVG />
      </RightContiner>
    </NavbarContainer>
  );
};
export default NavBar;
