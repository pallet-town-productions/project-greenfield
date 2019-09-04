import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import RnR from '../../components/RnR/RnR_container';
import Tile from '../../components/RnR/RnR_tile';
import exampleReviewData from '../../exampleReviewData';

configure({ adapter: new Adapter() });

// Tests for tile

describe('tile', () => {
  const wrapper = shallow(<Tile review={exampleReviewData.results[0]} />);
  it('should have an outer div', () => {
    expect(wrapper.exists('.tile')).toBeTruthy();
  });
  it('should have a top row', () => {
    expect(wrapper.exists('.top-row')).toBeTruthy();
  });
  it('should have a the correct username', () => {
    const username = wrapper.find('.username');
    expect(username.exists('.username')).toBeTruthy();
    expect(username.text().includes('Lambert.Abernathy21')).toBe(true);
  });
  it('should have a star rating', () => {
    expect(wrapper.exists('.star-rating')).toBeTruthy();
  });
  it('should recommend a product sometimes', () => {
    const recommend = wrapper.find('.recommend');
    expect(recommend.text().includes('I recommend this product')).toBe(true);
  });
  it('should have an empty response category', () => {
    const response = wrapper.find('.response-text');
    expect(response.exists()).toBe(false);
  });
});

// expect(wrapper.find('.other-class').isEmpty()).to.equal(true);