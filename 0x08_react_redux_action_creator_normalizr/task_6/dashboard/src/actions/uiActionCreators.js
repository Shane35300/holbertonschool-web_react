import { bindActionCreators } from 'redux';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

// Fonction pour se connecter
export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

// Fonction pour se déconnecter
export function logout() {
  return {
    type: LOGOUT
  };
}

// Fonction pour afficher le tiroir de notification
export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

// Fonction pour cacher le tiroir de notification
export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}

// Importer le store pour obtenir la méthode dispatch
import store from '../store'; // Assurez-vous d'importer correctement votre store
const { dispatch } = store;

// Créer et exporter les actions liées
export const boundUIActions = bindActionCreators(
  {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer
  },
  dispatch
);
