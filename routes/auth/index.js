import express from 'express';
import * as authCtrl from './auth.ctrl';

const auth = express.Router();

auth.post('/login', authCtrl.login);
auth.post('/createUser', authCtrl.createUser);
auth.get('/findUser', authCtrl.findUser);

export default auth;
