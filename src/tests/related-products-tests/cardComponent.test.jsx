import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RelatedCard } from '../../components/related-Products-components/relatedCard';

Enzyme.configure({ adapter: new Adapter() });


function setup() {
  const props = {
    productId: 1,
  };
  const enzymeWrapper = shallow(<RelatedCard productId={1} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  jest.mock('../../util/api.js')
  describe('Related products', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      jest.mock('../../util/api.js');
      expect(enzymeWrapper.exists('.card-container')).toBe(true);
    });
  });
});
