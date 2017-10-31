import React from 'react';
import styled from 'styled-components';

import { Row, Column } from 'hedron';

import Title from '../Title';

const Project = styled.section`
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
`;

const Image = styled.img`
  margin: 0 0 15px 0;
  max-width: 100%;
`;

export default (props) => {
  const items = [];

  for (let i = 0; i < props.images.length; i++) {
    items.push(
      <Column key={i} sm={(12 / props.images.length)} style={{textAlign: 'center'}} fluid>
        <Image { ...props.images[i] } />
      </Column>
    )
  }
  return (
    <Row>
      <Column fluid>
        <Row>
          <Column>
            { props.title ? <Title noLine title={props.title} /> : null }
          </Column>
        </Row>
        <Row>
          { items }
        </Row>
      </Column>
    </Row>
  );
}
