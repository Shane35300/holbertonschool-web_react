import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders correctly with given title and children', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>test</p>
      </BodySection>
    );
    expect(wrapper.find('h2').text()).toBe('test');
    expect(wrapper.find('p').text()).toBe('test');
  });
});
