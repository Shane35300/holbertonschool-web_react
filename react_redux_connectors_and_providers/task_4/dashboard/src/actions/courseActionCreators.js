import { bindActionCreators } from 'redux';
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

// Importer le store pour obtenir la méthode dispatch
import store from '../store'; // Assurez-vous d'importer correctement votre store
const { dispatch } = store;

// Créer et exporter les actions liées
export const boundCourseActions = bindActionCreators(
  {
    selectCourse,
    unSelectCourse
  },
  dispatch
);
