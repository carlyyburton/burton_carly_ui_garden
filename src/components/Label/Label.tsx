import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  border: 0;
  line-height: 1;
  font-size: 20px;
  color: ${(props) => (props.primary ? "#000000" : "#3B0070")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: ${(props) =>
    props.size === "small"
      ? "12px"
      : props.size === "large"
      ? "50px"
      : "25px"};
`;

const Label: React.FC<LabelProps> = ({
  size,
  primary,
  disabled,
  label,
  ...props
}) => {
  return (
    <StyledLabel
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}>
      {label}
    </StyledLabel>
  )
};

export default Label;

