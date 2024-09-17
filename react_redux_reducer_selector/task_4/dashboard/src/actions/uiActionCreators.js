import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';

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

// Créateur d'action pour la connexion réussie
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

// Créateur d'action pour l'échec de la connexion
export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

// Fonction asynchrone pour gérer la demande de connexion
export function loginRequest(email, password) {
  return (dispatch) => {
    // Dispatch action de connexion pour indiquer que le login a commencé
    dispatch(login(email, password));

    return fetch('/login-success.json', { // URL de l'API fictive
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        dispatch(loginSuccess()); // Si la requête est un succès
      })
      .catch(error => {
        dispatch(loginFailure()); // En cas d'échec de la requête
      });
  };
}
