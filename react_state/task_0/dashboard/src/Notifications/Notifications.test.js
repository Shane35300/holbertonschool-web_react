import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications Component', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    // Suppress Aphrodite style injection during tests
    StyleSheetTestUtils.suppressStyleInjection();
    spy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Clear Aphrodite style injection buffer and resume style injection after tests
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    spy.mockRestore();
  });

  it('renders without crashing', () => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not re-render when updating the props with the same list of notifications', () => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    wrapper.setProps({ listNotifications });
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');

    wrapper.setProps({ listNotifications });

    expect(renderSpy).not.toHaveBeenCalled();
  });

  it('re-renders when updating the props with a longer list of notifications', () => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    const initialList = [
      { id: 1, type: 'default', value: 'New course available' },
    ];

    const updatedList = [
      ...initialList,
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    wrapper.setProps({ listNotifications: initialList });
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');

    wrapper.setProps({ listNotifications: updatedList });

    expect(renderSpy).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    wrapper = shallow(<Notifications handleHideDrawer={handleHideDrawer} displayDrawer={true} />);

    // Simulate the click event on the close button
    wrapper.find('button[aria-label="Close"]').simulate('click');

    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
