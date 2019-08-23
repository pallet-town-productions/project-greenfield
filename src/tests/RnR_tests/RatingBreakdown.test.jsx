import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingBreakdown from '../../components/RnR/RnR_RatingBreakdown';

configure({ adapter: new Adapter() });

// Tests for RnR
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
  it('should have an ul element with 5 li elements for star breakdown', () => {
    const { enzymeWrapper } = testRatingBreakdown();
    expect((enzymeWrapper.find('ul').length)).toBe(1);
    expect((enzymeWrapper.find('li').length)).toBe(5);
  });
});
