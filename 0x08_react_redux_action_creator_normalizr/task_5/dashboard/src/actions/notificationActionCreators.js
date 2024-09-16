import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

// Fonction pour marquer une notification comme lue
export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

// Fonction pour définir le filtre de notification
export function setNotificationFilter(filter) {
  // Assurez-vous que le filtre est une valeur valide définie dans NotificationTypeFilters
  if (!Object.values(NotificationTypeFilters).includes(filter)) {
    throw new Error('Invalid filter type');
  }

  return {
    type: SET_TYPE_FILTER,
    filter
  };
}
