import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login logIn={() => {}} />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    expect(wrapper.find('input').length).toBe(3); // 2 inputs + 1 submit button
    expect(wrapper.find('label').length).toBe(2); // 2 labels
  });

  it('the submit button is disabled by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('enables the submit button when email and password are filled', () => {
    wrapper.setState({ email: 'test@example.com', password: 'password123' });
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });

  it('should call logIn on form submit', () => {
    const logInSpy = jest.fn();
    wrapper.setProps({ logIn: logInSpy });
    wrapper.setState({ email: 'test@example.com', password: 'password123' });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(logInSpy).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});
