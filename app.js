console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yards = require('yargs');

const notes1 = require('./notes.js');

var argv = yards.argv;
//var command = process.argv[2];
var command = argv._[0];

if (command === "add") {
    notes1.addNote(argv.title, argv.body);
}
else if (command === 'list') {
    notes1.getAll();
}
else if (command === 'read') {
    notes1.getNote(argv.title);
}
else if (command === 'remove') {
    notes1.removeNote(argv.title);
}
else {
    console.log('Command does recognized');
}
