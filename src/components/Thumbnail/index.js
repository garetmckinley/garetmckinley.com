import React from 'react';
import styled from 'styled-components';

const Img = styled.div`
  background: url(${props => props.src});
  background-position: center;
  background-size: 200%;
  height: 250px;
  width: 100%;
  opacity: .65;
  transition: all .4s ease-in-out;
  &:hover {
    background-size: 120%;
    transform: rotateZ(0deg);
    cursor: pointer;
    opacity: 1;
  }
`;

export default (props) => {
  return (
    <Img { ...props } />
  );
}
