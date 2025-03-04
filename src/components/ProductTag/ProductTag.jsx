import styled from 'styled-components'

const StyledProductTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 20px;
  padding-left: .5em;
  padding-right: .5em;

  border-radius: 10px;
  background-color: #6c757d;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
`

function ProductTag({tagName}) {
  return <StyledProductTag>{tagName}</StyledProductTag>
}

export default ProductTag
