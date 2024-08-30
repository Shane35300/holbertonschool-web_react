import React from 'react';
import { mount } from 'enzyme';
import CourseList from './CourseList';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('');
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

describe('CourseList Component', () => {
  let wrapper;

  it('renders CourseList component without crashing', () => {
    wrapper = mount(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('With CourseList Empty', () => {
    beforeEach(() => {
      wrapper = mount(<CourseList listCourses={[]} />);
    });

    it('renders the correct rows when listCourses is empty', () => {
      expect(wrapper.find('tr').length).toBe(3);
      expect(wrapper.find('tr').at(2).text()).toBe('No course available yet');
    });
  });

  describe('With CourseList containing elements', () => {
    beforeEach(() => {
      const courses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ];
      wrapper = mount(<CourseList listCourses={courses} />);
    });

    it('renders the correct rows when listCourses is provided', () => {
      expect(wrapper.find('tr').length).toBe(5);
      expect(wrapper.find('tr').at(2).text()).toContain('ES6');
      expect(wrapper.find('tr').at(3).text()).toContain('Webpack');
      expect(wrapper.find('tr').at(4).text()).toContain('React');
    });
  });
});
