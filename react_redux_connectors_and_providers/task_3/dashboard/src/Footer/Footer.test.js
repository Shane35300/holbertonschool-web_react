import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; // Importation du composant stateless
import { getFooterCopy, getFullYear } from '../utils/utils'; // Assurez-vous que ces fonctions existent

describe('<Footer />', () => {
  it('should render footer content when user is not logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);

    expect(wrapper.find('p').at(0).text()).toBe(getFooterCopy(true)); // Vérifiez que le texte du footer est correct
    expect(wrapper.find('p').at(1).text()).toBe(`Copyright ${getFullYear()} - Holberton School`); // Vérifiez le copyright
    expect(wrapper.find('a').exists()).toBe(false); // Vérifiez que le lien "Contact us" n'existe pas
  });

  it('should render contact link when user is logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);

    expect(wrapper.find('a').exists()).toBe(true); // Vérifiez que le lien "Contact us" existe
    expect(wrapper.find('a').prop('href')).toBe('/contact'); // Vérifiez que le lien pointe vers /contact
  });
});
