import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StarRating from '../../components/RnR/RnR_StarRating';

configure({ adapter: new Adapter() });

function testStarRating(starCount) {
  const props = {
  };
  const enzymeWrapper = shallow(<StarRating starCount={starCount} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('RnR - Star Rating', () => {
  it('should have 5 i elements representing stars for whole number ratings', () => {
    const { enzymeWrapper } = testStarRating(4);
    expect((enzymeWrapper.find('i').length)).toBe(5);
  });

  it('should have 5 i elements representing stars for decimal number ratings that round up', () => {
    const { enzymeWrapper } = testStarRating(4.5);
    expect((enzymeWrapper.find('i').length)).toBe(5);
  });

  it('should have 5 i elements representing stars for decimal ratings that round down', () => {
    const { enzymeWrapper } = testStarRating(4.4);
    expect((enzymeWrapper.find('i').length)).toBe(5);
  });

  it('should have 5 i elements representing stars for decimal ratings that round up', () => {
    const { enzymeWrapper } = testStarRating(2.6);
    expect((enzymeWrapper.find('i').length)).toBe(5);
  });

  it('should not render stars if rating is greater than 5', () => {
    const { enzymeWrapper } = testStarRating(7);
    expect((enzymeWrapper.find('i').length)).toBe(0);
  });

  it('should not render stars if rating is less than 0', () => {
    const { enzymeWrapper } = testStarRating(-1);
    expect((enzymeWrapper.find('i').length)).toBe(0);
  });
});
