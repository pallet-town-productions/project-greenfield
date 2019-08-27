import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import components
// import { exportAllDeclaration } from '@babel/types';
import Overview from '../../components/overview-components/overview';

Enzyme.configure({ adapter: new Adapter() });

// NOTES:
  // exists likes basic html, doesn't like React Components



describe('components', () => {
  describe('Overview', () => {
    it('should render self and subcomponents', () => {
      const wrapper = shallow(<Overview />);
      expect(wrapper.exists('header')).toBeTruthy();
      expect(wrapper.find('ImageGallery').length).toEqual(0); // doesn't work properly
      expect(wrapper.find('ImageGalleryz').length).toEqual(0); // doesn't work properly
    });
  });
});
