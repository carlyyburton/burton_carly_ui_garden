import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 300px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-family: Verdana, sans-serif;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledH4 = styled.h4<CardProps>`
  margin: 0;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 10px 0px 0px 20px;
`;

const StyledP = styled.p<CardProps>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 0px 0px 10px 20px;
`;

const StyledImg = styled.img<CardProps>`
  width: 300px;
  border-radius: 5px 5px 0px 0px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Card: React.FC<CardProps> = ({
  size,
  h4,
  p,
  src,
  alt,
  primary,
  disabled,
  ...props
}) => {
  return (
    <>
      <StyledCard>
        <StyledImg
          primary={primary}
          disabled={disabled}
          src={src}
          alt={alt}
          size={size}
          {...props}
        />
        <StyledH4 primary={primary} disabled={disabled} size={size} {...props}>
          {h4}
        </StyledH4>
        <StyledP primary={primary} disabled={disabled} size={size} {...props}>
          {p}
        </StyledP>
      </StyledCard>
    </>
  );
};

export default Card;
