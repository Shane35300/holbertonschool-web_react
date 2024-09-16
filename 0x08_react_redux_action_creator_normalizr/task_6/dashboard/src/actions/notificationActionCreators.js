import { bindActionCreators } from 'redux';
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
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}

// Importer le store pour obtenir la méthode dispatch
import store from '../store'; // Assurez-vous d'importer correctement votre store
const { dispatch } = store;

// Créer et exporter les actions liées
export const boundNotificationActions = bindActionCreators(
  {
    markAsRead,
    setNotificationFilter
  },
  dispatch
);
