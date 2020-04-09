
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { common } from '../../utils/common';
import { logger } from '../../shared';
import { Request, Response } from 'express';
import { paramMissingError } from '../../shared';
import { ParamsDictionary } from 'express-serve-static-core';

import sequelize from '../../sequelize';


import * as repositories from '../../repositories';
/**
 * Get All Users - "GET /api/user"
 */
export const getUsers = async (req: Request, res: Response) => {
    try {
        const userRepo = new repositories.UserRepo(sequelize);
        const users = await userRepo.findAll();
        return res.status(OK).json({users});
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * Add One - "POST /api/user"
 */
export const addUser =  async (req: Request, res: Response) => {
    const userRepo = new repositories.UserRepo(sequelize);
    try {
        const user = req.body;
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError
            });
        }
        // hash password
        user.password = common.hash.generate(user.password);
        await userRepo.add(user);
        return res.status(CREATED).end();
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * Update - "PUT /api/user/:id"
 */

export const updateUser = async (req: Request, res: Response) => {
    const userRepo = new repositories.UserRepo(sequelize);

    try {
        const user = req.body;
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        const { id } = req.params as ParamsDictionary;

        await userRepo.updateById(Number(id), user);
        return res.status(OK).end();
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * Delete - "DELETE /api/user/:id"
 */

export const deleteUser = async (req: Request, res: Response) => {
    const userRepo = new repositories.UserRepo(sequelize);

    try {
        const { id } = req.params as ParamsDictionary;
        await userRepo.deleteById(Number(id));
        return res.status(OK).end();
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};
