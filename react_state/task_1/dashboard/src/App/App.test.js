import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

// Mock de l'alerte
global.alert = jest.fn();

describe('App Component', () => {
  beforeEach(() => {
    // Empêcher l'injection des styles Aphrodite pendant les tests
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    // Restaurer l'injection des styles après les tests
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.resetAllMocks(); // Réinitialiser les mocks après chaque test
    global.alert.mockRestore(); // Restaurer l'alerte à son état d'origine
  });

  // Test pour vérifier le rendu du composant
  it('renders without crashing', () => {
    shallow(<App />);
  });

  // Test pour vérifier la présence du composant Notifications
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  // Test pour vérifier la présence du composant Header
  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  // Test pour vérifier la présence du composant Login
  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  // Test pour vérifier la présence du composant Footer
  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  // Test pour vérifier le rendu du composant Login lorsque isLoggedIn est false
  it('renders Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  // Test pour vérifier le rendu du composant CourseList lorsque isLoggedIn est true
  it('renders CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  // Test pour vérifier l'appel de logOut et l'alerte lors de la combinaison Ctrl + H
  it('calls logOut and alerts "Logging you out" on Ctrl + H', () => {
    const logOutMock = jest.fn();
    shallow(<App logOut={logOutMock} />);

    // Simuler la pression des touches Ctrl + H
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(global.alert).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });

  // vérifier que l'état initial de displayDrawer est false
  it('has default state for displayDrawer set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);  // Vérifie que displayDrawer est false par défaut
  });

  // appeler handleDisplayDrawer devrait mettre displayDrawer à true
  it('handleDisplayDrawer sets displayDrawer to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();  // Appeler la méthode
    expect(wrapper.state('displayDrawer')).toBe(true);  // Vérifie que displayDrawer est maintenant true
  });

  // appeler handleHideDrawer devrait remettre displayDrawer à false
  it('handleHideDrawer sets displayDrawer to false', () => {
    const wrapper = shallow(<App />);

    // On simule d'abord l'ouverture du tiroir
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);  // displayDrawer doit être true

    // Puis on teste la fermeture du tiroir
    wrapper.instance().handleHideDrawer();  // Appeler la méthode
    expect(wrapper.state('displayDrawer')).toBe(false);  // Vérifie que displayDrawer est false
  });
});
