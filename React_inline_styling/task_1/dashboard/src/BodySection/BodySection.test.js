import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders correctly with given title and children', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>test</p>
      </BodySection>
    );
    expect(wrapper.find('h2').text()).toBe('test');
    expect(wrapper.find('p').text()).toBe('test');
  });

  it('should render correctly the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('test title');
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});
