import styled from 'styled-components'

export const Main = styled.main`
  justify-self: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  padding: 5em;
  padding-top: 10em;
  padding-bottom: 10em;

  @media (max-width: ${({theme}) => theme.device.tablet}) {
    padding-left: 2em;
    padding-right: 2em;
  }

  @media (max-width: ${({theme}) => theme.device.tablet}) {
    padding-top: 8em;
    padding-bottom: 8em;
  }

  @media (max-width: ${({theme}) => theme.device.mobileXXL}) {
    padding-top: 6em;
    padding-bottom: 6em;
  }
`

export const Slogan = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.brandPrimary};

  @media (max-width: ${({theme}) => theme.device.mobileS}) {
    font-size: 1.3rem;
  }
`

export const Image = styled.img`
  min-width: 350px;
  width: 500px;

  @media (max-width: ${({theme}) => theme.device.laptop}) {
    grid-row: 2 / -1;
  }

  @media (max-width: ${({theme}) => theme.device.mobileL}) {
    min-width: 300px;
  }

  @media (max-width: ${({theme}) => theme.device.mobileM}) {
    min-width: 250px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
`

export const Block = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;

  @media (max-width: ${({theme}) => theme.device.laptop}) {
    grid-template-columns: none;
    grid-template-rows: min-content 1fr;
  }
`

export const Paragraph = styled.p`
  font-size: 1.1rem;
  max-width: 40ch;

  @media (max-width: ${({theme}) => theme.device.mobileS}) {
    font-size: .9rem;
  }
`

export const List = styled.ul`
  padding-left: 1em;
`

export const ListItem = styled.li`
  font-size: 1.1rem;
  max-width: 40ch;

  @media (max-width: ${({theme}) => theme.device.mobileS}) {
    font-size: .9rem;
  }
`
