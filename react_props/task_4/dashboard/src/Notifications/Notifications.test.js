import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the correct html in the first NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const firstItem = wrapper.find(NotificationItem).at(0);
    expect(firstItem.prop('value')).toBe('New course available');
  });

  it('renders menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  it('renders menuItem and Notifications div when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });
});
