import React from 'react';
import Lightbox from 'react-images';
import styled from 'styled-components';
import { Row, Column } from 'hedron';

import Thumbnail from '../Thumbnail';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      lightboxCurrentImage: 0,
    };
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(index) {
    this.setState({ lightboxIsOpen: true });
    this.setState({ lightboxCurrentImage: index });
  }
  closeLightbox() {
    this.setState({ lightboxIsOpen: false });
  }
  gotoNext() {
    let currentImage = this.state.lightboxCurrentImage;
    this.setState({ lightboxCurrentImage: currentImage + 1 });
  }
  gotoPrevious() {
    let currentImage = this.state.lightboxCurrentImage;
    this.setState({ lightboxCurrentImage: currentImage - 1 });
  }
  render() {
    const images = [
      { src: 'http://i.imgur.com/LFZ1sGL.jpg' },
      { src: 'http://i.imgur.com/G2j9pvU.jpg' },
      { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693633/Peyote_1024.jpg' },
      { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693633/ButterflyTears_1024.jpg' },
      { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693633/DimensionsWhite_1024.jpg' },
      { src: 'http://i.imgur.com/y70d4Og.jpg' },
    ];

    const items = [];

    for (let i = 0; i < images.length; i++) {
      items.push(
        <Column key={i} xs={12} md={6} styled={`display: none`} fluid>
          <Thumbnail src={images[i].src} onClick={() => this.openLightbox(i)} />
        </Column>
      )
    }

    return (
      <Row>
        <Lightbox
          images={images}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          currentImage={this.state.lightboxCurrentImage}
          />
        {items}
      </Row>
    );
  }
}

export default Portfolio;
