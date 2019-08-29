import React from 'react';
// import child components
import Header from './header';
import ImageGallery from './imageGallery/imageGallery';
import StyleSelector from './styleSelector/styleSelector';
import SizeSelector from './addToCart/sizeSelector';
import QuantitySelector from './addToCart/quantitySelector';
import AddToCartButton from './addToCart/addToCartButton';
import {
  ExpandedProductName, CategoryName, ProductDescription, FeatureList, SocialMediaButtons,
} from './productInformation/productInfo';
import ExpandedViewOverlay from './imageGallery/expandedViewOverlay';
import ZoomViewOverlay from './imageGallery/zoomViewOverlay';
import Price from './productInformation/price';
import ReviewsLink from './productInformation/reviewsLink';
// import style sheets
import '../../styles/overview.scss';

const Overview = function () {
  return (
    <div>
      <ZoomViewOverlay />
      <main id="overview-grid-container">
        <ExpandedViewOverlay />
        <header id="main-header-section">
          <Header />
          SITE WIDE ANNOUNCEMENT:  SALE
        </header>
        <section id="image-gallery-section">
          <ImageGallery />
        </section>
        <section id="product-info-section">
          <ReviewsLink />
          <CategoryName />
          <ExpandedProductName />
          <Price />
        </section>
        <section id="style-selector-section"><StyleSelector /></section>
        <section id="cart-section">
          <SizeSelector />
          <QuantitySelector />
          <AddToCartButton />
        </section>
        <section id="description-section">
          <ProductDescription />
          <SocialMediaButtons />
        </section>
        <section id="features-section">
          <FeatureList />
        </section>
      </main>
    </div>
  );
};

export default Overview;
