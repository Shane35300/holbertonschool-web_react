import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// État initial : un tableau vide
const initialState = [];

// Réducteur pour gérer les cours
export default function courseReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			// Ajout du flag isSelected à chaque cours
			return action.data.map(course => ({
				...course,
				isSelected: false,
			}));

		case SELECT_COURSE:
			// Mise à jour du cours sélectionné
			return state.map(course =>
				course.id === action.index
					? { ...course, isSelected: true }
					: course
			);

		case UNSELECT_COURSE:
			// Mise à jour du cours dé-sélectionné
			return state.map(course =>
				course.id === action.index
					? { ...course, isSelected: false }
					: course
			);

		default:
			return state;
	}
}
