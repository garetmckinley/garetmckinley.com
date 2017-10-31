import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid rgb(150, 150, 150);
  box-sizing: border-box;
  color: rgb(150, 150, 150);
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 200;
  padding: 10px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: dodgerblue;
  }
  &:disabled {
    opacity: .5;
  }
`;

export default (props) => {
  return (
    <Input { ...props } />
  );
}
