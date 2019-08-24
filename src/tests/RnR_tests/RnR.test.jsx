import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RnR from '../../components/RnR/RnR_container';
// import List from '../../components/RnR/RnR_list';

configure({ adapter: new Adapter() });

// Tests for RnR
function testRnR() {
  const props = {
  };
  const enzymeWrapper = shallow(<RnR />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('List and sub components exist', () => {
  describe('RnR', () => {
    it('should have a header', () => {
      const { enzymeWrapper } = testRnR();
      expect(enzymeWrapper.find('h2').text()).toBe('Ratings and Reviews');
    });
  });
});

// Tests for List
// Test no longer applicable
// function testList() {
//   const props = {
//   };
//   const enzymeWrapper = shallow(<List />);
//   return {
//     props,
//     enzymeWrapper,
//   };
// }


// describe('List and sub components exist', () => {
//   describe('List', () => {
//     it('should have a header', () => {
//       const { enzymeWrapper } = testList();
//       expect(enzymeWrapper.find('h3').text()).toBe('List of Reviews');
//       expect(enzymeWrapper.find('h3').hasClass('reviews-list')).toBe(true);
//     });
//   });
// });
