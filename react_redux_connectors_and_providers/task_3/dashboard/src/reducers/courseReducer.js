import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map, setIn } from 'immutable';

const initialState = Map({
  courses: Map(),
});

function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedCourses = coursesNormalizer(action.data);
      return state.set('courses', Map(normalizedCourses.entities.courses).map(course => ({
        ...course,
        isSelected: false,
      })));
    case SELECT_COURSE:
      return setIn(state, ['courses', action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return setIn(state, ['courses', action.index, 'isSelected'], false);
    default:
      return state;
  }
}

export default courseReducer;
