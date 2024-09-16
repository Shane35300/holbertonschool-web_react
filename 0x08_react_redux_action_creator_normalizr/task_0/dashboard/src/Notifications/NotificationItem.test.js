import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils, css } from 'aphrodite';
import { NotificationItem, styles } from './NotificationItem';

describe('NotificationItem Component', () => {
  let wrapper;
  let markAsReadSpy;

  beforeEach(() => {
    markAsReadSpy = jest.fn();
    wrapper = shallow(<NotificationItem id={1} markAsRead={markAsReadSpy} />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<NotificationItem id={1} />);
  });

  it('calls markAsRead with correct ID on click', () => {
    wrapper.setProps({ id: 1, markAsRead: markAsReadSpy });
    wrapper.find('li').simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });

  it('renders with the correct style based on type', () => {
    wrapper.setProps({ type: 'urgent' });
    expect(wrapper.find('li').hasClass(css(styles.urgent))).toBe(true);

    wrapper.setProps({ type: 'default' });
    expect(wrapper.find('li').hasClass(css(styles.default))).toBe(true);
  });
});
