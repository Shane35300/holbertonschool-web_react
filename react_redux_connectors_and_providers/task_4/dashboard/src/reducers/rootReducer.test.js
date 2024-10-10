import { Map } from 'immutable';
import rootReducer, { initialState } from './rootReducer'; // Assurez-vous d'importer initialState

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const result = rootReducer(undefined, {});


    // Vérifie si l'état du rootReducer est bien celui attendu
    expect(result).toEqual(initialState);
  });
});

