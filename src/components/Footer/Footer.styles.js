import styled from 'styled-components';
import { FlexRow } from '../shared/elements';
import { textColor } from '../shared/mixins';

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr min-content;
  background-color: #e9ecef;
  padding: 2em 10em;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.device.laptop}) {
    & > :nth-child(2) {
      justify-self: center;
    }

    & > :nth-child(3) {
      justify-self: end;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    gap: 3em;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    column-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.device.laptopL}) {
    column-gap: 1.5em;
  }

  @media (max-width: 642px) {
    grid-template-columns: none;
    grid-template-rows: none;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileXXL}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export const SpacedFlexRow = styled(FlexRow)`
  margin-top: 1em;
  gap: 0.5em;
  flex-wrap: wrap;
`;

export const Section = styled.section`
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

export const HelpSection = styled(Section)`
  @media (min-width: 643px) and (max-width: ${({ theme }) =>
      theme.device.laptop}) {
    justify-self: end;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1em;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  max-width: 40ch;
`;

export const Link = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  text-decoration-color: ${({ theme }) => theme.colors.default};
  margin-top: 0.2em;

  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    ${textColor('brandPrimary')};
  }
`;

export const Badge = styled.img`
  width: 64px;
`;

export const Copyright = styled(Paragraph)`
  grid-column: 1 / -1;
  margin-top: 3em;
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  justify-self: center;
`;
