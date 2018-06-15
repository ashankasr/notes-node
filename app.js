console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes1 = require('./notes1.js');

var user = os.userInfo();
console.log(notes1.age);
console.log(`Adding Notes - ${notes1.addNote()}`);
console.log(`Adding Result: ${notes1.add(1, 2)}`);


console.log(_.isString(true));
console.log(_.isString(''));

// fs.appendFile('notes-output.txt', `Hello ${user.username}!`, function (err) {
//     if (err) {
//         console.log(err);
//     }
// });

