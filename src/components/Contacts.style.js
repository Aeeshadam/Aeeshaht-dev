import styled from "styled-components";
import { ReactComponent as GmailSvg } from "../icons/email.svg";
import { ReactComponent as GithubSvg } from "../icons/github.svg";
import { ReactComponent as LinkedInSvg } from "../icons/linkedin.svg";

export const ContactsContainer = styled.section`
  background: rgb(234, 237, 240);
  background: linear-gradient(
    24deg,
    rgba(234, 237, 240, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  margin: 10rem auto 0 auto;
  text-align: center;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerContainer = styled.div`
  max-width: 100rem;
  display: flex;
  border-radius: 1rem;
  border: 2px solid #e5e7eb;
  margin: 5rem;
  align-items: flex-start;
  padding: 2rem;
  flex-direction: column;

  @media (min-width: 882px) {
    max-height: 10rem;
    width: 80rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ContactP = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey--1);
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmailTittle = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const EmailInfoContainer = styled.div`
  text-align: left;
  margin-left: 1rem;
`;

export const IconContainer = styled.div`
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 10px 0px;
`;

export const StyledGmailIcon = styled(GmailSvg)`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  padding: 1rem;
`;

export const GithubIcon = styled(GithubSvg)`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export const LinkedInIcon = styled(LinkedInSvg)`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const EmailLink = styled.a`
  text-decoration: none;
  color: var(--color-grey--1);
  transition: var(--transition);

  &:hover {
    color: var(--color-primary--1);
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (min-width: 882px) {
    margin-top: 0;
  }
`;
