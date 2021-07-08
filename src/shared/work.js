const WORK = [
    {
        name: 'Sigmoid Labs (now acquired by Google)',
        position: 'Research Internship',
        description: "I interned at Sigmoid Labs (now acquired by Google) in the summer of 2018. Their product, whereismytrain, is a popular Android app used by tens of millions of people in India. While working there, my colleagues had an unsolved problem related to train crossing detection on their hands. \n Interested in solving it, I worked closely with the CEO, Dr Sashikumar Venkatraman and another engineer in developing an iterative algorithm of my own. I also developed an accelerated visual animation of trains’ locations to aid research. After refining my algorithm multiple times, I generated data that made significant progress on a solution which was widely appreciated. I look forward to working in an intensely collaborative and creative environment like this again.",
        start: "June 1 2018",
        end: "July 20 2018"
    }
]

let jsonFile = require('jsonfile');
jsonFile.writeFile('work.json', JSON.stringify(WORK));