/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--borderRadius': '4px',
  },
  medium: {
    '--height': '12px',
    '--borderRadius': '4px',
  },
  large: {
    '--height': '24px',
    '--borderRadius': '8px',
  }
}

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--value);
  height: 100%;
`;

const Track = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  border-radius: var(--borderRadius);
  box-shadow: inset 0 2px 4px 0 ${COLORS.transparentGray35};
  overflow: hidden;
`

const InnerOverflow = styled.div`
  height: 16px;
  overflow: hidden;
  margin: 4px;
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <>
      <Track style={SIZES[size]}>
        {
          size === 'large'
            ? <InnerOverflow><Bar aria-valuenow={ value } style={{ '--value': value + '%'}}></Bar></InnerOverflow>
            : <Bar aria-valuenow={ value } style={{ '--value': value + '%'}}></Bar>
        }
      </Track>
      <VisuallyHidden>{value + '%'}</VisuallyHidden>
    </>
    );
};

export default ProgressBar;
