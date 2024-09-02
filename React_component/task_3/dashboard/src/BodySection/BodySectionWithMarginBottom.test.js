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

  it('should render correctly a BodySection component and pass the correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Vérifier que le composant BodySection est bien rendu
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.length).toBe(1);

    // Vérifier que les props sont correctement passées
    expect(bodySection.prop('title')).toBe('test title');

    // Vérifier que les enfants sont correctement rendus
    expect(bodySection.find('p').text()).toBe('test children node');

    // Vérifier que la classe CSS est bien appliquée
    expect(wrapper.hasClass('bodySectionWithMargin')).toBe(true);
  });
});
