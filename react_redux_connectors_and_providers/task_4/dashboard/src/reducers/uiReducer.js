import { fromJS } from 'immutable';
import {
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
	LOGIN,
	LOGOUT,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from '../actions/uiActionTypes';

// État initial du réducteur
const initialState = fromJS({
	isNotificationDrawerVisible: false,
	isUserLoggedIn: false,
	user: null, // Changer ici pour initialiser à null
});

// Fonction réducteur
export default function uiReducer(state = initialState, action) {
	switch (action.type) {
		case DISPLAY_NOTIFICATION_DRAWER:
			return state.set('isNotificationDrawerVisible', true);

		case HIDE_NOTIFICATION_DRAWER:
			return state.set('isNotificationDrawerVisible', false);

		case LOGIN: // Ajout du cas LOGIN
			return state
				.set('isUserLoggedIn', true)
				.set('user', action.user); // Définir l'utilisateur ici

		case LOGIN_SUCCESS:
			return state.set('isUserLoggedIn', true); // Vous pouvez également gérer le succès ici si nécessaire

		case LOGIN_FAILURE:
		case LOGOUT:
			return state
				.set('isUserLoggedIn', false)
				.set('user', null); // Réinitialiser l'utilisateur ici

		default:
			return state;
	}
}
