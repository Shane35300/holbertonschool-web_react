import React from 'react';
import { shallow } from 'enzyme'; // Utilisez shallow au lieu de mount
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Mock de console.log
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restaurer console.log après chaque test
    consoleLogSpy.mockRestore();
  });

  it('logs on mount and unmount when wrapping an HTML element', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = shallow(<WrappedComponent />); // Utilisez shallow ici

    // Vérifier que console.log est appelé à l'initialisation
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();

    // Vérifier que console.log est appelé au démontage
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs on mount and unmount when wrapping the Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />); // Utilisez shallow ici

    // Vérifier que console.log est appelé à l'initialisation
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();

    // Vérifier que console.log est appelé au démontage
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
