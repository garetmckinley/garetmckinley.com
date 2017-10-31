import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 1px solid rgb(150, 150, 150);
  color: rgb(150, 150, 150);
  font-size: 16px;
  font-weight: 100;
  padding: 20px;
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
    <Button { ...props } />
  );
}
