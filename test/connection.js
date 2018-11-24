const mongoose = require('mongoose');

before((done) => {
    mongoose.connect('mongodb://localhost/database');

    mongoose.connection
        .once('open', () => {
            console.log('DB\'s connected niggas!!!');
            done();
        })
        .on('error', err => console.log('something\'s wrong', err));
});

beforeEach(done => {
    mongoose.connection.collections.mariochars.drop();
    mongoose.connection.collections.authors.drop();
    done();
});
