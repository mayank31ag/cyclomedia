import MyMap from './MyMap';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test('verify map div', () => {
  const MyMapel =shallow(<MyMap />);
  expect(MyMapel).toBeTruthy();
});