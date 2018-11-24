const assert = require('assert');
const MarioChar = require('../modles/mariochar');

describe('Deleting records', () => {

    beforeEach(done => {
        let char = new MarioChar({
            name: 'Mario'
        });

        char.save()
            .then(() => done())
            .catch(err => console.error(err))
    });

    it('Finds one record from a database', done => {
        MarioChar.findOneAndRemove({name: 'Mario'}).then(data => {
            MarioChar.findOne({name: 'Mario'}).then(data => {
                assert(!data);
                done();
            });
        })

    })

});