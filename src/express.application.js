import express from 'express';
import path from 'path';
import ejs from 'ejs';

const app = express();

app.set('routeDir', path.resolve(__dirname, 'routes'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')));

export default app;