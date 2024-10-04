import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedApp, { mapStateToProps } from './App';
import { fromJS, Map } from 'immutable';

// Création d'un mock store
const mockStore = configureStore([]);

describe('App Component', () => {
  let store;

  beforeEach(() => {
    // Configuration d'un store initial pour chaque test
    store = mockStore(fromJS({
        isUserLoggedIn: false,
        isNotificationDrawerVisible: false,
        user: {},
      }),
    );
  });

  it('should update state on login', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    const instance = wrapper.find('App').instance();
    instance.logIn('test@example.com', 'password');
    expect(instance.state.user).toEqual({
      email: 'test@example.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('should update state on logout', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    const instance = wrapper.find('App').instance();
    instance.logIn('test@example.com', 'password');
    instance.logOut();
    expect(instance.state.user).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });

  it('should update notifications state when markNotificationAsRead is called', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    const instance = wrapper.find('App').instance();

    // Initial notifications
    expect(instance.state.listNotifications.length).toBe(3);

    // Mark notification with id 1 as read
    instance.markNotificationAsRead(1);
    expect(instance.state.listNotifications.length).toBe(2);
    expect(instance.state.listNotifications.some(notification => notification.id === 1)).toBe(false);
  });
});

describe('mapStateToProps', () => {
  it('should return the right isLoggedIn value from state', () => {
    // Créez un état à partir de la structure Immutable
    const state = fromJS({isUserLoggedIn: true});

    const expectedProps = {
      isLoggedIn: true,
    };

    // Ajoutez ce log pour voir la sortie de mapStateToProps
    const result = mapStateToProps(state);
    console.log('mapStateToProps result:', result);  // Affiche le résultat de mapStateToProps

    expect(result).toEqual(expectedProps);
  });
});
