import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  let wrapper;
  let markAsReadSpy;

  beforeEach(() => {
    markAsReadSpy = jest.fn();
    wrapper = shallow(<NotificationItem id={1} markAsRead={markAsReadSpy} />);
  });

  it('renders without crashing', () => {
    shallow(<NotificationItem id={1} />);
  });

  it('calls markAsRead with correct ID on click', () => {
    wrapper.find('li').simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});
