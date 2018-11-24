const assert = require('assert');
const MarioChar = require('../modles/mariochar');

describe('Saving records', () => {

    it('Saves a record to a database', (done) => {
        let char = new MarioChar({
            name: 'Mario'
        });

        char.save()
            .then(() => {
                assert(!char.isNew);
                done();
            })
            .catch(err => console.error(err))
    })
})