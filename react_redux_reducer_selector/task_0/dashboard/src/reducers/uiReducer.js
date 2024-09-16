import {
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
} from '../actions/uiActionTypes';

// État initial du réducteur
const initialState = {
	isNotificationDrawerVisible: false,
	isUserLoggedIn: false,
	user: {},
};

// Fonction réducteur
export default function uiReducer(state = initialState, action) {
	switch (action.type) {
		case DISPLAY_NOTIFICATION_DRAWER:
			return {
				...state,
				isNotificationDrawerVisible: true,
			};
		case HIDE_NOTIFICATION_DRAWER:
			return {
				...state,
				isNotificationDrawerVisible: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isUserLoggedIn: true,
			};
		case LOGIN_FAILURE:
		case LOGOUT:
			return {
				...state,
				isUserLoggedIn: false,
			};
		default:
			return state; // Retourne l'état initial si l'action n'est pas reconnue
	}
}
