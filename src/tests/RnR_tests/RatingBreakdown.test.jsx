import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RatingBreakdown } from '../../components/RnR/RnR_RatingBreakdown';
import { StarBreakdown } from '../../components/RnR/RnR_StarBreakdown';

configure({ adapter: new Adapter() });

// Example Data
const getMetaData = {
  product_id: '1',
  ratings: {
    4: 1,
    5: 1,
  },
  recommended: {
    0: 2,
  },
  characteristics: {
    Fit: {
      id: 1,
      value: '4.0000',
    },
    Length: {
      id: 2,
      value: '3.5000',
    },
    Comfort: {
      id: 3,
      value: '5.0000',
    },
    Quality: {
      id: 4,
      value: '4.0000',
    },
  },
};

// Rating Breakdown
function testRatingBreakdown(testRatings) {
  const props = {
  };
  const enzymeWrapper = shallow(<RatingBreakdown getMetaData={testRatings} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('RnR - Rating Breakdown', () => {
  const { enzymeWrapper } = testRatingBreakdown(getMetaData);
  describe('Rating Calculations', () => {
    it('should correctly calculate average rating', () => {
      expect(enzymeWrapper.find('.rating-average').text()).toContain('4.5');
      expect(enzymeWrapper.find('.percent-recommended').text()).toEqual('100% of reviews recommend this product');
    });
  });

  describe('Component Render', () => {
    it('should have proper classes assigned to elements', () => {
      expect(enzymeWrapper.find('h1').hasClass('rating-average')).toBe(true);
      expect(enzymeWrapper.find('h1').text()).toContain('4.5');
      expect(enzymeWrapper.find('p').hasClass('percent-recommended')).toBe(true);
    });
  });
});

// Star Breakdown (child of RatingBreakdown)
function testStarBreakdown(testRatings, testCount) {
  const props = {
  };
  const enzymeWrapper = shallow(<StarBreakdown
    allRatings={testRatings}
    totalRatings={testCount}
  />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('RnR - StarBreakdown', () => {
  const testRatings = {
    1: 3, 2: 0, 3: 0, 4: 5, 5: 0,
  };
  const testCount = 8;
  const { enzymeWrapper } = testStarBreakdown(testRatings, testCount);
  it('should have an ul element with 5 li elements for star breakdown', () => {
    expect((enzymeWrapper.find('ul').length)).toBe(1);
    expect((enzymeWrapper.find('li').length)).toBe(5);
  });

  it('should render all 5 child elements', () => {
    expect(enzymeWrapper.find('ul').childAt(0).type()).toBe('li');
    expect(enzymeWrapper.find('ul').childAt(1).type()).toBe('li');
    expect(enzymeWrapper.find('ul').childAt(2).type()).toBe('li');
    expect(enzymeWrapper.find('ul').childAt(3).type()).toBe('li');
    expect(enzymeWrapper.find('ul').childAt(4).type()).toBe('li');
  });

  it('should have proper classes assigned to elements', () => {
    expect(enzymeWrapper.find('ul').hasClass('star-breakdown')).toBe(true);
    expect(enzymeWrapper.find('ul').childAt(0).hasClass('star-breakdown-item')).toBe(true);
  });
});
