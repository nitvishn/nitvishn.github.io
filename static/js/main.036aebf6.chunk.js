(this["webpackJsonpnitvishn-website"]=this["webpackJsonpnitvishn-website"]||[]).push([[0],{42:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);n(36),n(37);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),s=(n(42),n(6)),c=n(10),l=n(11),h=n(13),d=n(12),m=n(20),p=n(62),u=n(63),g=n(64),b=n(1),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={isNavOpen:!1},a.toggleNav=a.toggleNav.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return Object(b.jsx)(p.a,{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(s.b,{className:"nav-link navbar-brand",to:"/home",children:"Vishnu Nittoor"}),Object(b.jsx)(u.a,{onClick:this.toggleNav}),Object(b.jsx)(g.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)(s.b,{className:"nav-link px-3",to:"/home",children:"Home"}),Object(b.jsx)(s.b,{className:"nav-link px-3",to:"/research",children:"Research"}),Object(b.jsx)(s.b,{className:"nav-link px-3",to:"/work",children:"Work Experience"}),Object(b.jsx)(s.b,{className:"nav-link px-3",to:"/projects",children:"Projects"}),Object(b.jsx)(s.b,{className:"nav-link px-3",to:"/talks",children:"Talks/Videos"}),Object(b.jsx)(s.b,{className:"nav-link px-3",to:"/organisations",children:"Organisations"}),Object(b.jsx)(s.b,{className:"nav-link px-3",to:"/education",children:"Education"}),Object(b.jsx)(s.b,{className:"nav-link px-3",to:"/resume",children:"Resume"}),Object(b.jsx)(s.b,{className:"nav-link px-3",to:"/blog",children:"Blog"})]})})]})})}}]),n}(a.Component);var y=function(e){return Object(b.jsx)("div",{class:"footer",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"col-12"})})})})},w=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h1",{children:"Hi, I'm Vishnu."}),Object(b.jsx)("p",{children:"I'm an undergraduate student at the University of Toronto."})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("h3",{children:"What I'm doing"}),"NOT CHIX"]}),Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("h3",{children:"What I want to do"}),"CHIX"]}),Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("h3",{children:"Who I am"}),"LMAO BOLD OF YOU TO THINK i KNOW"]})]})]})}}]),n}(a.Component),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=function(e){return new Intl.DateTimeFormat("en",{year:"numeric",month:"long"}).format(e)},t=this.props.work.map((function(t){return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("h4",{children:t.position}),Object(b.jsxs)("h5",{children:[e(t.start)," ",Object(b.jsx)("span",{children:"\u2014"})," ",e(t.end)]}),Object(b.jsx)("p",{children:t.description})]})}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"text-center",children:"Work Experience"}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),t]})}}]),n}(a.Component),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=function(e){return"Present"===e?"Present":null===e||void 0===e?"":new Intl.DateTimeFormat("en",{year:"numeric",month:"long"}).format(e)},t=function(t){var n=t.link?Object(b.jsx)("h6",{children:Object(b.jsx)("a",{href:t.link,children:t.link})}):Object(b.jsx)(b.Fragment,{});return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h3",{children:"project"===t.type?t.name:""}),Object(b.jsx)("h4",{children:"project"!==t.type?t.name:""}),Object(b.jsx)("h4",{children:t.position}),Object(b.jsxs)("h5",{children:[e(t.start)," ",t.end?Object(b.jsx)("span",{children:"\u2014"}):""," ",e(t.end)]}),n,Object(b.jsx)("p",{children:t.description?t.description:t.shortdescription})]})},n=this.props.projects.filter((function(e){return"project"===e.type})).map(t),a=this.props.projects.filter((function(e){return"project"!==e.type})).map(t);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"text-center",children:"Projects"}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),n,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("h2",{className:"text-center",children:["Programming and Interesting Miscellaneous Fun ",Object(b.jsx)("span",{children:"\u2122"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),a]})}}]),n}(a.Component);var O,x,k,I=n(31),N=n.n(I),D=[],E=0,T=1,C=[],S=[],H=[{interval:1e3,timeElapsed:0,updateFunc:function(){0===E&&-1===T&&(T=1),6===E&&1===T&&(T=-1),E+=T}}];function P(e){for(var t=1;t<=6;t++){var n=e.loadImage("/assets/cayley/cayley"+t.toString()+".png");D.push(n)}}function A(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t);O=500,x=3,function(e){var t=e.windowWidth/2;C.push(t);for(;t<=e.windowWidth+O;)t+=O,C.push(t);t=e.windowWidth/2;for(;t>=-O;)t-=O,C.push(t);var n=e.windowHeight/2;S.push(n);for(;n<=e.windowHeight+O;)n+=O,S.push(n);n=e.windowHeight/2;for(;n>=-O;)n-=O,S.push(n)}(e),k={position:e.createVector(e.mouseX,e.mouseY),velocity:e.createVector(0,0)}}function W(e){e.background(255),e.imageMode(e.CENTER),e.stroke(255,0,0),e.fill(255,0,0);var t=function(e){var t={x:k.position.x,y:k.position.y},n={x:e.windowWidth/2,y:e.windowHeight/2};a=n,Math.sqrt(Math.pow(a.x,2)+Math.pow(a.y,2));var a;return{x:(t.x-n.x)/x,y:(t.y-n.y)/x}}(e);e.translate(t.x,t.y);for(var n=0;n<C.length;n++)for(var a=0;a<S.length;a++)F(e,C[n],S[a]);for(function(e){var t=.05,n=e.mouseX-k.position.x;k.position.x+=n*t;var a=e.mouseY-k.position.y;k.position.y+=a*t}(e),n=0;n<H.length;n++){var r=H[n];r.timeElapsed+=e.deltaTime,r.timeElapsed>=r.interval&&(r.timeElapsed=0,r.updateFunc())}}function F(e,t,n){if(0!==E){var a=D[E-1],r=a.height,i=a.width,o=r/O;e.image(a,t,n,i/o,r/o)}}function J(e,t){}var G=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"p5_loading",class:"loadingclass"}),Object(b.jsx)(N.a,{preload:P,setup:A,draw:W,mouseClicked:J})]})}}]),n}(a.Component),L=n(4),M=n(21),B=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(G,{}),Object(b.jsx)(j,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col"}),Object(b.jsxs)("div",{className:"col-12 col-sm-10 col-md-8",children:[Object(b.jsx)("br",{}),Object(b.jsxs)(L.d,{children:[Object(b.jsx)(L.b,{path:"/home",component:w}),Object(b.jsx)(L.b,{path:"/work",component:function(){return Object(b.jsx)(f,{work:e.props.work})}}),Object(b.jsx)(L.b,{path:"/projects",component:function(){return Object(b.jsx)(v,{projects:e.props.projects})}}),Object(b.jsx)(L.a,{to:"/home"})]})]}),Object(b.jsx)("div",{className:"col"})]})}),Object(b.jsx)(y,{})]})}}]),n}(a.Component),V=Object(L.g)(Object(M.b)((function(e){return{work:e.work,projects:e.projects}}))(B)),R=n(33),U={work:[{id:0,name:"Sigmoid Labs (now acquired by Google)",position:"Research Intern",description:"I interned at Sigmoid Labs (now acquired by Google) in the summer of 2018. Their product, whereismytrain, is a popular Android app used by tens of millions of people in India. While working there, my colleagues had an unsolved problem related to train crossing detection on their hands. \n Interested in solving it, I worked closely with the CEO, Dr Sashikumar Venkatraman and another engineer in developing an iterative algorithm of my own. I also developed an accelerated visual animation of trains\u2019 locations to aid research. After refining my algorithm multiple times, I generated data that made significant progress on a solution which was widely appreciated. I look forward to working in an intensely collaborative and creative environment like this again.",start:new Date("June 1 2018"),end:new Date("July 20 2018")}],projects:[{type:"project",name:"Pentalink",position:"Creative Director, Lead Programmer, and Game Developer",shortdescription:"Worked with and led creative team; engineered state-system, levels, graphics, al gorithms, AI, UI/UX elements; used academic reference; 500+ downloads.",description:"I worked with and led Pentalink's creative team - I was the sole game programmer on this project. Its inception was the product of bored experimentation during a free lesson, and has now evolved into an epic strategic battle of minds, ubiquitously played amongst our close circle of friends during lunch breaks and bus journeys. Using multiple game design concepts such as state stacks, 2D maps, procedural level generation, and GUI design, I programmed the game from scratch in the Lua programming language using L\xd6VE2D as a game engine and framework. A notable problem I encountered was the detection of face cycles in planar graphs, a topic I researched deeply for the project.",start:new Date("September 2019"),end:new Date("December 2019"),link:"https://pentalink.github.io/"},{type:"projects",name:"Project Euler",shortdescription:"Solved 100+ problems, achieved top 1% award; researched computational number theory; developed own numerical Python library; verified OEIS archive.",description:"Solved over 109 problems on Project Euler, programming my own solutions and creating a Python3 library for computatational number theory algorithms. Researched topics in mathematics and computer science in the process. Made all solutions as well as the library open-source on my GitHub page - the library is named 'addmath.py', reminiscently after the IGCSE Additional Mathematics course I wrote exams for in Grade 10. I also earned the top 1% badge on the platform. Members of the website who solve more than 109 problems fall in the top 1% of problem solvers, earning the award as a badge. The answers are integer solutions to mathematics problems which require skills in programming and algorithms to solve. I also created a Discord bot that serves as a wrapper for the library for access within text channels on Discord servers.",start:new Date("January 2017"),end:null,link:"https://projecteuler.net/"},{type:"fun",name:"ECHO (Experimental Counterfeiter of Human Occupancy)",shortdescription:"",description:Object(b.jsx)("p",{children:"This quarantine, I built my own computer. I had spent months researching a specific graphics processing unit that I wanted \u2013 a raytracing card with tensor cores. Sure, I wanted it to play video games at ultra-settings, to run research simulations, and to edit videos. There was, however, another crucial reason I was excited: I could now take my online class shenanigans to the next level. The day I got it, I launched Open Broadcasting Software and got to work. I started rendering videos of myself sitting in my chair, shifting around, revolving, staring at the ceiling, and perhaps taking a little scribble here and there. Loop it back. Render another. Then, the phrases: I'd record multiple variations of myself going \"Yes, I understand\", \u201cAbsolutely\u201d, \u201cNo, I don\u2019t think I have any doubts for now\u201d. I recorded myself in tens of different ponderous gazes, understanding nods, and reflective head movements of clear affirmation. \u201cThat\u2019s right; I\u2019ll get to work on that right away\u201d. Soon, I had an entire video library of all possible generic reactions and idle resting positions. Next, I programmed a script that automatically logged into my classes on time. I named it the Experimental Counterfeiter of Human Occupancy (or ECHO for short). With ECHO, I was finally ready to automate my presence in online class. I had never looked forward to an online Monday morning this much. I left ECHO running overnight and sat down at my system the next morning. I watched it login into my morning class at 7:45, greet the class entirely out of context, and proceed to simulate an unnaturally diligent Vishnu staring with focus at his desktop monitor. It didn\u2019t take me long to realize, sitting in my chair with my celebratory bowl of cereal, that I was being counterproductive. Every time I was prompted to say something, I had to assist ECHO in choosing the correct responses. Without making novel discoveries in the science of computational intelligence, the road pretty much ended here. Yes, it worked, but it was hilariously useless. Sorry ECHO \u2013 if you\u2019re actually sentient and you\u2019re reading this, I\u2019m immensely proud of you. Whether you do it well or not, I\u2019m sure you (or a hyper-evolved version) will continue fulfilling your raison d'etre of pretending to be Vishnu for generations to follow."}),start:new Date("September 2020"),end:null},{type:"project",name:"GreenWheels",position:"Lead Programmer",shortdescription:null,description:"Designed a carpooling system to be used amongst members of residential communities. I solved the travelling salesman problem using a greedy approach, and built an algorithm that optimises carpooling groups taking into account parameters such as schedule, social preferences, car size, and more.",start:new Date("January 2018")},{type:"project",name:"Can I Have Water?",position:"Programmer",shortdescription:"Can I have water",description:null,start:new Date("January 2020")},{type:"programming",name:"Connect 4 Bot",link:"https://connect4-nitvishn.herokuapp.com/",description:"I mean, it's a bot that plays connect4. Self-explanatory. This was during a really intense connect4 craze at our school - everyone was playing connect4 on paper notebooks in between and during classes. There was a very clear dominance heirarchy, and although I wasn't terrible, I wasn't at the top. This bot was. Consistently. So good luck :)",start:new Date("April 2017")},{type:"programming",name:"Economics Graph Generator",shortdescription:"A bug-riddled automatic graph generator to illustrate concepts within Microeconomics, Macroeconomics, and International Economics such as the Keynesian aggregate supply curve, exchange rate markets, and diagrams for displaying the market effects of government regulations. ",start:new Date("June 2020")},{type:"programming",name:"Charged Particle Simulator",link:"https://nitvishn.github.io/electro/",description:"A simulation of physical interactions between charged particles. The simulation works relatively well in terms of the forces between the particles, but partly breaks down when they collide. Psst: if you really want to see it in action, move your mouse around and press the 'p' and 'n' buttons to spawn negative and positive particles. Have fun :)",start:new Date("February 2018")},{type:"fun",name:"Vigenere and Subtitution Cipher Cracking Tool",description:"A tool that helps crack vigenere and substitution ciphers quickly. ",link:"https://github.com/nitvishn/crypto",start:new Date("August 2016")},{type:"fun",name:"FlowerSpirals",link:"https://nitvishn.github.io/flowerspirals/",description:"A visual tool to illustrate the beautiful mathematics behind the layout of seeds in sunflowers - each dot representing a seed is drawn at a certain angle from the previous one, forming a spiral. This angle is initialised (the first textbox in the webpage) and incremented a little each frame (the second textbox in the webpage). Try putting the golden ratio into the the first box and reload with the changes! Note: please use very small numbers for the second box - a good value to end use is 0.00001.",start:new Date("February 2018")},{type:"fun",name:"Fish Genetics",link:"https://github.com/nitvishn/genetics1",description:'When our class was doing a Genetics and Environmental Science worksheet, I strangely realised that the test was not completely fair. When we were drawing toothpicks of a particular colour from the gene pool, we were increasing the probability of the other genes to be chosen, therefore rendering the experiment not truly random. When we humans sort the toothpicks and choose "randomly", it was actually not that random, partially because of human error, and the reason I stated above. Also, there were only 24 genes in the gene pool, and we made just 4 generations from them. I decided to write some code, and run a computer simulation.\n\n        I made sure that the genes were randomly chosen, and I ran it for 2400 genes, while making 100 generations. I averaged the results over 100 trials. I generated a few figures as a result, revealing some interesting insights.\n        ',start:new Date("April 2017")},{type:"fun",name:"Optimal Roommate Allocator",link:"https://github.com/nitvishn/roommate",description:"A program that generates sets of roommates based on a preferential selection system. The algorithm used is pretty close to brute force, and I'm sure there's a way to improve it much further.",start:new Date("December 2018")},{type:"fun",name:"hangman",link:"https://github.com/nitvishn/hangman",description:"In English class, our teacher let us play Hangman to pass the time - I'm pretty sure we had earned it in some way or another. I was really bad. I wrote this. It's a very cruel way to treat the people you're playing with - a dictionary search is a loser's way to play the game. Either way, I won a lot.",start:new Date("January 2018")},{type:"fun",name:"Two Player Snake",link:"https://nitvishn.github.io/Snake2p/",description:"The Snake game, but now with two players. God, I have so many more of these, but I think this one is the most charismatic. It's very buggy - when we used to play this in my school dormitory at night, the person who was longest when the game crashed due to a bug was declared as the winner. No intentional time limit, just an unintended, unforseeen, inevitable in-game failure. WASD and arrow keys. Half your mass gets re-distributed into the board when you collide either into yourself or your opponent. ",start:new Date("March 2017")},{type:"programming",name:"Tournament Engine for JBPL",shortdescription:"Every year, the Junior Boys Premier League (JBPL) takes place in the Junior Boys International House (a school dormitory). Although it was a soccer tournament of much prestige, the data processing was extremely tedious. Each player had their own value metric determined by surprisingly complicated rules, and data logging during matches was nonexistent so sometimes a lot of this was wishy-washy guesswork. This engine introduces a format for logging the events that happen during each match and computes corresponding data for each player and team.",description:"",link:"https://github.com/nitvishn/JBPLFantasy/",start:new Date("November 2017")},{type:"programming",name:"Pascal's Triangle... but with RGB colours instead of integers?",shortdescription:"I think the title's pretty self-explanatory. It looks cool, but I want to find more things to do with this. Any ideas? Email me.",description:"",link:"https://nitvishn.github.io/pascalrgb/",start:new Date("July 2020")},{type:"programming",name:"The Ultimatum Game",shortdescription:"A terminal implementation of the Ultimatum game. Description from cs@mcgill.ca: The ultimatum game is an experimental economics game in which two parties interact anonymously and only once, so reciprocation is not an issue. The first player proposes how to divide a sum of money with the second party. If the second player rejects this division, neither gets anything. If the second accepts, the first gets her demand and the second gets the rest. I think I wrote this for the Math club while we were learning about game theory.",description:"",link:"https://github.com/nitvishn/ultimatumgame/",start:new Date("July 2020")}]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;return e},X=Object(R.a)(q,U);var Y=function(){return Object(b.jsx)(M.a,{store:X,children:Object(b.jsx)(s.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(V,{})})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(Y,{})}),document.getElementById("root")),z()}},[[60,1,2]]]);
//# sourceMappingURL=main.036aebf6.chunk.js.map