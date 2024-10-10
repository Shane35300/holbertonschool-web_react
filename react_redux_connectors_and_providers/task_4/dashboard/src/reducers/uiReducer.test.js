import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

// Tester l'état initial
describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null, // Changer pour null
    });
  });

  // Ajoutez un test pour l'action LOGIN
  it('should handle LOGIN by setting user and isUserLoggedIn to true', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    const action = {
      type: LOGIN,
      user: { email: 'test@example.com', password: 'password' },
    };
    const state = uiReducer(initialState, action);
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { email: 'test@example.com', password: 'password' },
    });
  });

  it('should handle LOGOUT by setting isUserLoggedIn to false', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { email: 'test@example.com', password: 'password' },
    });
    const state = uiReducer(initialState, { type: LOGOUT });
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null, // Réinitialiser à null
    });
  });
});
