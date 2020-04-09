import { NextFunction, Request, Response, response } from 'express';
import sequelize from '../sequelize';

import * as repositories from '../repositories';

export const postlogin = async (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username;
    const password = req.body.password;
    try{
       const userRepo = new repositories.UserRepo(sequelize);
       if (await userRepo.verifyAccount(username, password)){
        // save session
        (<Express.Session>req.session).username = username;
        (<Express.Session>req.session).loginedin = true;
        res.redirect('/');
        res.locals.username = 'Username';
        next();
       } else {
         // error account
       }
    } catch (error) {
      throw error;
      }
  };
export const sign = async(req: Request, res: Response, next: NextFunction) => {
      (<Express.Session>req.session).loginedin = undefined;
      (<Express.Session>req.session).username = undefined;
      res.redirect('/login');
    };
export const getlogin = async(req: Request, res: Response, next: NextFunction) => {
    if ((!(<Express.Session>req.session).loginedin)) {
      res.render('pages/login');
    }
  };
export const logindifferentpage = async(req: Request, res: Response, next: NextFunction)=>{
    if ((<Express.Session>req.session).username === undefined) {
      res.redirect('/login');
    } else { next();
    }
  };
export const userMiddlewares = async (req: Request, res: Response, next: NextFunction) => {
    res.locals.username = (<Express.Session>req.session).username;
    next();
  };
