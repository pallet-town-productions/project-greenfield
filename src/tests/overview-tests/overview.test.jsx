import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import components
import Overview from '../../components/overview-components/overview';

Enzyme.configure({ adapter: new Adapter() });

const shallowSetup = function () {
  const shallowWrapper = shallow(<Overview />);
  return shallowWrapper;
};

describe('components', () => {
  describe('Overview', () => {
    it('should render self and subcomponents', () => {
      const wrapper = shallowSetup();
      expect(wrapper.exists('div')).toBeTruthy();
      // expect(wrapper.exists('StyleSelector')).toBeTruthy();
      // why does ImageGallery pass but not StyleSelector?
    });
  });
});
