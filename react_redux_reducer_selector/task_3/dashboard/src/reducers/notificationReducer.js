import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';

const initialState = {
	notifications: [],
	filter: NotificationTypeFilters.DEFAULT,
};

export default function notificationReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			// Marquer toutes les notifications comme non lues (isRead: false)
			return {
				...state,
				notifications: action.data.map(notification => ({
					...notification,
					isRead: false
				})),
			};

		case MARK_AS_READ:
			// Marquer la notification avec l'index donné comme lue
			return {
				...state,
				notifications: state.notifications.map(notification =>
					notification.id === action.index
						? { ...notification, isRead: true }
						: notification
				),
			};

		case SET_TYPE_FILTER:
			// Changer le filtre de notification
			return {
				...state,
				filter: action.filter,
			};

		default:
			return state;
	}
}
