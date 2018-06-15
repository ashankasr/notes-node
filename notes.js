var addNote = (title, body) => {
    console.log('Note added', title, body);
};

var getAll = () => {
    console.log('Get all notes');
};

var getNote = (title) => {
    console.log('Returning note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};