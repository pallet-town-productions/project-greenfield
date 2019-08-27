import React from 'react';
// import child components
import ImageGallery from './imageGallery/imageGallery';
import StyleSelector from './styleSelector/styleSelector';
import SizeSelector from './addToCart/sizeSelector';
import QuantitySelector from './addToCart/quantitySelector';
import { ExpandedProductName, CategoryName, ProductDescription, SocialMediaButtons } from './productInformation/productInfo';
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
            <a href="http://www.google.com">Read all reviews</a>
            {/* how does it ultimately communicate with RnR? */}
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
      </summary>
      <article>
        <ProductDescription />
        <SocialMediaButtons />
      </article>
    </main>
  );
};

export default Overview;
