import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils, css, StyleSheet } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders correctly with a BodySection inside', () => {
    // Définir les styles comme dans le composant
    const localStyles = StyleSheet.create({
      bodySectionWithMargin: {
        marginBottom: '40px',
      },
    });

    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <BodySection title="test" />
      </BodySectionWithMarginBottom>
    );

    // Utilisez la classe CSS directement
    const className = css(localStyles.bodySectionWithMargin);

    // Vérifiez si l'élément a la classe CSS
    expect(wrapper.hasClass(className)).toBe(true);

    // Vérifiez la présence du composant BodySection
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);

    // Assurez-vous de vérifier la première instance du BodySection
    expect(bodySection.at(0).props().title).toBe('test');
  });

  it('should render correctly a BodySection component and pass the correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);
    expect(bodySection.length).toBe(1);
    expect(bodySection.prop('title')).toBe('test title');
    expect(bodySection.find('p').text()).toBe('test children node');
  });
});
