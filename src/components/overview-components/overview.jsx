import React from 'react';
import ImageGallery from './imageGallery/imageGallery';
import StyleSelector from './styleSelector/styleSelector';
import { ExpandedProductName, CategoryName, ProductDescription } from './productInformation/productInfo';
import '../../styles/overview.scss';
// import bunch of other child components

const Overview = function () {
  return (
    <main>
      <header>SITE WIDE ANNOUNCEMENT:  SALE</header>
      <ImageGallery />
      <summary>
        <div>
          Ratings
        </div>
        <div>
          <CategoryName />
        </div>
        <div>
          <ExpandedProductName />
        </div>
        <div>
          $369
        </div>
        <StyleSelector />
      </summary>
      <article>
        <ProductDescription />
      </article>
    </main>
  );
};

export default Overview;
