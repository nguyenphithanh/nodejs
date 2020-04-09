import { NextFunction, Request, Response, response } from 'express';
export const sign = async(req: Request , res: Response, next: NextFunction) => {
    if ((<Express.Session>req.session).loginedin === true) {
    (<Express.Session>req.session).loginedin = undefined;
    (<Express.Session>req.session).username = undefined;
       // res.locals.username= (<Express.Session>req.session).username;
    }
    try {
        res.render('pages/login');
    } catch (error) {
        throw error;
    }
  };
