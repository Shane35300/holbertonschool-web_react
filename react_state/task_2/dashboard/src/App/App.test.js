import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('should update state on login', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.logIn('test@example.com', 'password');
    expect(wrapper.state().user).toEqual({
      email: 'test@example.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('should update state on logout', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.logIn('test@example.com', 'password');
    instance.logOut();
    expect(wrapper.state().user).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });
});
