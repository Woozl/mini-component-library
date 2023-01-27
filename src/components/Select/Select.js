import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const CustomSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%; 
  appearance: none; 

  opacity: 0;

  font-size: 1rem;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
`;

const CustomSelectFacade = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  display: inline-block;
  white-space: nowrap;
  padding: 12px 16px;

  ${CustomSelect}:hover + & {
    color: ${COLORS.black};

    & svg {
      stroke: ${COLORS.black};
    }
  }

  ${CustomSelect}:focus + & {
    outline: 5px auto ${COLORS.primary};
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const ChevronIcon = styled(Icon)`
  display: inline-block;
  margin: -7px;
  margin-left: 8px;
  stroke: ${COLORS.gray700};
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <CustomSelect value={value} onChange={onChange}>
        {children}
      </CustomSelect>
      <CustomSelectFacade>
        <span>{displayedValue}</span>
        <ChevronIcon id="chevron-down" strokeWidth={2} />
      </CustomSelectFacade>
    </Wrapper>
  );
};

export default Select;
