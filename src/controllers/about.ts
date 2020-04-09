import { NextFunction, Request, Response} from 'express';
export const about = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if ((req.session as Express.Session).username === undefined) {
            res.redirect('/login');
          } else {
        res.locals.username = (req.session as Express.Session).username;
        res.render('pages/about');
          }
    } catch (error) {
      throw error;
    }
};
