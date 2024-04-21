import { FooterContainer } from "./Footer.style";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      Copyright &copy; {year}. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
