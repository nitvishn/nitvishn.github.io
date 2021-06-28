export const PROJECTS = [
    {
        type: 'project',
        name: 'Pentalink',
        position: 'Creative Director, Lead Programmer, and Game Developer',
        shortdescription: "Worked with and led creative team; engineered state-system, levels, graphics, al gorithms, AI, UI/UX elements; used academic reference; 500+ downloads.",
        description: "I worked with and led Pentalink's creative team - I was the sole game programmer on this project. Its inception was the product of bored experimentation during a free lesson, and has now evolved into an epic strategic battle of minds, ubiquitously played amongst our close circle of friends during lunch breaks and bus journeys. Using multiple game design concepts such as state stacks, 2D maps, procedural level generation, and GUI design, I programmed the game from scratch in the Lua programming language using LÖVE2D as a game engine and framework. A notable problem I encountered was the detection of face cycles in planar graphs, a topic I researched deeply for the project.",
        start: new Date("September 2019"),
        end: new Date("December 2019"),
        link: "https://pentalink.github.io/"
    },
    {
        type: 'programming',
        name: 'Project Euler',
        shortdescription: "Solved 100+ problems, achieved top 1% award; researched computational number theory; developed own numerical Python library; verified OEIS archive.",
        description: "Solved over 109 problems on Project Euler, programming my own solutions and creating a Python3 library for computatational number theory algorithms. Researched topics in mathematics and computer science in the process. Made all solutions as well as the library open-source on my GitHub page - the library is named 'addmath.py', reminiscently after the IGCSE Additional Mathematics course I wrote exams for in Grade 10. I also earned the top 1% badge on the platform. Members of the website who solve more than 109 problems fall in the top 1% of problem solvers, earning the award as a badge. The answers are integer solutions to mathematics problems which require skills in programming and algorithms to solve. I also created a Discord bot that serves as a wrapper for the library for access within text channels on Discord servers.",
        start: new Date("January 2017"),
        end: null,
        link: "https://projecteuler.net/"
    },
    {
        type: 'programming',
        name: '3x3x3 Rubik\'s Cube Solver',
        shortdescription: "I built a 3x3x3 cube solver(with a terminal GUI for input) entirely from scratch in C - this was the final project for CS50, an introductory computer science course on edX. ",
        description: "",
        start: new Date("December 2016"),
    },
    {
        type: 'fun',
        name: 'ECHO (Experimental Counterfeiter of Human Occupancy)',
        shortdescription: "",
        description: (<p>
            This quarantine, I built my own computer. I had spent months researching a specific graphics processing unit that I wanted – a raytracing card with tensor cores. Sure, I wanted it to play video games at ultra-settings, to run research simulations, and to edit videos. There was, however, another crucial reason I was excited: I could now take my online class shenanigans to the next level.
            The day I got it, I launched Open Broadcasting Software and got to work. I started rendering videos of myself sitting in my chair, shifting around, revolving, staring at the ceiling, and perhaps taking a little scribble here and there. Loop it back. Render another. Then, the phrases: I'd record multiple variations of myself going "Yes, I understand", “Absolutely”, “No, I don’t think I have any doubts for now”. I recorded myself in tens of different ponderous gazes, understanding nods, and reflective head movements of clear affirmation. “That’s right; I’ll get to work on that right away”.
            Soon, I had an entire video library of all possible generic reactions and idle resting positions. Next, I programmed a script that automatically logged into my classes on time.
            I named it the Experimental Counterfeiter of Human Occupancy (or ECHO for short). With ECHO, I was finally ready to automate my presence in online class.
            I had never looked forward to an online Monday morning this much. I left ECHO running overnight and sat down at my system the next morning. I watched it login into my morning class at 7:45, greet the class entirely out of context, and proceed to simulate an unnaturally diligent Vishnu staring with focus at his desktop monitor.
            It didn’t take me long to realize, sitting in my chair with my celebratory bowl of cereal, that I was being counterproductive. Every time I was prompted to say something, I had to assist ECHO in choosing the correct responses.
            Without making novel discoveries in the science of computational intelligence, the road pretty much ended here. Yes, it worked, but it was hilariously useless. Sorry ECHO – if you’re actually sentient and you’re reading this, I’m immensely proud of you. Whether you do it well or not, I’m sure you (or a hyper-evolved version) will continue fulfilling your raison d'etre of pretending to be Vishnu for generations to follow.

        </p>),
        start: new Date("January 2016"),
        end: null,
    },
    {
        type: 'project',
        name: 'GreenWheels',
        position: 'Lead Programmer',
        shortdescription: null,
        description: "Designed a carpooling system to be used amongst members of residential communities.I solved the travelling salesman problem using a greedy greedy, and built an algorithm that optimises carpooling groups taking into account parameters such as schedule, social preferences, car size, and more.",
        start: new Date("January 2018"),
    }, {
        type: 'project',
        name: 'Can I Have Water?',
        position: 'Programmer',
        shortdescription: "Can I have water",
        description: null,
        start: new Date("January 2020"),
    },
    {
        type: 'programming',
        name: 'Connect 4 Bot',
        link: "https://connect4-nitvishn.herokuapp.com/",
        description: "An app that plays connect ",
        start: new Date("May 2018"),
    },
    {
        type: 'programming',
        name: 'Economics Graph Generator',
        shortdescription: "A bug-riddled automatic graph generator to illustrate concepts within Microeconomics, Macroeconomics, and International Economics such as the Keynesian aggregate supply curve, exchange rate markets, and diagrams for displaying the market effects of government regulations. ",
        start: new Date("June 2020"),
    },
    {
        type: 'programming',
        name: "Charged Particle Simulator",
        link: "https://nitvishn.github.io/electro/",
        description: "A simulation of physical interactions between charged particles. The simulation works relatively well in terms of the forces between the particles, but partly breaks down when they collide. Psst: if you really want to see it in action, move your mouse around and press the 'p' and 'n' buttons to spawn negative and positive particles. Have fun :)",
        start: new Date("February 2018"),
    },
    {
        type: 'fun',
        name: "Vigenere and Subtitution Cipher Cracking Tool",
        description: "A tool that helps crack vigenere and substitution ciphers quickly. ",
        link: "https://github.com/nitvishn/crypto",
        start: new Date("August 2016"),
    },
    {
        type: 'fun',
        name: "FlowerSpirals",
        link: "https://nitvishn.github.io/flowerspirals/",
        description: "A visual tool to illustrate the beautiful mathematics behind the layout of seeds in sunflowers - each dot representing a seed is drawn at a certain angle from the previous one, forming a spiral. This angle is initialised (the first textbox in the webpage) and incremented a little each frame (the second textbox in the webpage). Try putting the golden ratio into the the first box and reload with the changes! Note: please use very small numbers for the second box - a good value to end use is 0.00001.",
        start: new Date("February 2018")
    }
]