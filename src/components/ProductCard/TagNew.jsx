import styled from 'styled-components'

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
  background-color: #188efe;
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
`

function TagNew() {
  return <StyledTagNew>New</StyledTagNew>
}

export default TagNew
