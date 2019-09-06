import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import ConnectList from '../../components/RnR/RnR_list';
import RnR from '../../components/RnR/RnR_container';
import LowerBar from '../../components/RnR/RnR_tile_lower_bar';
import Tile from '../../components/RnR/RnR_tile';
import exampleReviewData from '../../exampleReviewData';
import configureStore from '../../store';

configure({ adapter: new Adapter() });

describe('tile', () => {
  const wrapper = mount(<Tile review={exampleReviewData.results[0]} />);
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
  it('should have a body containing correct info', () => {
    const body = wrapper.find('.tile-body');
    expect(body.text().includes('Fuga accusamus est')).toBe(true);
  });
  it('should have an empty response category', () => {
    const response = wrapper.find('.response-text');
    expect(response.exists()).toBe(false);
  });
  it('should have three photos', () => {
    const photos = wrapper.find('.thumbnail');
    expect(photos).toHaveLength(3);
  });
  it('should display the helpfulness count', () => {
    const helpfulness = wrapper.find('.helpfulness');
    expect(helpfulness.text()).toBe('(29)');
  });
});

describe('list', () => {
  const mockStore = configureStore(true);
  const wrapper = mount(
    <Provider store={mockStore}>
      <ConnectList />
    </Provider>,
  );
  it('list should exist when given data', () => {
    expect(wrapper.exists('.list')).toBeTruthy();
  });
  it('should render two tiles initially', () => {
    expect(wrapper.find('.tile')).toHaveLength(2);
  });
  it('should show four tiles upon click', () => {
    wrapper.find('#show-more-reviews').simulate('click');
    expect(wrapper.find('.tile')).toHaveLength(4);
  });
  it('should show five tiles upon another click', () => {
    wrapper.find('#show-more-reviews').simulate('click');
    expect(wrapper.find('.tile')).toHaveLength(5);
  });
  it('should not show the more reviews button after five reviews', () => {
    expect(wrapper.exists('#show-more-reviews')).toBeFalsy();
  });
});

describe('RnR Container', () => {
  const wrapper = shallow(<RnR />);
  it('should have a header with correct text', () => {
    const header = wrapper.find('h4');
    expect(header.text().includes('RATINGS AND REVIEWS')).toBe(true);
  });
  it('should have a container with the stuff in it', () => {
    expect(wrapper.exists('.RnR_container')).toBeTruthy();
  });
});

describe('lower bar', () => {
  const wrapper = shallow(<LowerBar review={exampleReviewData.results[0]} />);
  it('should have a container', () => {
    expect(wrapper.exists('.lower-row')).toBeTruthy();
  });
  it('should contain another container below', () => {
    expect(wrapper.exists('.lower')).toBeTruthy();
  });
});
