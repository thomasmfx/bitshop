import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto; 
  margin-right: auto; 
`

const DotsWrapper = styled.div`
  display: flex;
  gap: 1em;
`

const Dot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.brandPrimary};
  animation: bounce 1.5s infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
      transform: translateY(-20px);
  }
}
`

function DotsLoader() {
  return (
    <Container>
      <DotsWrapper>
        <Dot />
        <Dot />
        <Dot />
      </DotsWrapper>
    </Container>
  )
}

export default DotsLoader