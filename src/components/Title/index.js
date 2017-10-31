import React from 'react';
import styled from 'styled-components';

import Subtitle from './Subtitle';

const H1 = styled.h1`
    color: rgb(150, 150, 150);
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 28px;
    font-weight: 200;
    position: relative;
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    span {
        background: white;
        padding: 10px;
    }
    ${ props => props.noLine ? null : `
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        background: rgb(150, 150, 150);
        height: 1px;
        width: 100%;
        z-index: -1;
      }
    `}
`;

export default (props) => {
    return (
        <header>
            <H1 { ...props }><span>{ props.title }</span></H1>
            <Subtitle>{ props.subtitle }</Subtitle>
        </header>
    );
}
