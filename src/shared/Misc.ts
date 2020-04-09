import { logger } from './Logger';

export const paramMissingError = 'One or more of the required parameters was missing.';

export const pErr = (err: Error) => {
    if (err) {
        logger.error(err);
    }
};

export const getRandomInt = () => {
    // tslint:disable-next-line: no-magic-numbers
    return Math.floor(Math.random() * 1_000_000_000_000);
};
