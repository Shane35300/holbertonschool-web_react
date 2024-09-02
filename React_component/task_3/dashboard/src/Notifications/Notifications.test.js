import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    wrapper = shallow(<Notifications displayDrawer={false} />);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe('When displayDrawer is false', () => {
    it('renders the menuItem when displayDrawer is false', () => {
      expect(wrapper.find('.menuItem').exists()).toBe(true);
      expect(wrapper.find('.Notifications').exists()).toBe(false);
    });
  });

  describe('When displayDrawer is true', () => {
    beforeEach(() => {
      wrapper.setProps({ displayDrawer: true });
    });

    it('renders the menuItem and Notifications div when displayDrawer is true', () => {
      expect(wrapper.find('.menuItem').exists()).toBe(true);
      expect(wrapper.find('.Notifications').exists()).toBe(true);
    });

    describe('With empty listNotifications', () => {
      beforeEach(() => {
        wrapper.setProps({ listNotifications: [] });
      });

      it('renders No new notification for now when listNotifications is empty', () => {
        expect(wrapper.find('p').text()).toBe('No new notification for now');
        expect(wrapper.find(NotificationItem).exists()).toBe(false);
      });
    });

    describe('With listNotifications', () => {
      beforeEach(() => {
        wrapper.setProps({
          listNotifications: [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: 'Notification with HTML' } },
          ],
        });
      });

      it('renders NotificationItem components when listNotifications is passed', () => {
        expect(wrapper.find(NotificationItem).length).toBe(3);
      });

      it('calls markAsRead with correct message', () => {
        const notificationInstance = wrapper.instance();
        notificationInstance.markAsRead(1);
        expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
      });
      
      it('calls console.log with correct message when markAsRead is called', () => {
        const instance = wrapper.instance();
        instance.markAsRead(1);
        expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
      });
    });
  });
});
