console.log("Starting app.");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log('Result: ',notes.add(2,-5));

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt',`\nHello ${user.username}! You are ${notes.age}! Old as fuck!!!`,)
