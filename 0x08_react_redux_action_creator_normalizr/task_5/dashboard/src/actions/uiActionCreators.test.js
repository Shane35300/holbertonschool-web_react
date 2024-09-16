import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('Action Creators', () => {
	it('login action creator should return the correct action', () => {
		const email = "test@test.com";
		const password = "password123";
		const expectedAction = {
			type: LOGIN,
			user: { email, password }
		};
		expect(login(email, password)).toEqual(expectedAction);
	});

	it('logout action creator should return the correct action', () => {
		const expectedAction = {
			type: LOGOUT
		};
		expect(logout()).toEqual(expectedAction);
	});

	it('displayNotificationDrawer action creator should return the correct action', () => {
		const expectedAction = {
			type: DISPLAY_NOTIFICATION_DRAWER
		};
		expect(displayNotificationDrawer()).toEqual(expectedAction);
	});

	it('hideNotificationDrawer action creator should return the correct action', () => {
		const expectedAction = {
			type: HIDE_NOTIFICATION_DRAWER
		};
		expect(hideNotificationDrawer()).toEqual(expectedAction);
	});
});
