const fs = require('fs');

var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {

    var notes = getAll();

    note = {
        title,
        body
    }

    var duplicateNotes = notes.filter(r => r.title.toLowerCase() === title.toLowerCase());

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);

        return note;
    }
};

var getAll = () => {

    var notes = [];
    try {
        if (fs.existsSync("notes-data.json")) {
            notes = JSON.parse(fs.readFileSync("notes-data.json"));
        }
    }
    catch {

    }

    return notes;
};

var getNote = (title) => {

    var note = null;

    const notes = getAll();

    const filteredNotes = notes.filter(r => r.title.toLowerCase() === title.toLowerCase())

    if (filteredNotes.length > 0) {
        note = filteredNotes[0];
    }

    return note;
};

var removeNote = (title) => {
    var notes = getAll();
    var filteredNotes = notes.filter(r => r.title.toLowerCase() !== title.toLowerCase());
    saveNotes(filteredNotes);
};

var logNote = (note) => {
    if (note) {
        console.log('--');

        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
};