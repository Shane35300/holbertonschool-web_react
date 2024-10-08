import configureMockStore from 'redux-mock-store'; // Importez redux-mock-store
import thunk from 'redux-thunk'; // Importez redux-thunk pour gérer les actions asynchrones
import fetchMock from 'fetch-mock'; // Pour simuler les appels fetch
import { loginRequest } from './uiActionCreators'; // Importez vos actions
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes'; // Importez vos types d'actions

// Configurez le mockStore avec les middlewares
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async Action Creators', () => {
  afterEach(() => {
    fetchMock.restore(); // Nettoyez les mocks après chaque test
  });

  it('loginRequest should dispatch LOGIN and LOGIN_SUCCESS when API returns success', () => {
    fetchMock.post('/login-success.json', { status: 200, body: {} }); // Mockez la réponse du serveur

    const email = 'test@test.com';
    const password = 'password123';
    const expectedActions = [
      { type: LOGIN, user: { email, password } }, // Action LOGIN dispatchée
      { type: LOGIN_SUCCESS } // Action LOGIN_SUCCESS dispatchée après succès
    ];

    const store = mockStore({}); // Créez un mock store

    return store.dispatch(loginRequest(email, password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions); // Vérifiez les actions dispatchées
      });
  });

  it('loginRequest should dispatch LOGIN and LOGIN_FAILURE when API returns failure', () => {
    fetchMock.post('/login-success.json', { status: 500 }); // Simulez une erreur du serveur

    const email = 'test@test.com';
    const password = 'password123';
    const expectedActions = [
      { type: LOGIN, user: { email, password } }, // Action LOGIN dispatchée
      { type: LOGIN_FAILURE } // Action LOGIN_FAILURE dispatchée après échec
    ];

    const store = mockStore({}); // Créez un mock store

    return store.dispatch(loginRequest(email, password))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions); // Vérifiez les actions dispatchées
      });
  });
});
