console.log('Starting notes1.js');

module.exports = {
    age: 30,
    addNote: () => {
        console.log('adding notes');

        return 'New Notes';
    },
    add: (x, y) => { 
        return x + y;
    }
};