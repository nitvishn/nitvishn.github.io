// import { WORK } from 'work';
// import { PROJECTS } from 'projects';
// import { ORGANISATIONS } from 'organisations';
// import { COURSES, SPECIALISATIONS } from 'courses';
import { RESEARCH } from 'research';

let jsonFile = require('jsonfile');
jsonFile.writeFile('research.json', JSON.stringify(RESEARCH));