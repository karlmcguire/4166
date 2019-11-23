use blit

db.users.insert({
    id: 0,
    firstName: "Karl",
    lastName: "McGuire",
    email: "karl@karlmcguire.com"
})

db.users.insert({
    id: 1,
    firstName: "Sarah",
    lastName: "Goldstein",
    email: "sarah@gmail.com"
})

db.users.insert({
    id: 2,
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@gmail.com"
})

db.users.insert({
    id: 3,
    firstName: "Bob",
    lastName: "Stevens",
    email: "bob@gmail.com"
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
