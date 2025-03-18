import styled, { keyframes, css } from 'styled-components';
import { bgColor, textColor } from '../../components/shared/mixins';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding-left: 1em;
  padding-right: 1em;
`;

export const Video = styled.video`
  ${(props) =>
    props.endAnimation &&
    css`
      animation: 2s ${fadeOut};
    `}
`;

export const VideoSource = styled.source``;

export const Message = styled.div`
  font-size: 4rem;
  max-width: 15ch;
  font-weight: bold;
  text-align: center;
  animation: 2s ${fadeIn};

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    font-size: 2.5rem;
  }
`;

export const Logo = styled.span`
  ${textColor('brandPrimary')};
  display: inline;
`;

export const Dot = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${bgColor('brandPrimary')};
  opacity: ${(props) => (props.show ? 1 : 0)};

  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    width: 15px;
    height: 15px;
  }
`;
