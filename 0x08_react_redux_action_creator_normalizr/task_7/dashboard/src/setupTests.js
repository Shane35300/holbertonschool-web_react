import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';

// Mock Aphrodite
jest.mock('aphrodite', () => {
  const actualAphrodite = jest.requireActual('aphrodite');
  return {
    ...actualAphrodite,
    StyleSheet: {
      ...actualAphrodite.StyleSheet,
      create: styles => styles,
    },
    css: (...args) => args.join(' '),
    StyleSheetTestUtils: {
      suppressStyleInjection: jest.fn(),
      clearBufferAndResumeStyleInjection: jest.fn(),
    },
  };
});

configure({ adapter: new Adapter() });
