import request from 'supertest';
import chai from 'chai';
import app from '../app';

const expect = chai.expect;
const server = app.listen();

after(() => {
    server.close();
});


describe('GET version', () => {
    it('Print Version', async () => {
        let response = request.agent(server)
            .get('/version')
        response.expect(200)
        response.end((err, res) => {
            expect(err).to.be.null;
            console.log(res.body);
        });
    });
});
