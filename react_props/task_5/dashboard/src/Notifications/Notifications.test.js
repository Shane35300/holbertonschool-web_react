import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    // Initialisation par défaut avec displayDrawer en false
    wrapper = shallow(<Notifications displayDrawer={false} />);
  });

  it('renders without crashing', () => {
    // Test pour vérifier que le composant se rend sans planter
    expect(wrapper.exists()).toBe(true);
  });

  describe('When displayDrawer is false', () => {
    beforeEach(() => {
      // Configuration de base pour displayDrawer = false
      wrapper = shallow(<Notifications displayDrawer={false} />);
    });

    it('renders the menuItem when displayDrawer is false', () => {
      expect(wrapper.find('.menuItem').exists()).toBe(true);
      expect(wrapper.find('.Notifications').exists()).toBe(false);
    });
  });

  describe('When displayDrawer is true', () => {
    beforeEach(() => {
      // Configuration de base pour displayDrawer = true
      wrapper = shallow(<Notifications displayDrawer={true} />);
    });

    it('renders the menuItem and Notifications div when displayDrawer is true', () => {
      expect(wrapper.find('.menuItem').exists()).toBe(true);
      expect(wrapper.find('.Notifications').exists()).toBe(true);
    });

    describe('With empty listNotifications', () => {
      beforeEach(() => {
        // Configuration avec listNotifications vide
        wrapper.setProps({ listNotifications: [] });
      });

      it('renders No new notification for now when listNotifications is empty', () => {
        expect(wrapper.find('p').text()).toBe('No new notification for now');
        expect(wrapper.find(NotificationItem).exists()).toBe(false);
      });
    });

    describe('With listNotifications', () => {
      beforeEach(() => {
        // Configuration avec une liste de notifications
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

      it('renders the correct html in the NotificationItem with HTML', () => {
        const htmlItem = wrapper.find(NotificationItem).at(2);
        expect(htmlItem.prop('html')).toEqual({ __html: 'Notification with HTML' });
      });

      it('renders the correct value in NotificationItem components', () => {
        const values = wrapper.find(NotificationItem).map(node => node.prop('value'));
        expect(values).toEqual(['New course available', 'New resume available']);
      });
    });
  });
});
