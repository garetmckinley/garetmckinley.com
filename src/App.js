import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { Page, Row, Column } from 'hedron';

import Title from './components/Title';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Contact from './components/Contact';
import Quote from './components/Quote';
import Footer from './components/Footer';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <Page>
        <Row>
          <Column><Title title='Garet McKinley' subtitle='Visual Designer' /></Column>
        </Row>

        <Portfolio />

        <Quote body='There is geometry in the humming of the strings, there is music in the spacing of the spheres.'
          author='Pythagoras' />

        <Project
          title='Clothing Design'
          images={[
            { src: 'http://i.imgur.com/clkYQA4.jpg' },
            { src: 'http://i.imgur.com/Yw6s5J3.jpg' },
          ]}
          />

        <Project
          images={[
            { src: 'http://i.imgur.com/M51iLg7.jpg' },
            { src: 'http://i.imgur.com/bhZ8WGi.jpg' },
          ]}
          />
        <Contact />
        <Footer>&copy; 2017 Garet McKinley</Footer>
      </Page>
    );
  }
}

export default App;
