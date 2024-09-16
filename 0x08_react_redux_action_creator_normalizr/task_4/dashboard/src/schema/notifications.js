import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
	author: user,
	context: message,
});

export function getAllNotificationsByUser(userId) {
	// Récupérer toutes les notifications associées à l'utilisateur
	return normalizedData.result
		.filter(notificationId => normalizedData.entities.notifications[notificationId].author === userId)
		.map(notificationId => normalizedData.entities.messages[normalizedData.entities.notifications[notificationId].context]);
}
export const normalizedData = normalize(notificationsData.default, [notification]);
