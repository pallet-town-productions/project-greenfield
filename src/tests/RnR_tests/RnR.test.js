// import React from 'react';
// import { mount, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import App from '../../components/app';
// import RnR from '../../components/RnR/RnR_container';

// configure({ adapter: new Adapter() });

// test('it can find a div', () => {
//   const wrapper = mount(<App />);
//   expect(wrapper.find('RnR')).toBeTruthy();
// });

// test('it can find a header in RnR', () => {
//   const wrapper = mount(<RnR />);
//   expect(wrapper.find('H2')).toBeTruthy();
// });

test('two plus three is five', () => {
  expect(2 + 3).toBe(5);
});
