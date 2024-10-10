import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { NotificationItem } from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;
  let markNotificationAsRead;

  beforeEach(() => {
    markNotificationAsRead = jest.fn();
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
        markNotificationAsRead={markNotificationAsRead}
      />
    );
  });

  it('calls markNotificationAsRead when a notification item is clicked', () => {
    // Plonger dans le NotificationItem
    const notificationItem = wrapper.find(NotificationItem).dive();

    // Simuler le clic sur l'élément li
    notificationItem.find('li').simulate('click');

    // Vérifier que la fonction markNotificationAsRead a été appelée avec l'ID correct
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});
