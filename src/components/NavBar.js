import {
  NavbarContainer,
  NavHeader,
  MenuItems,
  MenuItem,
  NavLink,
  MenuIcon,
} from "./NavBar.style";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";
import { navData } from "../Data/navData";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function NavClick() {
    setIsOpen((cur) => !cur);
  }

  return (
    <NavbarContainer>
      <NavHeader>
        <Logo />
        {(isOpen || windowWidth < 768) && (
          <MenuIcon onClick={() => NavClick()} />
        )}
      </NavHeader>
      {(isOpen || windowWidth >= 768) && (
        <MenuItems>
          {navData.map((oneNav) => (
            <MenuItem key={oneNav.name} onClick={() => setIsOpen(false)}>
              <NavLink href={oneNav.href}>{oneNav.name}</NavLink>
            </MenuItem>
          ))}
        </MenuItems>
      )}
    </NavbarContainer>
  );
};

export default NavBar;
