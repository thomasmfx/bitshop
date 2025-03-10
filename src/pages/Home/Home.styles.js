import styled from 'styled-components'
import Button from '../../components/Button/Button'

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  padding: 6em;

  @media (max-width: 1290px) {
    gap: 1em;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileXXL}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 500px;

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    width: 100%;
    align-items: center;
  }
`

export const Image = styled.img`
  width: 500px;

  @media (max-width: 1290px) {
    width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    display: none;
  }
`

export const Heading = styled.h1`
  font-size: 3rem;
  padding-bottom: 1em;

  @media (max-width: 1290px) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    text-align: center;
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    font-size: 2rem;
  }
`

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
`