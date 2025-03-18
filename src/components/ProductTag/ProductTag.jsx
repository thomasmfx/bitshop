import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bgColor } from '../shared/mixins';

const StyledProductTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 20px;
  padding-left: 0.5em;
  padding-right: 0.5em;

  border-radius: 10px;
  ${bgColor('neutral')};
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
`;

function ProductTag({ tagName }) {
  return <StyledProductTag>{tagName}</StyledProductTag>;
}

ProductTag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default ProductTag;
