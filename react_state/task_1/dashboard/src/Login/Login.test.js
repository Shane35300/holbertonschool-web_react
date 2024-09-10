import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

describe('Login Component', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Login />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input tags and 2 label tags', () => {
    expect(wrapper.find('input').length).toBe(3); // Le 3ème input est le submit
    expect(wrapper.find('label').length).toBe(2);
  });

  it('the submit button is disabled by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('enables the submit button when email and password are filled', () => {
    const emailInput = wrapper.find('input#email');
    const passwordInput = wrapper.find('input#password');

    // Simuler les changements dans les champs de saisie
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});
