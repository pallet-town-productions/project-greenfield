import React from 'react';
//import child components
import ImageGallery from './imageGallery/imageGallery';
import StyleSelector from './styleSelector/styleSelector';
import SizeSelector from './addToCart/sizeSelector';
import { ExpandedProductName, CategoryName, ProductDescription } from './productInformation/productInfo';
import Price from './productInformation/price';
import StarRating from '../RnR/RnR_StarRating';
// import style sheets
import '../../styles/overview.scss';

const Overview = function () {
  return (
    <main>
      <header>SITE WIDE ANNOUNCEMENT:  SALE</header>
      <ImageGallery />
      <summary>
        <div>
          <span>
            <StarRating starCount={0.75}/>
            <a href="">Read all reviews</a>
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
      </summary>
      <article>
        <ProductDescription />
      </article>
    </main>
  );
};

export default Overview;
