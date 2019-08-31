/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { zeroPad } from '../../util/util';
// import { exportAllDeclaration, isTSAnyKeyword } from '@babel/types';
// IMPORT Provider and Store for deep mounts
import configureStore from '../../store';
// IMPORT initialData
import exampleStyleData from '../../exampleStyleData';
import exampleProductData from '../../exampleProductData';
// IMPORT components
import Overview from '../../components/overview-components/overview';
// IMPORT image gallery components
import { ImageGalleryComponent } from '../../components/overview-components/imageGallery/imageGallery';
import { ImageListComponent } from '../../components/overview-components/imageGallery/imageList';
import ExpandedViewOverlay from '../../components/overview-components/imageGallery/expandedViewOverlay';
import ZoomViewDisplay, { ZoomViewDisplayComponent } from '../../components/overview-components/imageGallery/zoomViewOverlay';
// IMPORT add to cart components
import SizeSelector, { SizeSelectorComponent } from '../../components/overview-components/addToCart/sizeSelector';
import { QuantitySelectorComponent } from '../../components/overview-components/addToCart/quantitySelector';
import { AddToCartButtonComponent } from '../../components/overview-components/addToCart/addToCartButton';
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
// IMPORT actions
import { changePhoto, toggleExpandedView, toggleZoomView } from '../../actions/overview-Actions/imageGallery/imageGalleryActions';
import { togglePromptSelectSize } from '../../actions/overview-Actions/addToCart/changeSizeQty';

Enzyme.configure({ adapter: new Adapter() });

// NOTES:
// exists likes basic html, doesn't like React Components
// find will always be truthy because it returns a collection-like object,
// so it'll even be truthy if its length is 0

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
  const handleClick = sinon.spy();
  const mockStore = configureStore();
  const wrapper = mount(
    <Provider store={mockStore}>
      <ImageGalleryComponent dispatchExpandedView={handleClick} />
    </Provider>,
  );
  afterAll(() => {
    wrapper.unmount();
  });
  it('should render Main Image', () => {
    expect(wrapper.exists('#main-photo')).toBeTruthy();
  });
  describe('Main Image', () => {
    it('should be clickable', () => {
      wrapper.find('#main-photo').simulate('click');
      expect(handleClick.calledOnce).toBeTruthy();
    });
    describe('Nav Carousel Buttons', () => {
      it('should render one if at the first OR last image', () => {
        mockStore.dispatch(changePhoto(0));
        wrapper.update();
        expect(wrapper.find('.nav-carousel-button').find('.show')).toHaveLength(1);

        const lastPhotoIndex = mockStore.getState().style.results[0].photos.length - 1;
        mockStore.dispatch(changePhoto(lastPhotoIndex));
        wrapper.update();
        expect(wrapper.find('.nav-carousel-button').find('.show')).toHaveLength(1);
      });
      it('should render two if at a middle image', () => {
        mockStore.dispatch(changePhoto(1));
        wrapper.update();
        expect(wrapper.find('.nav-carousel-button').find('.show')).toHaveLength(2);
      });
      it('left button should move to previous image', () => {
        const preTestIndex = mockStore.getState().currentPhotoIndex;
        const navButton = wrapper.find('#navigate_before');
        navButton.simulate('click');
        expect(mockStore.getState().currentPhotoIndex).toEqual(preTestIndex - 1);
      });
      it('right button should move to next image', () => {
        const preTestIndex = mockStore.getState().currentPhotoIndex;
        const navButton = wrapper.find('#navigate_next');
        navButton.simulate('click');
        expect(mockStore.getState().currentPhotoIndex).toEqual(preTestIndex + 1);
      });
    });
  });
  describe('Image Carousel', () => {
    it('should have thumbnails for all the photos of this style', () => {
      expect(wrapper.find('.thumbnail')).toHaveLength(exampleStyleData.results[0].photos.length);
    });
    it('should pass a click handler down to the thumbnail', () => {
      const imageListWrapper = mount(
        <ImageListComponent
          currentPhotoIndex={0}
          currentStyleIndex={0}
          isExpanded={false}
          handleSwitchPhoto={handleClick}
          imageList={[
            { thumbnail_url: 'dummy', url: 'bigdummy' },
          ]}
        />,
      );
      imageListWrapper.find('#selected-image-thumbnail').simulate('click');
      expect(handleClick.calledTwice).toBeTruthy();
    });
    it('should switch photos once a thumbnail is clicked', () => {
      mockStore.dispatch(changePhoto(0));
      expect(mockStore.getState().currentPhotoIndex).toEqual(0);
      wrapper.find('#O000O004').simulate('click');
      expect(mockStore.getState().currentPhotoIndex).toEqual(4);
    });
  });
  describe('Expanded View', () => {
    const expandedViewWrapper = mount(
      <Provider store={mockStore}>
        <ExpandedViewOverlay />
      </Provider>,
    );
    afterAll(() => {
      expandedViewWrapper.unmount();
    });
    it('should NOT render ExpandedView before dispatching the action toggleExpandedView', () => {
      expect(expandedViewWrapper.find('#image-gallery-overlay').find('.show')).toHaveLength(0);
    });
    it('should render ExpandedView upon dispatching the action toggleExpandedView (true)', () => {
      mockStore.dispatch(toggleExpandedView(true));
      expandedViewWrapper.update();
      expect(expandedViewWrapper.find('#image-gallery-overlay').find('.show')).toHaveLength(1);
    });
    it('should render imageMain', () => {
      expect(expandedViewWrapper.exists('#expanded-main-photo')).toBeTruthy();
    });
    it('should render imageList with imageThumbnails', () => {
      expect(expandedViewWrapper.exists('#image-thumbnail-slide-expanded')).toBeTruthy();
      expect(expandedViewWrapper.find('.thumbnail')).toHaveLength(exampleStyleData.results[0].photos.length);
    });
    describe('Exit Button', () => {
      it('should render Exit Button on Expanded View', () => {
        expect(expandedViewWrapper.exists('.exit-button')).toBeTruthy();
      });
      it('should exit out of Expanded View when Exit Button is clicked', () => {
        expect(expandedViewWrapper.find('#image-gallery-overlay').find('.show')).toHaveLength(1);
        expandedViewWrapper.find('.exit-button').simulate('click');
        expect(expandedViewWrapper.find('#image-gallery-overlay').find('.show')).toHaveLength(0);
      });
      it('should be clickable and toggle ZoomView when clicked', () => {
        expect(mockStore.getState().showZoomView).toBeFalsy();
        mockStore.dispatch(toggleExpandedView(true));
        expandedViewWrapper.update();
        expandedViewWrapper.find('#expanded-main-photo').simulate('click');
        expect(mockStore.getState().showZoomView).toBeTruthy();
        mockStore.dispatch(toggleZoomView(false));
        expect(mockStore.getState().showZoomView).toBeFalsy();
      });
    });
    describe('Zoom View Toggling', () => {
      const zoomViewWrapper = mount(
        <Provider store={mockStore}>
          <ZoomViewDisplay />
        </Provider>,
      );
      afterAll(() => {
        zoomViewWrapper.unmount();
      });
      it('should not render zoom view upon first loading of page', () => {
        expect(zoomViewWrapper.find('.show')).toHaveLength(0);
      });
      it('should not render zoom view upon clicking on Main Image', () => {
        wrapper.find('#main-photo').simulate('click');
        expect(zoomViewWrapper.find('.show')).toHaveLength(0);
      });
      it('should toggle zoom view on upon clicking on Expanded View Image', () => {
        expandedViewWrapper.find('#expanded-main-photo').simulate('click');
        zoomViewWrapper.update();
        expect(zoomViewWrapper.find('.show')).toHaveLength(1);
      });
      it('should toggle zoom view off upon clicking on the Zoom Image', () => {
        zoomViewWrapper.find('#zoom-photo').simulate('click');
        expect(zoomViewWrapper.find('.show')).toHaveLength(0);
      });
    });
    describe('Zoom View Panning', () => {
      const handleMove = sinon.spy();
      const zoomViewShallowWrapper = shallow(
        <ZoomViewDisplayComponent
          handleZoomPan={handleMove}
          showZoomView
          currentBigPicture="dummyUrl"
          handleHideZoomView={() => {}}
        />,
      );
      it('should handle mouse movements when in Zoom View', () => {
        zoomViewShallowWrapper.find('#zoom-view-mouse-move').simulate('mousemove');
        expect(handleMove.called).toBeTruthy();
      });
    });
  });
});

describe('Add To Cart', () => {
  describe('Size Selector', () => {
    let sizeList = ['Select Size', 'S', 'XL'];
    const sizeSkus = [0, 1, 2];
    const handleChangeSize = () => { };
    const wrapper = render(<SizeSelectorComponent
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
      const outOfStockWrapper = render(<SizeSelectorComponent
        sizeList={sizeList}
        sizeSkus={[]}
        promptSelectSize={false}
        handleChangeSize={handleChangeSize}
        isOutOfStock={sizeList.length === 0}
      />);
      expect(outOfStockWrapper.find('select').text()).toEqual('OUT OF STOCK');
    });
    it('should prompt to select size if promptSelectSize is set to true', () => {
      const promptWrapper = render(<SizeSelectorComponent
        sizeList={sizeList}
        sizeSkus={[]}
        promptSelectSize
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
    const currentAvailQuantity = 4;
    const handleQuantityChange = () => { };

    describe('(Size not selected)', () => {
      const wrapper = shallow(<QuantitySelectorComponent
        currentAvailQuantity={currentAvailQuantity}
        showQuantities={false}
        handleQuantityChange={handleQuantityChange}
      />);

      it('should display Quantity Selector', () => {
        expect(wrapper.find('select').length).toBeTruthy();
      });
      it('should display "-" if Size isn\'t selected', () => {
        expect(wrapper.find('select').text()).toEqual('-');
        expect(wrapper.find('option')).toHaveLength(1);
      });
    });

    describe('(Size selected)', () => {
      let wrapper = render(<QuantitySelectorComponent
        currentAvailQuantity={currentAvailQuantity}
        showQuantities
        handleQuantityChange={handleQuantityChange}
      />);

      it('should display 1 as default once Size is selected', () => {
        expect(wrapper.find('option').get(0).children[0].data).toEqual('1');
      });
      it('should display 1 to N if there\'s fewer than 15 in stock', () => {
        expect(wrapper.find('option')).toHaveLength(4);
      });
      it('should display 1 to 15 if there\'s at least 15 in stock', () => {
        wrapper = render(<QuantitySelectorComponent
          currentAvailQuantity={500}
          showQuantities
          handleQuantityChange={handleQuantityChange}
        />);
        expect(wrapper.find('option')).toHaveLength(15);
      });
    });
  });

  describe('Add to Cart Button', () => {
    const handleClick = sinon.spy();
    let wrapper = shallow(<AddToCartButtonComponent
      isOutOfStock={false}
      handleClick={handleClick}
    />);
    it('should display Add To Cart Button', () => {
      expect(wrapper.exists('.material-icons')).toBeTruthy();
      expect(wrapper.exists('#add-to-cart-button')).toBeTruthy();
    });
    it('should be clickable', () => {
      wrapper.find('#add-to-cart-button').simulate('click');
      expect(handleClick.calledOnce).toBeTruthy();
    });
    // it('should add item to cart in selected quantities when clicked, and SKU exists', () => {

    // });
    it('should prompt to Select Size when clicked, and size isn\'t selected', () => {
      const mockStore = configureStore();
      const sizeSelectorWrapper = mount(
        <Provider store={mockStore}>
          <SizeSelector />
        </Provider>,
      );
      expect(sizeSelectorWrapper.find('#select-size-prompt').text().includes('Select Size')).toBeFalsy();
      mockStore.dispatch(togglePromptSelectSize(true));
      expect(sizeSelectorWrapper.find('#select-size-prompt').text().includes('Select Size')).toBeTruthy();
      sizeSelectorWrapper.unmount();
    });
    it('should not be clickable if Out Of Stock', () => {
      wrapper = shallow(<AddToCartButtonComponent
        isOutOfStock
        handleClick={handleClick}
      />);
      expect(wrapper.exists('#add-to-cart-button-out-of-stock')).toBeTruthy();
      wrapper.find('#add-to-cart-button-out-of-stock').simulate('click');
      expect(handleClick.calledTwice).toBeFalsy();
    });
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
    // it('social media buttons should be clickable', () => {

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
    const i = 0;
    const styleList = exampleStyleData.results;
    const handleClick = sinon.spy();

    const wrapper = mount(<StyleSelectorComponent
      styleList={styleList}
      currentStyleIndex={i}
      handleSwitchStyle={handleClick}
    />);

    it('should display the correct number of thumbnails in the selector', () => {
      expect(wrapper.find('img')).toHaveLength(styleList.length);
    });
    it('should pass a working clickHandler down to StyleThumbnail', () => {
      wrapper.find(`#${zeroPad(3, 6)}`).simulate('click');
      expect(handleClick.calledOnce).toBeTruthy();
    });
    it('should display currently-selected style name above thumbnails', () => {
      expect(wrapper.find('#style-name').text().includes(styleList[i].name)).toBeTruthy();
    });
  });
  describe('Style Thumbnail', () => {
    it('should display a checkbox if it\'s the selected style', () => {
      const wrapper = render(<StyleThumbnail
        thisId="#O00001"
        style={exampleStyleData.results[0]}
        styleIndex={1}
        currentStyleIndex={1}
        handleClick={() => { }}
      />);
      expect(wrapper.find('i')).toHaveLength(1);
    });
    it('should not display a checkbox if it\'s not the selected style', () => {
      const wrapper = shallow(<StyleThumbnail
        thisId="#O00001"
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
