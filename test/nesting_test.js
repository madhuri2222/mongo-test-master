const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../modles/author');

describe('Nesting records', () => {

    beforeEach(done => {
        mongoose.connection.collections.authors.drop(() => done());
    });

    it('Create an author with sub-documents', done => {
        let ash = new Author({
            name: 'Ashish Kumar',
            books: [{title: 'How to be a serial killer', pages: 400}]
        });

        ash.save()
            .then(() => {
                return Author.findOne({name: 'Ashish Kumar'})
            })
            .then(data => {
                assert(data.books.length === 1);
                done();
            })
    })

    it('Add a book to an author', done => {
        let ash = new Author({
            name: 'Ashish Kumar',
            books: [{title: 'How to be a serial killer', pages: 400}]
        });

        ash.save()
            .then(() => {
                return Author.findOne({name: 'Ashish Kumar'})
            })
            .then(data => {
                data.books.push({title: 'How not to be an retard', pages: 500});
                return data.save();
            })
            .then(() => {
                return Author.findOne({name: 'Ashish Kumar'})
            })
            .then(data => {
                assert(data.books.length === 2);
                done();
            })
            .catch(err => console.error(err))
    })

});