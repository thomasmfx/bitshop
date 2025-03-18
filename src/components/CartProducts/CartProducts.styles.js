import styled from 'styled-components';
import ButtonPrimary from '../../components/Button/Button';
import { textColor } from '../shared/mixins';

export const EmptyCartDisclaimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

export const Text = styled.p``;

export const TextLight = styled(Text)`
  ${textColor('neutralDark')};
`;

export const Button = styled(ButtonPrimary)`
  background: none;
  ${textColor('brandPrimary')};

  &:hover {
    background: none;
  }
`;
