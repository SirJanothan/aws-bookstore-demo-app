import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
it("renders without crashing", () => {
  shallow(<App />);
});
