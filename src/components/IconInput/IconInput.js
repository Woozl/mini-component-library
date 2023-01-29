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
    '--padding-left': '16px',
  },
  large: {
    '--font-size': 18 / 16 + 'rem',
    '--padding': '8px',
    '--border-width': '2px',
    '--padding-left': '20px',
  }
}

const Input = styled.input`
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding: var(--padding);
  padding-left: calc(var(--padding) + var(--padding-left) + var(--breathing-room));
  width: ${p => p.width}px;
  outline-offset: 3px;
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: var(--padding);
  left: var(--padding);
  pointer-events: none;

  & svg {
    stroke: ${COLORS.gray700};
  }
`;

const Wrapper = styled.div`
  --breathing-room: 8px;
  position: relative;

  &:hover ${Input} {
    color: ${COLORS.black};
  }

  &:hover ${InputIcon} svg {
    stroke: ${COLORS.black};
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
    <Wrapper style={SIZES[size]}>
      <Input placeholder={placeholder} width={width} />
      <InputIcon id={icon} size={size === 'large' ? 20 : 16} strokeWidth={size === 'large' ? 2 : 1} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
