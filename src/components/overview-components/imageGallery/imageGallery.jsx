import React, { Component } from 'react';
import ImageList from './imageList';
import ImageMain from './imageMain';
// import bunch of other child components

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentImage: 0, // for now
      // imageList: []
    };
  }

  render() {
    return (
      <section>
        <ImageList />
        <ImageMain />
      </section>
    );
  }
}

export default ImageGallery;