import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import PastPurchases from './PastPurchases';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
it("PastPurchases renders without crashing", () => {
  shallow(<PastPurchases />);
});
