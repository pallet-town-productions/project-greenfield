import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RelatedCard } from '../../components/related-Products-components/relatedCard';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../util/api', () => 'http://12.345.678.9101:3000');

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
  describe('Related products', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.exists('.card-container')).toBe(true);
    });
  });
});
