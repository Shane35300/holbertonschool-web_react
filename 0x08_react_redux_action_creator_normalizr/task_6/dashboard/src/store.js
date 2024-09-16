import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assurez-vous que le chemin est correct

const store = configureStore({
  reducer: rootReducer,
});

export default store;
