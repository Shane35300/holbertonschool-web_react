import { Map as ImmutableMap } from 'immutable';
import { combineReducers } from 'redux-immutable';

// Importez vos reducers
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

// Root reducer
const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

// Initial state pour le rootReducer
const initialState = ImmutableMap({ // Utiliser ImmutableMap ici
  courses: ImmutableMap({ // Utiliser ImmutableMap ici
    courses: ImmutableMap(), // Utiliser ImmutableMap ici
  }),
  notifications: ImmutableMap({ // Utiliser ImmutableMap ici
    filter: 'DEFAULT',
    notifications: ImmutableMap(), // Utiliser ImmutableMap ici
  }),
  ui: ImmutableMap({ // Utiliser ImmutableMap ici
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null,
  }),
});

// Exporter le rootReducer et l'état initial
export { initialState };
export default rootReducer;
