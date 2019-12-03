use blit

db.users.insert({
    id: 0,
    firstName: "Karl",
    lastName: "McGuire",
    email: "karl@karlmcguire.com",
    username: "karlmcguire",
    salt: '9d34d12e3319aabfbb248dab0c2aed9a2f2782b5789f40afec50435d08a27ca4fd0d2b621eede6f57d9b459c3adff3990183a2a09b2d9fcc7b25ca449b469463',
    hash: '95d0fa8a46c4195de1ca16b309fd0dc788afe9ea047b3ad36f033e6bba465b2d45e0091f3d209e9af6272753137cc424174e9592d3656e361ed5a3761b96d283'
})

db.users.insert({
    id: 1,
    firstName: "Sarah",
    lastName: "Goldstein",
    email: "sarah@gmail.com",
    username: "sarahgoldstein",
    salt: 'c53090f5a6390638b8f14120dc371c4d49378af267afedfc6889ebf590e8115df82434ae391fefc964b0b4cba12c3fbcec0cd86bd2f7231e881828972ba42eaa',
    hash: '4738cf72f406500967554ecf81ec93210a33aa1e5466c62a864afb6800e5d0ab1ece39672178427af62f0a738d736147ddb057d88fc920a15ff05204380c8989'
})

db.users.insert({
    id: 2,
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@gmail.com",
    username: "johnsmith",
    salt: '4a1379e07282088d1e33a73e0256ccb09a169294f686d35c6d81883f6a1d6a84d16cfede021f00d6952b401717d7ac9add50b695b8dfa54672ae4b5213e507de',
    hash: '5514ee12878134fd6aefd2d172415ed82c5d5d7160ac3336cc05e0bd2a8841920c89d820ea47b1bb1b7d99f0ff2e3b55faa11779071465188ccea6c0c64fe585'
})

db.users.insert({
    id: 3,
    firstName: "Bob",
    lastName: "Stevens",
    email: "bob@gmail.com",
    username: "bobstevens",
    salt: 'ddd89df63e4736d258025eeaae9669d27b13715502b9670f386662fb3f1f5515fbf04c73ccec5858a4ccf6e27a28a2e41bd1393c531b54342597ad2cc46fcc3d',
    hash: '73e97f0a70a90583628b32c1bccb908ed34e5752ed8e9296ed57b6da4d8da74709369b162b6c682f3a1d49901077873317372fd5b5f14e6315d4ea49ba211617'
})

db.connections.insert({
    id: 0,
    name: "BSD",
    title: "Operating Systems / BSD",
    details: "Are you a developer or systems administrator looking to hang out with other professionals working with BSD on a daily basis? If so, this connection is for you! We're all hard working professionals and have keen interests in BSD and all things Unix. Feel free to stop by!",
    about: "We're a small group of around 20 guys and like discussing BSD over beer and food.",
    going: 12
})

db.connections.insert({
    id: 1,
    name: "Linux",
    title: "Operating Systems / Linux",
    details: "We're a space dedicated to giving talks about all things Linux. If you work with Linux in your job or are simply interested in the history and applications of Linux, this is the place to be.",
    about: "We're a group of 50-60 professionals.",
    going: 132
})

db.connections.insert({
    id: 2,
    name: "Mac",
    title: "Operating Systems / Mac",
    details: "We're a space dedicated to giving talks about all things Mac. If you work with Mac in your job or are simply interested in the history and applications of Mac, this is the place to be.",
    about: "We're a group of 20-50 professionals.",
    going: 74
})

db.connections.insert({
    id: 3,
    name: "Web",
    title: "Programming / Web",
    details: "At this event we will go over the basics of web programming. By the end of our 2 hour session, you should have a functioning website that you can proudly present to your friends, family, and potential employers. In today's market, a web presence is absolutely essential.",
    about: "I'm James B. Johnson and we'll be giving the talk September 18th from 3:00 - 5:00pm in the Starbucks.",
    going: 12
})

db.connections.insert({
    id: 4,
    name: "Blockchain",
    title: "Programming / Blockchain",
    details: "Blockchains are becoming more and more important in our daily lives. The industry is currently exploding, and if you want to stay ahead of the curve and prepare to work with blockchains, this connection is for you. Come and see talks given by experienced professionals.",
    about: "We're 15 industry experts trying to raise awareness.",
    going: 68
})

db.connections.insert({
    id: 5,
    name: "Systems",
    title: "Programming / Systems",
    details: "Systems programming isn't going anywhere, even if it's old. If you're interested in low level programming in languages such as C and C++, this connection is for you. You'll learn a lot by talking with our experienced programmers.",
    about: "We're 10 industry experts trying to help people learn.",
    going: 32
})

