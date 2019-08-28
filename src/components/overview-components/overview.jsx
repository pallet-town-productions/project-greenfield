import React from 'react';
// import child components
import ImageGallery from './imageGallery/imageGallery';
import StyleSelector from './styleSelector/styleSelector';
import SizeSelector from './addToCart/sizeSelector';
import QuantitySelector from './addToCart/quantitySelector';
import AddToCartButton from './addToCart/addToCartButton';
import {
  ExpandedProductName, CategoryName, ProductDescription, SocialMediaButtons,
} from './productInformation/productInfo';
import ExpandedViewOverlay from './imageGallery/expandedViewOverlay';
import ZoomViewOverlay from './imageGallery/zoomViewOverlay';
import Price from './productInformation/price';
import StarRating from '../RnR/RnR_StarRating';
// import style sheets
import '../../styles/overview.scss';

const Overview = function () {
  return (
    <main>
      <ZoomViewOverlay />
      <ExpandedViewOverlay />
      <header>SITE WIDE ANNOUNCEMENT:  SALE</header>
      <ImageGallery />
      <summary>
        <div>
          <span>
            <StarRating starCount={0.75} />
            <a href="#scrollRnR">Read all reviews</a>
          </span>
        </div>
        <div>
          <CategoryName />
        </div>
        <div>
          <ExpandedProductName />
        </div>
        <div>
          <Price />
        </div>
        <StyleSelector />
        <SizeSelector />
        <QuantitySelector />
        <AddToCartButton />
      </summary>
      <article>
        <ProductDescription />
        <SocialMediaButtons />
      </article>
    </main>
  );
};

export default Overview;
