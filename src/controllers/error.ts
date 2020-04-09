import { NextFunction, Request, Response } from 'express';

export const error = async (req: Request, res: Response, _: NextFunction) => {
    const numberErorr = 404;
    res.status(numberErorr).render('pages/error404.ejs');
};
