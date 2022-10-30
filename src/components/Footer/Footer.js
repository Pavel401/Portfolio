import React from 'react';
import { AiFillGithub,AiFillTwitterSquare,AiFillMediumCircle, AiFillInstagram, AiFillLinkedin  } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:7001399757">+91-7001399757</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pavelalam401@gmail.com">
            pavelalam401@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Pavel401">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/pavel_alam_/">
      <AiFillInstagram size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/sk-mabud-alam-444a87133/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://twitter.com/Mabud_alam_">
      <AiFillTwitterSquare size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://medium.com/@mabud_alam">
      <AiFillMediumCircle size="3rem" />
    </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;