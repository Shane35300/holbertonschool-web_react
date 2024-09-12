import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';
import { getFullYear, getFooterCopy } from '../utils/utils';

describe('Footer Component', () => {
  it('renders the text "Copyright"', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    const expectedText = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;
    expect(wrapper.text()).toContain(expectedText);
  });

  it('renders the "Contact us" link when user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').text()).toBe('Contact us');
  });

  it('does not render the "Contact us" link when user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });
});
