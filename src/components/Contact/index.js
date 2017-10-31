import React from 'react';
import Lightbox from 'react-images';
import styled from 'styled-components';
import { Row, Column } from 'hedron';

import 'whatwg-fetch';

import Input from '../Input';
import Button from '../Button';
import Budget from './Budget';
import Title from '../Title';
import Textarea from './Textarea';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      sending: false,
      name: '',
      email: '',
      budget: '-',
      message: '',
    };
    this.send = this.send.bind(this);
  }
  send() {
    const data = new FormData();
    const message = `
Name: ${ this.state.name }
Email: ${ this.state.email }
Budget: ${ this.state.budget }
Message: ${ this.state.message }`;
    data.append("message", message);
    const requestData = {
      method: 'POST',
      body: data
    };
    fetch(`http://formspree.io/garetmckinley@gmail.com`, requestData)
    .then(function(response) {
      alert('Message sent, you should hear back within 24 hours.');
    });
  }
  render() {
    return (
      <Row>
        <Column fluid>
          <Row>
            <Column>
              <Title title='Contact' />
            </Column>
          </Row>
          <Row>
            <Column>
              <p style={{textAlign: 'center'}}>The best way to get in contact with me is to send me an email at <a href="mailto:garetmckinley@gmail.com" style={{color: 'black'}}>garetmckinley@gmail.com</a>.</p>
            </Column>
          </Row>
        </Column>
      </Row>
    );
  }
}

export default Contact;
