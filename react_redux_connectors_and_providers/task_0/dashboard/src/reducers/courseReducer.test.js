import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should handle FETCH_COURSE_SUCCESS and normalize the data', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const action = { type: FETCH_COURSE_SUCCESS, data };
    const state = courseReducer(undefined, action).toJS();

    expect(state.courses).toEqual({
      1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
      2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      3: { id: 3, name: 'React', credit: 40, isSelected: false },
    });
  });

  it('should handle SELECT_COURSE and update the course', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      }
    });

    const action = { type: SELECT_COURSE, index: 2 };
    const state = courseReducer(initialState, action).toJS();

    expect(state.courses[2].isSelected).toEqual(true);
  });

  it('should handle UNSELECT_COURSE and update the course', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      }
    });

    const action = { type: UNSELECT_COURSE, index: 2 };
    const state = courseReducer(initialState, action).toJS();

    expect(state.courses[2].isSelected).toEqual(false);
  });
});
