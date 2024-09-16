import { combineReducers } from 'redux';
import courseReducer from './courseReducer'; // Assurez-vous que le chemin est correct
import notificationReducer from './notificationReducer'; // Assurez-vous que le chemin est correct
import uiReducer from './uiReducer'; // Assurez-vous que le chemin est correct

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;
