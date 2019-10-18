var connections = new Array()

const newConnection = (name, title, details, about, going) => {
  return {
    id: connections.length,
    name: name,
    title: title,
    details: details.trim(),
    about: about,
    going: going
  }
}

connections.push(newConnection(
  `BSD`,
  `Operating Systems / BSD`,
  `Are you a developer or systems administrator looking to hang out with
   other professionals working with BSD on a daily basis? If so, this
   connection is for you! We're all hard working professionals and have 
   keen interests in BSD and all things Unix. Feel free to stop by!`,
  `We're a small group of around 20 guys and like discussing BSD over
   beer and food.`,
  12
))

connections.push(newConnection(
  `Linux`,
  `Operating Systems / Linux`,
  `We're a space dedicated to giving talks about all things Linux. If you
   work with Linux in your job or are simply interested in the history and
   applications of Linux, this is the place to be.`,
  `We're a group of 50-60 professionals.`,
  132
))

connections.push(newConnection(
  `Mac`,
  `Operating Systems / Mac`,
  `We're a space dedicated to giving talks about all things Mac. If you
   work with Mac in your job or are simply interested in the history and
   applications of Mac, this is the place to be.`,
  `We're a group of 20-50 professionals.`,
  74
))

connections.push(newConnection(
  `Web`,
  `Programming / Web`,
  `At this event we will go over the basics of web programming. By the end 
   of our 2 hour session, you should have a functioning website that you
   can proudly present to your friends, family, and potential employers. In
   today's market, a web presence is absolutely essential.`, 
  `I'm James B. Johnson and we'll be giving the talk September 18th from
   3:00 - 5:00pm in the Starbucks.`,
  12
))

connections.push(newConnection(
  `Blockchain`,
  `Programming / Blockchain`,
  `Blockchains are becoming more and more important in our daily lives. The
   industry is currently exploding, and if you want to stay ahead of the curve
   and prepare to work with blockchains, this connection is for you. Come and
   see talks given by experienced professionals.`, 
  `We're 15 industry experts trying to raise awareness.`,
  68
))

connections.push(newConnection(
  `Systems`,
  `Programming / Systems`,
  `Systems programming isn't going anywhere, even if it's old. If you're
  interested in low level programming in languages such as C and C++, this
  connection is for you. You'll learn a lot by talking with our experienced
  programmers.`, 
  `We're 10 industry experts trying to help people learn.`,
  32
))

module.exports.addConnection = (name, title, details, about, going) => {
  connections.push(newConnection(name, title, details, about, going))
}

module.exports.getConnections = () => {
  // return a copy of connections array
  return [...connections]
}

module.exports.getConnection = (id) => {
  if (id > connections.length - 1) {
    // connection doesn't exist
    return
  }
  return connections[id]
}
