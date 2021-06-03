import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import BestSellers from './BestSellers';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
it('header renders correctly', () => {
  const wrapper = shallow(<BestSellers />);
  const header = <h3>Top 20 best sellers</h3>;
  expect(wrapper.contains(header)).toEqual(true);
});
