import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header Component', () => {
  it('should render logout section when user is logged in', () => {
    const contextValue = {
      user: { isLoggedIn: true, email: 'test@example.com' },
      logOut: () => {},
    };

    // Wrap the Header component with the AppContext provider
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
  });

  it('should call logOut function when logout button is clicked', () => {
    const logOutSpy = jest.fn();
    const contextValue = {
      user: { isLoggedIn: true, email: 'test@example.com' },
      logOut: logOutSpy,
    };

    // Wrap the Header component with the AppContext provider
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find('button').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
