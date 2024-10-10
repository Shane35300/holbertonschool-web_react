import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
	it('should handle FETCH_NOTIFICATIONS_SUCCESS and normalize the data', () => {
		const data = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'urgent', value: 'New data available' },
		];

		const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
		const state = notificationReducer(undefined, action).toJS();

		expect(state.notifications).toEqual({
			1: { id: 1, type: 'default', value: 'New course available', isRead: false },
			2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
			3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
		});
	});

	it('should handle MARK_AS_READ and mark the correct notification as read', () => {
		const initialState = fromJS({
			notifications: {
				1: { id: 1, type: 'default', value: 'New course available', isRead: false },
				2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
				3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
			},
			filter: NotificationTypeFilters.DEFAULT,
		});

		const action = { type: MARK_AS_READ, index: 2 };
		const state = notificationReducer(initialState, action).toJS();

		expect(state.notifications[2].isRead).toEqual(true);
	});

	it('should handle SET_TYPE_FILTER and update the filter', () => {
		const initialState = fromJS({
			notifications: {
				1: { id: 1, type: 'default', value: 'New course available', isRead: false },
				2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
				3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
			},
			filter: NotificationTypeFilters.DEFAULT,
		});

		const action = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT };
		const state = notificationReducer(initialState, action).toJS();

		expect(state.filter).toEqual(NotificationTypeFilters.URGENT);
	});
});
