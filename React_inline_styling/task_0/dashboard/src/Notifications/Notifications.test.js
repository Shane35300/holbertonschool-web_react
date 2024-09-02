import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test to ensure the component does not re-render with the same list
  it('does not re-render when updating the props with the same list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    wrapper.setProps({ listNotifications });
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');

    // Update with the same list
    wrapper.setProps({ listNotifications });

    expect(renderSpy).not.toHaveBeenCalled();
  });

  // Test to ensure the component re-renders with a longer list
  it('re-renders when updating the props with a longer list of notifications', () => {
    const initialList = [
      { id: 1, type: 'default', value: 'New course available' },
    ];

    const updatedList = [
      ...initialList,
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    wrapper.setProps({ listNotifications: initialList });
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');

    // Update with a longer list
    wrapper.setProps({ listNotifications: updatedList });

    expect(renderSpy).toHaveBeenCalled();
  });
});
