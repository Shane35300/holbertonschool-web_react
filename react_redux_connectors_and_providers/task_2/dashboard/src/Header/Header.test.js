import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'; // Importation du composant stateless

describe('<Header />', () => {
  const logoutMock = jest.fn(); // Création d'une fonction mock pour logout

  it('should render welcome message when user is logged in', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: 'test@example.com' }} logout={logoutMock} />);

    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
  });

  it('should not render logout section when user is logged out', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false, email: null }} logout={logoutMock} />);

    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });
});
