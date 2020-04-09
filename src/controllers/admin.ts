import { NextFunction, Request, Response, response } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { common } from '../utils/common';
import { logger } from '../shared';
import { paramMissingError } from '../shared';

import sequelize from '../sequelize';


import * as repositories from '../repositories';

export const listuser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if ((req.session as Express.Session).username === undefined) {
            res.redirect('/login');
          } else {
        res.locals.username = (req.session as Express.Session).username;
        const userRepo = new repositories.UserRepo(sequelize);
        const uservalues = await userRepo.findAll();
        res.render('pages/listing', {
            users: uservalues
        });
          }
    } catch (error) {
      throw error;
    }
};
export const getadduserpage = async (req: Request, res: Response, next: NextFunction) => {
  if ((req.session as Express.Session).username === undefined) {
    res.redirect('/login');
  } else {
    res.locals.username = (req.session as Express.Session).username;
    res.render('pages/adduser',{
      isError: false
    });
    
  }
};
export const postadduserpage = async (req: Request, res: Response, next: NextFunction) => {
  res.locals.username = (req.session as Express.Session).username;
  const userRepo = new repositories.UserRepo(sequelize);
  try {
    const user = req.body;
    const beforePassword = user.password;
    //
    const MAX_LENGTH_USERNAME = 8;
    const MAX_LENGTH_PASSWORD = 8;
    let userNameErorr = '';
    let passwordError = '';
    let confirmPasswordError = '';
    let createUserError = '';
    let hasUserNameError = false;
    let hasPasswordError = false;
    let hasConfirmPasswordError = false;
    let hasCreateUserError = false;


       // hash password
    user.password = common.hash.generate(user.password);
    user.createdAt = new Date();
    user.createdBy = 'thai';
    user.updatedAt = new Date();
    user.updatedBy = 'thai';
    if (user.userName.length < MAX_LENGTH_USERNAME ) {
      hasUserNameError = true;
      userNameErorr = 'username phải lớn hơn hoặc bằng 8 kí tự';
    }
    if (beforePassword.length < MAX_LENGTH_PASSWORD ) {
      hasPasswordError = true;
      passwordError = 'username phải lớn hơn hoặc bằng 8 kí tự';
    }
    if (beforePassword !== user.password) {
      hasConfirmPasswordError = true;
      confirmPasswordError = 'Mật khẩu không trùng khớp';
    }

    if (!user) {
      hasCreateUserError = true;
      createUserError = 'user không hợp lệ';
    }
    const hasError = hasUserNameError || hasPasswordError || hasConfirmPasswordError || hasCreateUserError;
    if (hasError) {
      res.render('pages/adduser', {
        hasUserNameError : hasUserNameError,
        hasPasswordError : hasPasswordError,
        hasConfirmPasswordError : hasConfirmPasswordError,
        hasCreateUserError : hasCreateUserError,
        userNameErorr: userNameErorr,
        passwordError: passwordError,
        confirmPasswordError: confirmPasswordError,
        createUserError:createUserError
      });
    }
    else {
    delete user.confirmPassword;
    await userRepo.add(user);
         // return list user page
    const uservalues = await userRepo.findAll();
    res.render('pages/listing', {
      users: uservalues
    });
  }
} catch (err) {
    logger.error(err.message, err);
}
};
