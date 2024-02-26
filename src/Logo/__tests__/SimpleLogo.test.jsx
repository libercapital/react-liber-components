import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import SimpleLogo from '../SimpleLogo';

describe('Testing Logo Component', () => {
  const props = {
    width: '100px',
    height: '100px',
    className: 'test',
  };
  configure({ adapter: new Adapter() });
  it('should render correctly with props', () => {
    const wrapper = shallow(<SimpleLogo {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<SimpleLogo />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
