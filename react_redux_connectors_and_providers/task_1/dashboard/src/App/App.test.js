import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedApp, { mapStateToProps } from './App';
import { fromJS, Map } from 'immutable';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators'; // Importer les créateurs d'actions

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
    }));
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

  it('should get displayDrawer from props', () => {
    const initialState = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: true, // Tester avec le tiroir visible
      user: {},
    });

    store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );

    const instance = wrapper.find('App').instance();
    expect(instance.props.displayDrawer).toBe(true); // Vérifier que displayDrawer est vrai
  });

  it('should call displayNotificationDrawer when handleDisplayDrawer is called', () => {
    const spy = jest.spyOn(store, 'dispatch');
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );

    // Appeler la méthode de gestion du tiroir
    wrapper.find('Notifications').prop('handleDisplayDrawer')();
    expect(spy).toHaveBeenCalledWith(displayNotificationDrawer()); // Vérifier que la bonne action est appelée
  });

  it('should call hideNotificationDrawer when handleHideDrawer is called', () => {
    const spy = jest.spyOn(store, 'dispatch');
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );

    // Appeler la méthode de gestion du tiroir
    wrapper.find('Notifications').prop('handleHideDrawer')();
    expect(spy).toHaveBeenCalledWith(hideNotificationDrawer()); // Vérifier que la bonne action est appelée
  });
});

describe('mapStateToProps', () => {
  it('should return the right isLoggedIn and displayDrawer values from state', () => {
    // Créez un état à partir de la structure Immutable
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true,
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true, // Tester displayDrawer ici
    };

    // Ajoutez ce log pour voir la sortie de mapStateToProps
    const result = mapStateToProps(state);
    console.log('mapStateToProps result:', result);  // Affiche le résultat de mapStateToProps

    expect(result).toEqual(expectedProps);
  });
});
