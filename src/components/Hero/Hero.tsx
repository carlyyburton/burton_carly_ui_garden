import React from 'react';
import styled from 'styled-components';
import { HeroProps } from './Hero.types';

const StyledHero = styled.p<HeroProps>`
  border: 0;
  font-weight: bold;
  line-height: 1;
  color: ${(props) => (props.primary ? '#000000' : '#000D57')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: 40px;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 43%;
  transform: translate(-50%, -50%);
  color: #800080;
  padding: 30px 30px 100px 30px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
`;

const StyledButton = styled.button<HeroProps>`
  border: 0;
  position: absolute;
  top: 38%;
  left: 39%;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: 14px 30px 16px;
  color: ${(props) => (props.primary ? '#1b116e' : '#ffffff')};
  background-color: ${(props) => (props.primary ? '#6bedb5' : '#1b116e')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? '#55bd90' : '#6bedb5')};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: 12px 28px 14px;
  }
`;

const StyledImg = styled.img<HeroProps>`
  width: 1400px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Hero: React.FC<HeroProps> = ({
  src,
  alt,
  p,
  primary,
  disabled,
  onClick,
  text,
  ...props
}) => {
  return (
    <>
      <StyledImg
        primary={primary}
        disabled={disabled}
        src={src}
        alt={alt}
        {...props}
      />
      <StyledHero p={p} primary={primary} disabled={disabled} {...props}>
        {p}
      </StyledHero>
      <StyledButton
        type="button"
        onClick={onClick}
        primary={primary}
        disabled={disabled}
        {...props}
      >
        {text}
      </StyledButton>
    </>
  );
};

export default Hero;
