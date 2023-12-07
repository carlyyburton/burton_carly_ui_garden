import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.text<TextProps>`
  border: 0;
  line-height: 1;
  font-size: 20px;
  color: ${(props) => (props.primary ? "#000000" : "#000D57")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: ${(props) =>
    props.size === "small" ? "10px" : props.size === "large" ? "60px" : "20px"};
`;

const Text: React.FC<TextProps> = ({
  size,
  primary,
  disabled,
  text,
  ...props
}) => {
  return (
    <StyledText primary={primary} disabled={disabled} size={size} {...props}>
      {text}
    </StyledText>
  );
};

export default Text;
