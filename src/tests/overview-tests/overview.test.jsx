import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import store and provider
import { Provider } from 'react-redux';
import configureStore from '../../store';
// import components
import Overview from '../../components/overview-components/overview';
import ImageGallery from '../../components/overview-components/imageGallery/imageGallery';
import ImageMain from '../../components/overview-components/imageGallery/imageMain';


Enzyme.configure({ adapter: new Adapter() });
const STORE = configureStore();

// NOTES:
// exists likes basic html, doesn't like React Components


describe('Overview', () => {
  let wrapper = shallow(<Overview />);
  it('should render main container', () => {
    expect(wrapper.exists('#main-header-section')).toBeTruthy();
  });
  it('should render header', () => {
    expect(wrapper.exists('#overview-grid-container')).toBeTruthy();
  });
  it('should section out a place for the Image Gallery', () => {
    expect(wrapper.exists('#image-gallery-section'))
  });
  it('should section out a place for the Product Name', () => {
    expect(wrapper.exists('#product-info-section'))
  });
  it('should section out a place for the Style Selector', () => {
    expect(wrapper.exists('#style-selector-section'))
  });
  it('should section out a place for the Add-To-Cart section', () => {
    expect(wrapper.exists('#cart-section'))
  });
  it('should section out a place for the Product Description', () => {
    expect(wrapper.exists('#description-section'))
  });
  it('should section out a place for the Product Features List', () => {
    expect(wrapper.exists('#features-section'))
  });
});

describe('Image Gallery', () => {
  let wrapper = shallow(
    <Provider store={STORE}>
      <ImageGallery />
    </Provider>);
  // describe('Main Image', () => {} )
  // describe('Image Carousel', () => {} )
  // describe('Image Thumbnail (not Style Thumbnail)', () => {} )
  // describe('Expanded View', () => {} ) // including exit button
  // describe('Zoom View' , () => {} )
});

// describe('Add To Cart', () => {});

// describe('Product Information', () => {});

// describe('Style Selector', () => {});

// describe('Header', () => {});