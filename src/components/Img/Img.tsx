import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  width: ${(props) =>
    props.size === "small"
      ? "200px"
      : props.size === "large"
      ? "1000px"
      : "500px"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  size,
  primary,
  disabled,
  ...props
}) => {
  return (
    <StyledImg
      primary={primary}
      disabled={disabled}
      src={src}
      alt={alt}
      size={size}
      {...props} />
  );
};






export default Img;