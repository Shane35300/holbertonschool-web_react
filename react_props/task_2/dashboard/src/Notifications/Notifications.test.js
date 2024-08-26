import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3); // Change according to your test setup
  });

  it('renders the correct html in the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).at(0);
    expect(firstItem.prop('value')).toBe('New course available'); // Modify based on your implementation
  });
});
