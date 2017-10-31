import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  border: 1px solid rgb(150, 150, 150);
  box-sizing: border-box;
  color: rgb(150, 150, 150);
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 200;
  height: 45px;
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
    <Select placeholder='Budget' { ...props }>
      <option value='-' selected disabled>What's your budget?</option>
      <option value='$500 - $1,000'>$500 - $1,000</option>
      <option value='$1,000 - $5,000'>$1,000 - $5,000</option>
      <option value='$5,000 - $10,000'>$5,000 - $10,000</option>
      <option value='$10,000 - $25,000'>$10,000 - $25,000</option>
      <option value='$25,000+'>$25,000+</option>
    </Select>
  );
}
