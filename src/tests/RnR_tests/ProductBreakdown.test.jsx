import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProductBreakdown } from '../../components/RnR/RnR_ProductBreakdown';

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
  const { enzymeWrapper } = testProductBreakdown();
  it('should have proper classes assigned to elements', () => {
    expect(enzymeWrapper.find('div').hasClass('product-breakdown')).toBe(true);
  });
});
