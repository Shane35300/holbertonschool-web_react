import { Map } from 'immutable';
import {
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
} from '../actions/uiActionTypes';

// État initial du réducteur
const initialState = Map({
	isNotificationDrawerVisible: false,
	isUserLoggedIn: false,
	user: {},
});

// Fonction réducteur
export default function uiReducer(state = initialState, action) {
	switch (action.type) {
		case DISPLAY_NOTIFICATION_DRAWER:
			return state.set('isNotificationDrawerVisible', true);
		case HIDE_NOTIFICATION_DRAWER:
			return state.set('isNotificationDrawerVisible', false);
		case LOGIN_SUCCESS:
			return state.set('isUserLoggedIn', true);

		case LOGIN_FAILURE:
		case LOGOUT:
			return state.set('isUserLoggedIn', false);
		default:
			return state;
	}
}
