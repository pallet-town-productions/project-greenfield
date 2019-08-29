import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import initialData
import exampleStyleData from '../../exampleStyleData';
import exampleProductData from '../../exampleProductData';
// import components
import Overview from '../../components/overview-components/overview';
// image gallery components
import ImageGallery from '../../components/overview-components/imageGallery/imageGallery';
import ImageMain from '../../components/overview-components/imageGallery/imageMain';
// product info components
import Price from '../../components/overview-components/productInformation/price';
import {
  ExpandedProductNameComponent,
  CategoryNameComponent,
  ProductDescriptionComponent,
  FeatureListComponent,
  SocialMediaButtonsComponent,
} from '../../components/overview-components/productInformation/productInfo';
import { exportAllDeclaration, isTSAnyKeyword } from '@babel/types';

Enzyme.configure({ adapter: new Adapter() });


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
  // let wrapper = shallow(
  //   <Provider store={STORE}>
  //     <ImageGallery />
  //   </Provider>);
  // it('should render Main Image', () => {
  //   expect(wrapper.exists('div')).toBeTruthy();
  // });
  // describe('Main Image', () => {} )
  // describe('Image Carousel', () => {} )
  // describe('Image Thumbnail (not Style Thumbnail)', () => {} )
  // describe('Expanded View', () => {} ) // including exit button
  // describe('Zoom View' , () => {} )
});

// describe('Add To Cart', () => {});

describe('Product Information', () => {
  it('should display the correct product name', () => {
    let wrapper = shallow(<ExpandedProductNameComponent productData={exampleProductData}/>);
    expect(wrapper.text()).toEqual(exampleProductData.name);
  });
  it('should display the correct product category', () => {
    let wrapper = shallow(<CategoryNameComponent productData={exampleProductData}/>);
    expect(wrapper.text()).toEqual(exampleProductData.category);
  });
  it('should display the correct product description', () => {
    let wrapper = shallow(<ProductDescriptionComponent productData={exampleProductData}/>);
    expect(wrapper.find('#slogan').text()).toEqual(exampleProductData.slogan);
    expect(wrapper.find('#productdescription').text()).toEqual(exampleProductData.description);
  });
  it('should display the correct features list', () => {
    let wrapper = shallow(<FeatureListComponent productData={exampleProductData}/>);
    let firstFeature = exampleProductData.features[0];
    expect(wrapper.find('li').length).toEqual(exampleProductData.features.length);
    expect(wrapper.find('li').text()).toEqual(`${firstFeature.feature}: ${firstFeature.value}`);
  });
  describe("Social Media Buttons", () => {
    let wrapper = shallow(<SocialMediaButtonsComponent thisUrl={"http://localhost:3000/"} productData={exampleProductData} currentBigPicture={'dummyString'}/>)
    it('should display social media buttons', () => {
      let reduceUrls = function (shallowWrapper) {
        let urlString = '';
        for (let i = 0; i < shallowWrapper.length; i++) {
          urlString = urlString + shallowWrapper.get(i).props.href;
        }
        return urlString;
      }(wrapper.find('a'));
      expect(reduceUrls.includes('facebook.com')).toBeTruthy();
      expect(reduceUrls.includes('twitter.com')).toBeTruthy();
      expect(reduceUrls.includes('pinterest.com')).toBeTruthy();
    });
    // it('social media buttons should work', () => {
      
    // });
  });
});

// describe('Style Selector', () => {});

// describe('Header', () => {});