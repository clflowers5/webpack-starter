import React from 'react';
import { shallow } from 'enzyme';
import SimpleComponent from './simpleComponent';

describe('simpleComponent', () => {
  it('snapshot', () => {
    const wrapper = shallow(<SimpleComponent message="testing123" />);
    expect(wrapper).toMatchSnapshot();
  });
});
