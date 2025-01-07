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
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

export const SectionHeading = styled.h2`
  font-size: 1.4rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`
