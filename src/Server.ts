import cookieParser from 'cookie-parser';
import express from 'express';
import { Request, Response } from 'express';
import logger from 'morgan';
import path from 'path';
import apiRouter from './routes/api';
import webRouter from './routes';
import expressEjsLayouts from 'express-ejs-layouts';

// Init express
const app = express();
//Init express-session
const session = require('express-session');
// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

/**
 * Point express to the 'views' directory. If you're using a
 * single-page-application framework like react or angular
 * which has its own development server, you might want to
 * configure this to only serve the index file while in
 * production mode.
 */
app.use(expressEjsLayouts);
app.set('views', `${__dirname}/../src/views`);
// set the view engine to ejs
app.set('view engine', 'ejs');
// using session
app.use(session({
 secret: 'secret',
 resave: true,
 saveUninitialized: true
}));
// rounting
app.use('/api', apiRouter);
app.use('/', webRouter);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Export express instance
export default app;
