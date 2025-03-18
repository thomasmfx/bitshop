import styled from 'styled-components'

export const StyledCart = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 5em;
  padding: 6em;
  padding-bottom: 10em;
  padding-top: 10em;
  width: 70%;
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.device.desktop}) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding-top: 8em;
    padding-bottom: 8em;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    width: 90%;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
  min-width: 100%;
`

export const SectionHeading = styled.h2`
  font-size: 1.4rem;
`
