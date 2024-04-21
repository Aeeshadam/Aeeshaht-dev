import {
  ContactsContainer,
  ContactP,
  EmailContainer,
  EmailLink,
  EmailTittle,
  EmailInfoContainer,
  StyledGmailIcon,
  IconContainer,
  GithubIcon,
  LinkedInIcon,
  InnerContainer,
  IconsContainer,
} from "./Contacts.style";
import { Tittle } from "./About.style";

export const Contact = () => {
  return (
    <ContactsContainer id="contact">
      <Tittle>Contact</Tittle>
      <ContactP>Feel free to hit me up 👇🏻</ContactP>
      <InnerContainer>
        <EmailContainer>
          <IconContainer>
            <StyledGmailIcon />
          </IconContainer>
          <EmailInfoContainer>
            <EmailTittle>Email</EmailTittle>
            <EmailLink href="mailto:Aishaagbolade.com">
              Aishaagbolade@gmail.com
            </EmailLink>
          </EmailInfoContainer>
        </EmailContainer>
        <IconsContainer>
          <EmailLink href="https://github.com/Aeeshadam" target="_blank">
            <GithubIcon />
          </EmailLink>
          <EmailLink
            href="https://www.linkedin.com/in/aeshaht/"
            target="_blank"
          >
            <LinkedInIcon />
          </EmailLink>
        </IconsContainer>
      </InnerContainer>
    </ContactsContainer>
  );
};
