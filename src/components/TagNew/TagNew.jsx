import styled from 'styled-components';
import { bgColor } from '../shared/mixins';

const StyledTagNew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;
  width: 40px;
  height: 20px;
  position: absolute;
  z-index: 1;
  right: 0;

  border-radius: 40px;
  ${bgColor('brandPrimary')};
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
`;

function TagNew() {
  return <StyledTagNew>New</StyledTagNew>;
}

export default TagNew;
