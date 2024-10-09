import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiReducer'; // Assurez-vous que ce réducteur existe

const store = configureStore({
  reducer: {
    ui: uiReducer, // Remplacez ou ajoutez d'autres réducteurs si nécessaire
  },
});

export default store;
