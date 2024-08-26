import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseList />);
  });

  it('renders CourseList component without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe('With CourseList Empty', () => {
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders the correct rows when listCourses is empty', () => {
      expect(wrapper.find(CourseListRow).length).toBe(2); // Header rows + No course available row
      expect(wrapper.find('tr').at(1).text()).toBe('No course available yet');
    });
  });

  describe('With CourseList containing elements', () => {
    beforeEach(() => {
      const courses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ];
      wrapper = shallow(<CourseList listCourses={courses} />);
    });

    it('renders the correct rows when listCourses is provided', () => {
      expect(wrapper.find(CourseListRow).length).toBe(4); // Header rows + 3 course rows
      expect(wrapper.find('tr').at(1).text()).toContain('ES6');
      expect(wrapper.find('tr').at(1).text()).toContain('60');
      expect(wrapper.find('tr').at(2).text()).toContain('Webpack');
      expect(wrapper.find('tr').at(2).text()).toContain('20');
      expect(wrapper.find('tr').at(3).text()).toContain('React');
      expect(wrapper.find('tr').at(3).text()).toContain('40');
    });
  });
});
