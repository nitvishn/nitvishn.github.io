import WORK from '../shared/work';
import PROJECTS from '../shared/projects';
import ORGANISATIONS from '../shared/organisations';
import { COURSES, SPECIALISATIONS } from '../shared/courses';
import RESEARCH from '../shared/research';
import TALKS from '../shared/talks';

export const initialState = {
    work: WORK,
    projects: PROJECTS,
    organisations: ORGANISATIONS,
    courses: COURSES,
    specs: SPECIALISATIONS,
    research: RESEARCH,
    talks: TALKS,
};

export const Reducer = (state = initialState, action) => {
    return state;
};