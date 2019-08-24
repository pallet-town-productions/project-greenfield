import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingBreakdown from '../../components/RnR/RnR_RatingBreakdown';

configure({ adapter: new Adapter() });

function testRatingBreakdown() {
  const props = {
  };
  const enzymeWrapper = shallow(<RatingBreakdown />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('RnR - Rating Breakdown', () => {
  const { enzymeWrapper } = testRatingBreakdown();
  // it('should have an ul element with 5 li elements for star breakdown', () => {
  //   expect((enzymeWrapper.find('ul').length)).toBe(1);
  //   expect((enzymeWrapper.find('li').length)).toBe(5);
  // });

  it('should have proper classes assigned to elements', () => {
    expect(enzymeWrapper.find('h2').hasClass('rating-average')).toBe(true);
    // expect(enzymeWrapper.find('span').hasClass('star-rating')).toBe(true);
    expect(enzymeWrapper.find('p').hasClass('percent-recommended')).toBe(true);
    // expect(enzymeWrapper.find('ul').hasClass('star-breakdown')).toBe(true);
  });
});
