import React from 'react';
import ImageGallery from './imageGallery/imageGallery.jsx';
import StyleSelector from './styleSelector/styleSelector.jsx';
//import bunch of other child components

const Overview = function() {
  return (
    <main>
      <header>SITE WIDE ANNOUNCEMENT:  SALE</header>
      <ImageGallery />
      <summary>
        <div>
          Ratings
        </div>
        <div>
          Category
        </div>
        <div>
          Expanded Product Name
        </div>
        <div>
          $369
        </div>
        <StyleSelector />
      </summary>
    </main>
  );
};

export default Overview;