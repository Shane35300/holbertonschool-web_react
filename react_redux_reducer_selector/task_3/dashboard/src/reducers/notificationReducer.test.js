import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
	it('should return the default state with an empty notifications array and DEFAULT filter', () => {
		const state = notificationReducer(undefined, {});
		expect(state).toEqual({
			notifications: [],
			filter: NotificationTypeFilters.DEFAULT,
		});
	});

	it('should handle FETCH_NOTIFICATIONS_SUCCESS and set notifications with isRead false', () => {
		const data = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'urgent', value: 'New data available' },
		];

		const state = notificationReducer(undefined, {
			type: FETCH_NOTIFICATIONS_SUCCESS,
			data,
		});

		expect(state).toEqual({
			filter: NotificationTypeFilters.DEFAULT,
			notifications: [
				{ id: 1, type: 'default', value: 'New course available', isRead: false },
				{ id: 2, type: 'urgent', value: 'New resume available', isRead: false },
				{ id: 3, type: 'urgent', value: 'New data available', isRead: false },
			],
		});
	});

	it('should handle MARK_AS_READ and mark the correct notification as read', () => {
		const initialState = {
			filter: NotificationTypeFilters.DEFAULT,
			notifications: [
				{ id: 1, type: 'default', value: 'New course available', isRead: false },
				{ id: 2, type: 'urgent', value: 'New resume available', isRead: false },
				{ id: 3, type: 'urgent', value: 'New data available', isRead: false },
			],
		};

		const state = notificationReducer(initialState, {
			type: MARK_AS_READ,
			index: 2,
		});

		expect(state).toEqual({
			filter: NotificationTypeFilters.DEFAULT,
			notifications: [
				{ id: 1, type: 'default', value: 'New course available', isRead: false },
				{ id: 2, type: 'urgent', value: 'New resume available', isRead: true },
				{ id: 3, type: 'urgent', value: 'New data available', isRead: false },
			],
		});
	});

	it('should handle SET_TYPE_FILTER and update the filter', () => {
		const initialState = {
			filter: NotificationTypeFilters.DEFAULT,
			notifications: [
				{ id: 1, type: 'default', value: 'New course available', isRead: false },
				{ id: 2, type: 'urgent', value: 'New resume available', isRead: false },
				{ id: 3, type: 'urgent', value: 'New data available', isRead: false },
			],
		};

		const state = notificationReducer(initialState, {
			type: SET_TYPE_FILTER,
			filter: NotificationTypeFilters.URGENT,
		});

		expect(state).toEqual({
			filter: NotificationTypeFilters.URGENT,
			notifications: initialState.notifications,
		});
	});
});
