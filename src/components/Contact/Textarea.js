import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  border: 1px solid rgb(150, 150, 150);
  box-sizing: border-box;
  color: rgb(150, 150, 150);
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 200;
  padding: 20px;
  height: 200px;
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
    <Textarea { ...props } placeholder='Enter your message here' />
  );
}
