import React from "react";
import styled from "styled-components";
import { RadioProps } from "./Radio.types";

const StyledInput = styled.input<RadioProps>``;

const StyledLabel = styled.label<RadioProps>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Radio: React.FC<RadioProps> = ({
  value,
  label,
  onChange,
  checked,
  primary,
  disabled,
  ...props
}) => {
  return (
    <>
      <StyledInput
        type="radio"
        onChange={onChange}
        primary={primary}
        disabled={disabled}
        {...props}
      />
      <StyledLabel
        label={label}
        primary={primary}
        disabled={disabled}
        {...props}
      >
        {label}
      </StyledLabel>
    </>
  );
};

export default Radio;
