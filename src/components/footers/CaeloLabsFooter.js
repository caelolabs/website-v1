import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/logo-light.svg";
// import { ReactComponent as FacebookIcon } from "images/facebook.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube.svg";
import { ReactComponent as TwitterIcon } from "images/twitter.svg";
import { ReactComponent as InstagramIcon } from "images/instagram.svg";
import { ReactComponent as GitHubIcon } from "images/github.svg";
import { ReactComponent as UnityIcon } from "images/unity.svg";

const Container = tw.div`relative bg-primary-900 text-gray-100 -mx-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = tw.img`h-10`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div``
const CompanyInfo = tw.div``

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoImg src={LogoImage} />
            </LogoContainer>
            <CompanyAddress>
              Caelo is a Latin term for the heavens, the sky, and to engrave.
            </CompanyAddress>
            <SocialLinksContainer>
              <SocialLink href="https://www.youtube.com/channel/UCdpNtGxF-5s4urxGpknwSpw">
                <YoutubeIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com/CaeloLabs">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/caelolabs/">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="https://github.com/caelolabs">
                <GitHubIcon />
              </SocialLink>
              <SocialLink href="https://assetstore.unity.com/publishers/53629">
                <UnityIcon />
              </SocialLink>
            </SocialLinksContainer>
          </CompanyColumn>
          <Column>
            <ColumnHeading>Quick Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/about">About</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Products</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="https://assetstore.unity.com/publishers/53629">Aimsity</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://assetstore.unity.com/publishers/53629">Vissity</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/#">Legal Notice</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/#">Terms of Service</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/#">Data Protection Policy</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="mailto:team@caelolabs.com">team@caelolabs.com</Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider />
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>Copyright &copy; 2021 Caelo Labs</CopyrightNotice>
          <CompanyInfo>A Creative Technology &amp; Development Studio</CompanyInfo>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
