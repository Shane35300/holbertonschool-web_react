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

  it('should update notifications state when markNotificationAsRead is called', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    // Initial notifications
    expect(wrapper.state().listNotifications.length).toBe(3);

    // Mark notification with id 1 as read
    instance.markNotificationAsRead(1);
    expect(wrapper.state().listNotifications.length).toBe(2);
    expect(wrapper.state().listNotifications.some(notification => notification.id === 1)).toBe(false);
  });
});
