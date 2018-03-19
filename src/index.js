import { createServer } from './lib';
import app from './express.application';

//object shorthand 
createServer({ app }).then(server => {
    server.run();
});