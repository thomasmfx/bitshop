import styled from 'styled-components'

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  padding: 1.5em 0;
  gap: 2em;
  background-color: ${({ theme }) => theme.colors.neutralLight};
`

export const Row = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: ${(props) => (props.columns ? props.columns : '1fr')};
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: ${(props) => (props.align ? props.align : 'start')};
  gap: 5em;
`

export const Column = styled.div`
  align-self: start;
  display: grid;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  height: 100%;
`

export const Title = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
`

export const Image = styled.img`
  width: 64px;
`

export const Text = styled.p`
  font-size: ${(props) => (props.$size ? props.$size : '.9rem;')};
  max-width: 40ch;
`

export const Link = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  text-decoration-color: ${({ theme }) => theme.colors.default};
  margin-top: 0.2em;

  &:hover {
    text-decoration: underline;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  align-items: flex-start;
  gap: 0.5em;
`

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.default};

  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
  }
`
