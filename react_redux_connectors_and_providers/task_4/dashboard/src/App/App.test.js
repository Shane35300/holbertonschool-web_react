import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Map as ImmutableMap } from 'immutable';
import App from './App';
import { initialState } from '../reducers/rootReducer'; // Importez votre état initial

const mockStore = configureStore(); // Créez un store mock

describe('<App />', () => {
  let store;

  beforeEach(() => {
    // Créez une instance du store avec l'état initial
    store = mockStore(ImmutableMap(initialState.toJS())); // Convertir en JS pour le mock store
  });

  it('should render the App component correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Ajoutez vos assertions ici
    expect(wrapper.exists()).toBe(true);
  });
});
