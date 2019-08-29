import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProductBreakdown } from '../../components/RnR/RnR_ProductBreakdown';
import { setProductRatingValue, setProductSublables } from '../../util/RnR-review-meta';

configure({ adapter: new Adapter() });

function testProductBreakdown() {
  const props = {
  };
  const enzymeWrapper = shallow(<ProductBreakdown />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('RnR - Product Breakdown', () => {
  describe('Util Functions', () => {

    describe('setProductRatingValue', () => {
      test('should have default value of 0 for left, center, and right if no value passed', () => {
        const ratingValues = setProductRatingValue();
        const expected = {
          leftValue: 0,
          centerValue: 0,
          rightValue: 0,
        };
        expect(ratingValues).toEqual(expect.objectContaining(expected));
      });

      test('should have appropriate value for left, center, and right if value between 0 and 5 passed', () => {
        const ratingValues = setProductRatingValue(3.5);
        const expected = {
          leftValue: 0,
          centerValue: 0,
          rightValue: 3.5,
        };
        expect(ratingValues).toEqual(expect.objectContaining(expected));
      });

      describe('setProductSublables', () => {
        test('should have default labels if label not passed', () => {
          const productSublabels = setProductSublables();
          const expected = {
            leftSublabel: 'Not enough',
            centerSublabel: 'Perfect',
            rightSublabel: 'Too much',
          };
          expect(productSublabels).toEqual(expect.objectContaining(expected));
        });

        test('should have appropriate labels if valid label passed', () => {
          const productSublabels = setProductSublables('Size');
          const expected = {
            leftSublabel: 'A size too small',
            centerSublabel: 'Perfect',
            rightSublabel: 'A size too big',
          };
          expect(productSublabels).toEqual(expect.objectContaining(expected));
        });
      });
    });

    describe('Component Rendering', () => {
      const { enzymeWrapper } = testProductBreakdown();
      test('should have proper classes assigned to elements', () => {
        expect(enzymeWrapper.find('div').hasClass('product-breakdown')).toBe(true);
        expect(enzymeWrapper.find('ul').hasClass('breakdown-list')).toBe(true);
      });
    });
  });
});
