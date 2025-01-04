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
  padding-bottom: 10em;
  padding-top: 10em;
`

export const Slogan = styled.h1`
  color: ${({ theme }) => theme.colors.brandPrimary};
`

export const Image = styled.img`
  width: 500px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
`

export const Row = styled(Column)`
  flex-direction: row;
`

export const Paragraph = styled.p`
  font-size: 1.1rem;
  max-width: 40ch;
`

export const List = styled.ul``

export const ListItem = styled.li`
  font-size: 1.1rem;
`
