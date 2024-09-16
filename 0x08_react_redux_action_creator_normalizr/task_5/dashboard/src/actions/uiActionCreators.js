import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

// Fonction pour gérer le login
export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

// Fonction pour gérer le logout
export function logout() {
  return {
    type: LOGOUT
  };
}

// Fonction pour afficher le panneau de notifications
export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

// Fonction pour cacher le panneau de notifications
export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}
