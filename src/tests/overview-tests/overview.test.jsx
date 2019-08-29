/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { zeroPad } from '../../util/util';
// IMPORT initialData
import { exportAllDeclaration, isTSAnyKeyword } from '@babel/types';
import exampleStyleData from '../../exampleStyleData';
import exampleProductData from '../../exampleProductData';
// IMPORT components
import Overview from '../../components/overview-components/overview';
// IMPORT image gallery components
import ImageGallery from '../../components/overview-components/imageGallery/imageGallery';
import ImageMain from '../../components/overview-components/imageGallery/imageMain';
// IMPORT add to cart components
import { SizeSelectorComponent } from '../../components/overview-components/addToCart/sizeSelector';
// IMPORT product info components
import { PriceComponent } from '../../components/overview-components/productInformation/price';
import {
  ExpandedProductNameComponent,
  CategoryNameComponent,
  ProductDescriptionComponent,
  FeatureListComponent,
  SocialMediaButtonsComponent,
} from '../../components/overview-components/productInformation/productInfo';
// IMPORT style selector components
import { StyleSelectorComponent } from '../../components/overview-components/styleSelector/styleSelector';
import StyleThumbnail from '../../components/overview-components/styleSelector/styleThumbnail';

Enzyme.configure({ adapter: new Adapter() });


// NOTES:
// exists likes basic html, doesn't like React Components


describe('Overview', () => {
  const wrapper = shallow(<Overview />);
  it('should render main container', () => {
    expect(wrapper.exists('#main-header-section')).toBeTruthy();
  });
  it('should render header', () => {
    expect(wrapper.exists('#overview-grid-container')).toBeTruthy();
  });
  it('should section out a place for the Image Gallery', () => {
    expect(wrapper.exists('#image-gallery-section'));
  });
  it('should section out a place for the Product Name', () => {
    expect(wrapper.exists('#product-info-section'));
  });
  it('should section out a place for the Style Selector', () => {
    expect(wrapper.exists('#style-selector-section'));
  });
  it('should section out a place for the Add-To-Cart section', () => {
    expect(wrapper.exists('#cart-section'));
  });
  it('should section out a place for the Product Description', () => {
    expect(wrapper.exists('#description-section'));
  });
  it('should section out a place for the Product Features List', () => {
    expect(wrapper.exists('#features-section'));
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

describe('Add To Cart', () => {
  describe('Size Selector', () => {
    let sizeList = ['Select Size', 'S', 'XL'];
    let sizeSkus = [0, 1, 2];
    let handleChangeSize = () => {};
    let wrapper = render(<SizeSelectorComponent 
      sizeList={sizeList}
      sizeSkus={sizeSkus}
      promptSelectSize={false}
      handleChangeSize={handleChangeSize}
      isOutOfStock={false}
    />);
    it('should display Size Selector', () => {
      expect(wrapper.find('select').length).toBeTruthy();
    });
    it('should have a default value of Select Size if there are available sizes', () => {
      expect(wrapper.find('select').text().indexOf('Select Size')).toEqual(0);
    });
    it('should only display available Sizes in the dropdown', () => {
      expect(wrapper.find('option')).toHaveLength(3);
      expect(wrapper.find('option').get(1).children[0].data).toEqual(sizeList[1]);
      expect(wrapper.find('option').get(2).children[0].data).toEqual(sizeList[2]);
    });
    it('should display OUT OF STOCK if there\'s no available sizes', () => {
      sizeList = [];
      let outOfStockWrapper = render(<SizeSelectorComponent 
        sizeList={sizeList}
        sizeSkus={[]}
        promptSelectSize={false}
        handleChangeSize={handleChangeSize}
        isOutOfStock={sizeList.length === 0}
      />);
      expect(outOfStockWrapper.find('select').text()).toEqual('OUT OF STOCK');
    });
    it('should prompt to select size if promptSelectSize is set to true', () => {
      let promptWrapper = render(<SizeSelectorComponent 
        sizeList={sizeList}
        sizeSkus={[]}
        promptSelectSize={true}
        handleChangeSize={handleChangeSize}
        isOutOfStock={sizeList.length === 0}
      />);
      expect(promptWrapper.find('#select-size-prompt').text()).toEqual('Please Select Size');
    });
    it('should not prompt to select size if promptSelectSize is set to false', () => {
      expect(wrapper.find('#select-size-prompt').text()).toEqual('');
    });
  });
  describe('Quantity Selector', () => {

  });
  describe('Add to Cart Button', () => {

  });
});

describe('Product Information', () => {
  it('should display the correct product name', () => {
    const wrapper = shallow(<ExpandedProductNameComponent productData={exampleProductData} />);
    expect(wrapper.text()).toEqual(exampleProductData.name);
  });
  it('should display the correct product category', () => {
    const wrapper = shallow(<CategoryNameComponent productData={exampleProductData} />);
    expect(wrapper.text()).toEqual(exampleProductData.category);
  });
  it('should display the correct product description', () => {
    const wrapper = shallow(<ProductDescriptionComponent productData={exampleProductData} />);
    expect(wrapper.find('#slogan').text()).toEqual(exampleProductData.slogan);
    expect(wrapper.find('#productdescription').text()).toEqual(exampleProductData.description);
  });
  it('should display the correct features list', () => {
    const wrapper = shallow(<FeatureListComponent productData={exampleProductData} />);
    const firstFeature = exampleProductData.features[0];
    expect(wrapper.find('li').length).toEqual(exampleProductData.features.length);
    expect(wrapper.find('li').text()).toEqual(`${firstFeature.feature}: ${firstFeature.value}`);
  });
  describe('Social Media Buttons', () => {
    const wrapper = shallow(<SocialMediaButtonsComponent thisUrl="http://localhost:3000/" productData={exampleProductData} currentBigPicture="dummyString" />);
    it('should display social media buttons', () => {
      const reduceUrls = (function (shallowWrapper) {
        let urlString = '';
        for (let i = 0; i < shallowWrapper.length; i++) {
          urlString += shallowWrapper.get(i).props.href;
        }
        return urlString;
      }(wrapper.find('a')));
      expect(reduceUrls.includes('facebook.com')).toBeTruthy();
      expect(reduceUrls.includes('twitter.com')).toBeTruthy();
      expect(reduceUrls.includes('pinterest.com')).toBeTruthy();
    });
    // it('social media buttons should work', () => {

    // });
  });
  describe('Price', () => {
    const exampleStyle = Object.assign(exampleStyleData, {});
    it('should display default price when there\'s no original price', () => {
      exampleStyle.results[0].original_price = '0';
      exampleStyle.results[0].sale_price = '0';
      const wrapper = shallow(<PriceComponent
        productData={exampleProductData}
        style={exampleStyle}
        currentStyleIndex={0}
      />);
      expect(wrapper.find('span')).toHaveLength(1);
      expect(wrapper.find('span').text()).toEqual(`$${exampleProductData.default_price}`);
    });
    it('should display original price when there\'s no sale price', () => {
      exampleStyle.results[0].original_price = '2';
      const wrapper = shallow(<PriceComponent
        productData={exampleProductData}
        style={exampleStyle}
        currentStyleIndex={0}
      />);
      expect(wrapper.find('span')).toHaveLength(1);
      expect(wrapper.find('span').text()).toEqual('$2');
    });
    it('should display sale price when there is a sale price', () => {
      exampleStyle.results[0].sale_price = '1';
      let wrapper = shallow(<PriceComponent
        productData={exampleProductData}
        style={exampleStyle}
        currentStyleIndex={0}
      />);
      expect(wrapper.find('span')).toHaveLength(2);
      expect(wrapper.find('span').get(0).props.children).toEqual('$1');
      expect(wrapper.find('span').get(1).props.children).toEqual('$2');

      exampleStyle.results[0].original_price = '0';
      wrapper = shallow(<PriceComponent
        productData={exampleProductData}
        style={exampleStyle}
        currentStyleIndex={0}
      />);
      expect(wrapper.find('span')).toHaveLength(2);
      expect(wrapper.find('span').get(1).props.children).toEqual(`$${exampleProductData.default_price}`);
    });
  });
});

describe('Style Selector', () => {
  describe('Style Selector', () => {
    let styleList = exampleStyleData.results;
    let handleSwitchStyle = () => { }; //handle this
    let i = 0;
    let wrapper = mount(<StyleSelectorComponent
      styleList={styleList}
      handleSwitchStyle={handleSwitchStyle}
      currentStyleIndex={i}
    />);
    it('should display the correct number of thumbnails in the selector', () => {
      expect(wrapper.find('img')).toHaveLength(styleList.length);
    });
    // it('should switch styles upon click', () => {
    //   wrapper.find(`"#${zeroPad(2, 6)}"`).simulate('click');
    //   expect(1+1===2).toBeTruthy();
    // });
    it('should display currently-selected style name above thumbnails', () => {
      expect(wrapper.find('#style-name').text().includes(styleList[i].name)).toBeTruthy();
    });
  });
  describe('Style Thumbnail', () => {
    it('should display a checkbox if it\'s the selected style', () => {
      let wrapper = render(<StyleThumbnail
        thisId={0}
        style={exampleStyleData.results[0]}
        styleIndex={1}
        currentStyleIndex={1}
        handleClick={() => { }}
      />);
      expect(wrapper.find('i')).toHaveLength(1);
    });
    it('should not display a checkbox if it\'s not the selected style', () => {
      let wrapper = shallow(<StyleThumbnail
        thisId={0}
        style={exampleStyleData.results[0]}
        styleIndex={2}
        currentStyleIndex={1}
        handleClick={() => { }}
      />);
      expect(wrapper.find('i')).toHaveLength(0);
    });
  });
});

// describe('Header', () => {});
