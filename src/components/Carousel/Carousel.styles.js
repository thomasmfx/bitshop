import styled from 'styled-components'

export const CarouselContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  grid-row: -1 / 1;

  @media (max-width: ${({ theme }) => theme.device.mobileXL}) {
    width: 300px;
  }

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    width: 350px;
  }

  @media (min-width: ${({ theme }) => theme.device.tablet}) and (max-width: ${({
      theme,
    }) => theme.device.laptop}) {
    min-width: 500px;
  }
`

export const CarouselWrapper = styled.div`
  display: flex;
  position: relative;
`

export const CarouselContentWrapper = styled.div`
  overflow: hidden;
  height: 100%;
`

export const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none; /* hide scrollbar in Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    height: 300px;
    flex-shrink: 0;
    flex-grow: 1;

    @media (min-width: ${({ theme }) => theme.device.mobileXL}) {
      min-height: 400px;
    }

    @media (min-width: ${({ theme }) => theme.device.mobileL}) {
      min-height: 350px;
    }

    @media (max-width: ${({ theme }) =>
        theme.device.laptop}) and (min-width: ${({ theme }) =>
        theme.device.tablet}) {
      min-height: 500px;
    }
  }
`

const Arrow = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: none;
  border: none;
  display: grid;
  align-items: center;
  cursor: pointer;
`

export const LeftArrow = styled(Arrow)`
  left: 0px;

  & > * {
    justify-self: start;
  }
`

export const RightArrow = styled(Arrow)`
  right: 0px;

  & > * {
    justify-self: end;
  }
`

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  gap: 1em;

  @media (max-width: ${({ theme }) => theme.device.mobileXL}) {
    bottom: 0;
  }
`

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.currentIndex ? '#6c757d' : '')};
  border: 2px solid #6c757d;
  border-radius: 50%;
  cursor: pointer;
`
