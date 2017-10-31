import React from 'react';
import styled from 'styled-components';

import { Row, Column } from 'hedron';

const Blockquote = styled.blockquote`
  display:block;
  background: #fff;
  padding: 15px 20px 15px 20px;
  margin: 30px 0 30px 0;
  position: relative;

  font-family: 'Dawning of a New Day', cursive;
  font-size: 36px;
  font-weight: 100;
  line-height: 1.5;
  color: rgb(150, 150, 150);
  text-align: justify;

  &::after {
    content: "— ${props => props.author}";

    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 20px;
    font-weight: 100;
    color: rgb(150, 150, 150);

    position: absolute;
    right: 10px;
    bottom:-15px;
  }
`;

export default (props) => {
    return (
        <Row>
            <Column fluid>
              <Blockquote { ...props }>{ props.body }</Blockquote>
            </Column>
        </Row>
    );
}
