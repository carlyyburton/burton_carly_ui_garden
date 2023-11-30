import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<DropdownProps>`
  border: 0;
  border: 1px solid rgb(197, 197, 197);
  background: #fff;
  color: #2f00db;
  padding: 1px;
  border-radius: 0.25rem;
  font-size: 15px;
`;

const StyledOptions = styled.option<DropdownProps>`
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  font-size: 15px;
`;

const StyledLabel = styled.label<DropdownProps>`
  background: #fff;
  padding: 0;
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: 20px;
`;

const Dropdown: React.FC<DropdownProps> = ({
   name,
   onClick,
   options,
   primary,
   disabled,
   label,
   onChange,
   ...props
 }) => {
   return (
    <Fragment>
      <StyledLabel
        onChange={onChange}
        label={label}
        primary={primary}
        disabled={disabled}
        {...props}>
        {label}
      </StyledLabel>
      <StyledSelect
        onClick={onClick}
        disabled={disabled}
        name={name}
        {...props}>
          {name}
          {options.map(
          (options: string, index: number): JSX.Element => {
            return (
              <StyledOptions
              options={options}
              onClick={onClick}
                key={index}
                {...props}>
                {options}
              </StyledOptions>
            );
          }
        )}
      </StyledSelect>
    </Fragment>
   );
  };

export default Dropdown;