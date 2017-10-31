import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  color: rgb(150, 150, 150);
  padding: 50px;
  text-align: center;
`;

export default (props) => {
  return (
    <Footer { ...props } />
  );
}
