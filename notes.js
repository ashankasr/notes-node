const fs = require('fs');

var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var fetchAll = () => {

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

var addNote = (title, body) => {

    var notes = fetchAll();

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
    const notes = fetchAll();
    console.log(`Printing ${notes.length} note(s).`);

    notes.forEach(note => {
        logNote(note);
    });

};

var getNote = (title) => {

    var note = null;

    const notes = fetchAll();

    const filteredNotes = notes.filter(r => r.title.toLowerCase() === title.toLowerCase())

    if (filteredNotes.length > 0) {
        note = filteredNotes[0];
    }

    return note;
};

var removeNote = (title) => {
    var notes = fetchAll();
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