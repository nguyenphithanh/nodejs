import { NextFunction, Request, Response, response } from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import session from 'express-session';
import sequelize from '../sequelize';

import * as repositories from '../repositories';
export const userMiddlewares = async (req: Request, res: Response, next: NextFunction) => {
  res.locals.username = (<Express.Session>req.session).username;
  next();
};
export const logindifferentpage = async (req: Request, res: Response, next: NextFunction)=>{
  if ((<Express.Session>req.session).username === undefined) {
    res.redirect('/login');
  } else {
    next();
  }
};

export const index = async (req: Request, res: Response, next: NextFunction) => {
  res.locals.username = (<Express.Session>req.session).username;
  res.render('pages/index.ejs');
};
export const getlogin = async(req: Request, res: Response, next: NextFunction) => {
  if ((!(<Express.Session>req.session).loginedin)) {
    res.render('pages/login');
  } else {
    next();
  }
};

export const test = async (req: Request, res: Response, _: NextFunction) => {
  res.render('pages/test', {
    data: req.session
  });
};
export const postlogin = async (req: Request, res: Response, next: NextFunction) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
     const userRepo = new repositories.UserRepo(sequelize);
     if(await userRepo.verifyAccount(username, password)) {
      // save session
      (<Express.Session>req.session).username = username;
      (<Express.Session>req.session).loginedin = true;
      res.locals.username = 'Username';
      res.redirect('/');
     } else {
       res.redirect('/login');
      }} catch(error) {
        throw error;
    }
};
