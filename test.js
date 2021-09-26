import assert from 'assert';
import Clockify from './app.js';
import expect from 'expect.js';

it('Clockify.Workspaces.get() Should return an array of Workspaces', (done) => {
    Clockify.SetKey('YzE4N2VlMTQtOGNiOS00YmU4LTgwYjctMWE0Njk5YjhlMDEy');
    const resolvingPromise = Clockify.Workspaces.get();
    resolvingPromise.then( (result) => {
        expect(result).to.be.an('array');
        done();
    });
});