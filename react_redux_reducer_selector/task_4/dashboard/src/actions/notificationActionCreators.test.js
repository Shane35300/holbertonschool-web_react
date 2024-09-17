import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('Notification Action Creators', () => {
	it('markAsRead action creator should return the correct action', () => {
		const index = 1;
		const expectedAction = {
			type: MARK_AS_READ,
			index
		};
		expect(markAsRead(index)).toEqual(expectedAction);
	});

	it('setNotificationFilter action creator should return the correct action', () => {
		const filter = NotificationTypeFilters.DEFAULT;
		const expectedAction = {
			type: SET_TYPE_FILTER,
			filter
		};
		expect(setNotificationFilter(filter)).toEqual(expectedAction);
	});

	it('should create an action to set the notification filter', () => {
		const filter = NotificationTypeFilters.DEFAULT;
		const expectedAction = {
			type: SET_TYPE_FILTER,
			filter
		};
		expect(setNotificationFilter(filter)).toEqual(expectedAction);
	});

	it('should throw an error if an invalid filter is passed', () => {
		expect(() => {
			setNotificationFilter('INVALID_FILTER');
		}).toThrow('Invalid filter type');
	});
});
