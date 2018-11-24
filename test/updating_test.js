const assert = require('assert');
const MarioChar = require('../modles/mariochar');

describe('Updating records', () => {
    let char;

    beforeEach(done => {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        char.save()
            .then(() => done())
            .catch(err => console.error(err))
    });

    it('Update one record from a database', done => {
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(() => {
            MarioChar.findOne({_id: char._id}).then(data => {
                assert(data.name === 'Luigi');
                done();
            });
        })

    })

    it('Increments the weight by 1', done => {
        MarioChar.update({}, {$inc: {weight: 1}}).then(() => {
            MarioChar.findOne({name: 'Mario'}).then(data => {
                assert(data.weight === 51);
                done();
            })
        })

    })

});