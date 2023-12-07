import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<TableProps>`
  margins: 0;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: 1px #808080 solid;
  border-radius: 5px;
`;

const StyledThead = styled.thead<TableProps>`
  margins: 0;
  background-color: #f2f2f2;
`;

const StyledTh = styled.th<TableProps>`
  font-size: 15px;
  padding: 15px;
  margin: auto;
  border-radius: 5px;
`;

const StyledTr = styled.tr<TableProps>`
  font-size: 15px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #89cff0;
  }
  border-radius: 5px;
`;

const StyledTd = styled.td<TableProps>`
  font-size: 15px;
  padding: 15px;
  border-radius: 5px;
`;

const StyledTbody = styled.tbody<TableProps>`
  font-size: 15px;
`;

const StyledTfoot = styled.tfoot<TableProps>`
  font-size: 15px;
`;

const Table: React.FC<TableProps> = ({
  primary,
  disabled,
  table,
  thead,
  th,
  row1,
  row2,
  footer,
  ...props
}) => {
  return (
    <StyledTable primary={primary} disabled={disabled} {...props}>
      {table}
      <StyledThead thead={thead} {...props}>
        <StyledTr>
          {th.map((th: string, index: number): JSX.Element => {
            return (
              <StyledTh th={th} key={index} {...props}>
                {th}
              </StyledTh>
            );
          })}
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        <StyledTr>
          {row1.map((row1: string, index: number): JSX.Element => {
            return (
              <StyledTd row1={row1} key={index} {...props}>
                {row1}
              </StyledTd>
            );
          })}
        </StyledTr>
        <StyledTr>
          {row2.map((row2: string, index: number): JSX.Element => {
            return (
              <StyledTd row2={row2} key={index} {...props}>
                {row2}
              </StyledTd>
            );
          })}
        </StyledTr>
      </StyledTbody>
      <StyledTfoot>
        <StyledTr>
          {footer.map((footer: string, index: number): JSX.Element => {
            return (
              <StyledTd footer={footer} key={index} {...props}>
                {footer}
              </StyledTd>
            );
          })}
        </StyledTr>
      </StyledTfoot>
    </StyledTable>
  );
};

export default Table;
