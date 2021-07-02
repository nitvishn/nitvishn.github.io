import { WORK } from '../shared/work';
import { PROJECTS } from '../shared/projects';
import { ORGANISATIONS } from '../shared/organisations';
import { COURSES, SPECIALISATIONS } from '../shared/courses';

export const initialState = {
    work: WORK,
    projects: PROJECTS,
    organisations: ORGANISATIONS,
    courses: COURSES,
    specs: SPECIALISATIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
}