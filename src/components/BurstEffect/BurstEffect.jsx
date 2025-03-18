import styled, { keyframes } from 'styled-components';

const burstAnimation = keyframes`
  0%, 100% {
    top: 100%;
    opacity: 0;
    background: #188efe;
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  65% {
    opacity: 1;
  }
  99% {
    top: -50%;
    opacity: 0;
    height: 0;
  }
`;

const BurstContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BurstCircle = styled.ul`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 40%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-30%, -80%);
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const BurstItem = styled.li`
  position: absolute;
  width: 4px;
  height: 50px;
  top: 0;
  left: 50%;
  border-radius: 30px;
  transform-origin: 50% 100%;
  transform: translateX(-50%) rotate(${(props) => props.rotation}deg);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    background: #188efe;
    border-radius: 30px;
    animation: ${burstAnimation} 1s ease-in-out infinite;
    animation-fill-mode: backwards;
    animation-delay: 0s;
  }
`;

const BurstEffect = () => {
  const burstItems = [];
  let rotation = 0;

  for (let i = 0; i < 8; i++) {
    rotation += 45;

    burstItems.push(<BurstItem key={i} rotation={rotation} />);
  }

  return (
    <BurstContainer>
      <BurstCircle>{burstItems}</BurstCircle>
    </BurstContainer>
  );
};

export default BurstEffect;
