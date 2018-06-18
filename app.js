console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yards = require('yargs');

const notes = require('./notes.js');

var argv = yards
    .command('add', 'Add new note', {
        title: {
            describe: "Title of note",
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of the note',
            demand: true,
            alias: 'b'
        }
    })
    .command('add', 'Add new note', {
        title: {
            describe: "Title of note",
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of the note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('remove', 'Remove note', {
        title: {
            describe: "Title of note to be removed",
            demand: true,
            alias: 't'
        }
    })
    .command('read', 'Get a single note', {
        title: {
            describe: "Title of note to be retrieved",
            demand: true,
            alias: 't'
        }
    })

    .help()
    .argv;

var command = argv._[0];

if (command === 'add') {
    var title = String(argv.title);
    var body = String(argv.body);

    notes.addNote(title, body);
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
    var title = String(argv.title);
    var note = notes.getNote(title);

    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }

}
else if (command === 'remove') {
    var title = String(argv.title);
    notes.removeNote(title);
}
else {
    console.log('Command does recognized');
}
