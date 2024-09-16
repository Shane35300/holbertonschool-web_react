import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Fonction pour sélectionner un cours
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

// Fonction pour désélectionner un cours
export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}
