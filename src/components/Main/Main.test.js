import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import Main from './Main';

describe('Main', () => {
  it('display fine', () => {
    let wrapper = shallow(<Main />);
    expect(wrapper.length).toEqual(1);
  });
});
