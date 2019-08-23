import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RelatedProducts } from '../../components/related-Products-components/related-Products';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    productId: 1,
  };

  const enzymeWrapper = shallow(<RelatedProducts productId={1} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Related products', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('div').hasClass('related-products-container')).toBe(true);

      expect(enzymeWrapper.find('div').text()).toBe('1');
    });
  });
});
