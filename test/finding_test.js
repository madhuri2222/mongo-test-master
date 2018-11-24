const assert = require('assert');
const MarioChar = require('../modles/mariochar');

describe('Finding records', () => {
    let char;

    beforeEach(done => {
        char = new MarioChar({
            name: 'Mario'
        });

        char.save()
            .then(() => done())
            .catch(err => console.error(err))
    });

    it('Finds one record from a database', done => {
        MarioChar.findOne({name: 'Mario'}).then(data => {
            assert(data.name === 'Mario');
            done();
        })

    })

    it('Finds one record by ID from a database', done => {
        MarioChar.findOne({_id: char._id})
            .then(data => {
            assert(data._id.toString() === char._id.toString());
            done();
        })
            .catch(err => console.error(err))

    })
});