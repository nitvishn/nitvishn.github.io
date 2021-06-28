import { WORK } from '../shared/work';
import { PROJECTS } from '../shared/projects';

export const initialState = {
    work: WORK,
    projects: PROJECTS,
};

export const Reducer = (state = initialState, action) => {
    return state;
}