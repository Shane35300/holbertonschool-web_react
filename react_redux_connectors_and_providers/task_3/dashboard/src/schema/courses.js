import { normalize, schema } from 'normalizr';

// Crée une entité pour les cours
export const course = new schema.Entity('courses');

// Fonction pour normaliser les données des cours
export const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};
