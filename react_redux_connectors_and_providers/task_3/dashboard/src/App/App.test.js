import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Assurez-vous que c'est le composant stateless
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('<App />', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      ui: {
        drawerOpen: false, // État initial
      },
    });
  });

  it('should render the App component correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
