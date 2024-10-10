import { normalize, schema } from 'normalizr';
import * as notificationsData from '../notifications.json';

// Définition des schémas Normalizr
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
	author: user,
	context: message,
});

// Fonction pour normaliser les données des notifications
export const notificationsNormalizer = (data) => {
	return normalize(data, [notification]);
};

// Normalisation des données de notifications à partir du fichier JSON importé
export const normalizedData = notificationsNormalizer(notificationsData.default);

// Fonction pour obtenir toutes les notifications par utilisateur
export function getAllNotificationsByUser(userId) {
	// Récupérer toutes les notifications associées à l'utilisateur spécifié
	return normalizedData.result
		.filter((notificationId) => normalizedData.entities.notifications[notificationId].author === userId)
		.map((notificationId) => normalizedData.entities.messages[normalizedData.entities.notifications[notificationId].context]);
}
