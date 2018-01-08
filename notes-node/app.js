console.log("Starting app.");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Banana'));
var filteredArray = _.uniq(['Banana','Banana',1,1,2,3,4]);
console.log(filteredArray);
// var user = os.userInfo();

// fs.appendFileSync('greetings.txt',`\nHello ${user.username}! You are ${notes.age}! Old as fuck!!!`,)
