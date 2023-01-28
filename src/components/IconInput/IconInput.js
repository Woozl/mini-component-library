import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--font-size': 14 / 16 + 'rem',
    '--padding': '4px',
    '--border-width': '1px',
  },
  large: {
    '--font-size': 18 / 16 + 'rem',
    '--padding': '8px',
    '--border-width': '2px',
  }
}

const Input = styled.input`
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding: var(--padding);
  width: ${p => p.width}px;
  outline-offset: 2px;

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <>
      <Input style={SIZES[size]} placeholder={placeholder} width={width} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </>
  );
};

export default IconInput;
