import {
  NavbarContainer,
  NavHeader,
  MenuItems,
  MenuItem,
  NavLink,
  MenuIcon,
} from "./NavBar.style";
import { Logo } from "./Logo";
import { useState, useEffect, useRef } from "react";
import { navData } from "../Data/navData";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleIsOpen = () => setIsOpen((open) => !open);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const sectionId = href.split("#")[1];
    const section = sectionId
      ? document.getElementById(sectionId)
      : document.body;
    const navbarHeight = navRef.current ? navRef.current.offsetHeight : 0;
    const top = section.offsetTop - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <NavbarContainer ref={navRef}>
      <NavHeader>
        <Logo />
        {(isOpen || windowWidth < 768) && (
          <MenuIcon onClick={() => toggleIsOpen()} />
        )}
      </NavHeader>
      {(isOpen || windowWidth >= 768) && (
        <MenuItems>
          {navData.map((oneNav) => (
            <li key={oneNav.name}>
              <MenuItem>
                <NavLink href={oneNav.href} onClick={handleLinkClick}>
                  {oneNav.name}
                </NavLink>
              </MenuItem>
            </li>
          ))}
        </MenuItems>
      )}
    </NavbarContainer>
  );
};

export default NavBar;
