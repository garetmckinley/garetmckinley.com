import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    color: rgb(150, 150, 150);
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 18px;
    font-weight: 100;
    margin-top: 0;
    position: relative;
    width: 100%;
    text-align: center;
    letter-spacing: 4px;
`;

export default (props) => {
  return (
    <H2 { ...props } />
  );
}
