import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 600;
`;

const StyledSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.s};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: ${({ theme }) => theme.fontSizes.body};

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => `0 0 4px ${theme.colors.primary}`};
  }
`;

const Option = styled.option`
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

const Select = ({ label, options, ...props }) => {
  return (
    <SelectContainer>
      <Label htmlFor={props.name}>{label}</Label>
      <StyledSelect {...props}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

export default Select;
