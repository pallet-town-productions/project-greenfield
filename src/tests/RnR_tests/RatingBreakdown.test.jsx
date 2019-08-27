import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RatingBreakdown } from '../../components/RnR/RnR_RatingBreakdown';
import { StarBreakdown } from '../../components/RnR/RnR_StarBreakdown';

configure({ adapter: new Adapter() });

// Rating Breakdown
function testRatingBreakdown(testRatings) {
  const props = {
  };
  const enzymeWrapper = shallow(<RatingBreakdown getMetaData={{ ratings: testRatings }} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('RnR - Rating Breakdown', () => {
  const { enzymeWrapper } = testRatingBreakdown({ 1: 2, 4: 5 });
  it('should have proper classes assigned to elements', () => {
    expect(enzymeWrapper.find('h1').hasClass('rating-average')).toBe(true);
    expect(enzymeWrapper.find('p').hasClass('percent-recommended')).toBe(true);
  });
});

function testStarBreakdown(testRatings) {
  const props = {
  };
  const enzymeWrapper = shallow(<StarBreakdown ratings={{ ratings: testRatings }} />);
  return {
    props,
    enzymeWrapper,
  };
}

// Star Breakdown (child of RatingBreakdown)
describe('RnR - StarBreakdown', () => {
  it('should have an ul element with 5 li elements for star breakdown', () => {
    const { enzymeWrapper } = testStarBreakdown({ 1: 3, 4: 5 });
    expect((enzymeWrapper.find('ul').length)).toBe(1);
    expect((enzymeWrapper.find('li').length)).toBe(5);
  });

  it('should render all child elements even if all 5 star properties are not passed', () => {
    const { enzymeWrapper } = testStarBreakdown({ 4: 3, 5: 5 });
    expect(enzymeWrapper.find('ul').childAt(0).type()).toBe('li');
    expect(enzymeWrapper.find('ul').childAt(1).type()).toBe('li');
    expect(enzymeWrapper.find('ul').childAt(2).type()).toBe('li');
    expect(enzymeWrapper.find('ul').childAt(3).type()).toBe('li');
    expect(enzymeWrapper.find('ul').childAt(4).type()).toBe('li');
  });

  it('should render all elements if no props passed', () => {
    const { enzymeWrapper } = testStarBreakdown({});
    expect((enzymeWrapper.find('ul').length)).toBe(1);
    expect((enzymeWrapper.find('li').length)).toBe(5);
  });

  it('should have proper classes assigned to elements', () => {
    const { enzymeWrapper } = testStarBreakdown({ 1: 3, 4: 5 });
    expect(enzymeWrapper.find('ul').hasClass('star-breakdown')).toBe(true);
    expect(enzymeWrapper.find('ul').childAt(0).hasClass('star-breakdown-item')).toBe(true);
  });
});
