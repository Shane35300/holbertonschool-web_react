import { notificationsNormalizer } from '../schema/notifications';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  notifications: Map(),
});

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = notificationsNormalizer(action.data);
      const notificationsWithReadStatus = Object.values(normalizedNotifications.entities.notifications).map(notification => ({
        ...notification,
        isRead: false,
      }));
      return state.merge({
        notifications: Map(notificationsWithReadStatus.reduce((acc, notification) => {
          acc[notification.id] = notification;
          return acc;
        }, {}))
      });
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}

export default notificationReducer;
