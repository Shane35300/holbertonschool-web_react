import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders correctly with a BodySection inside', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find('.bodySectionWithMargin').exists()).toBe(true);
    expect(wrapper.find(BodySection).exists()).toBe(true);
    expect(wrapper.find(BodySection).props().title).toBe('test');
  });
});
