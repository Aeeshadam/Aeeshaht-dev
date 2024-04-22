import styled from "styled-components";

export const StyledLogo = styled.a`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-dark--0);
  cursor: pointer;
  text-decoration: none;
`;
export const Logo = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <StyledLogo onClick={handleClick}>Aeeshaht.dev</StyledLogo>;
};
