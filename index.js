// global
import express from 'express';
import path from 'path';
import morgan from 'morgan';

// router
import router from './routes';
const app = express();

app.use('/', express.static(path.join((__dirname, 'public'))));

app.use(morgan('dev'));
// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

app.use((err, req, res, next) => {
   console.error(err);
   res.status(500).send(err.message);
});

app.listen(process.env.APIPORT || 3333, () => {
    console.log('APIServer IS RUNNING, TALKING TO API SERVER ON 3333');
});

