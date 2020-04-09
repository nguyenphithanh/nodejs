import { Router } from 'express';
import aboutRouter from './about';
import addUserRouter from './addUser';
import adminRouter from './admin';
import errorRouter from './error';
import homeRouter from './home';
import signRouter from './sign';

// Init router and path
const router = Router();
// home router
router.use('/', homeRouter);
// sign router
router.use('/sign', signRouter);
// about router
router.use('/about', aboutRouter);
// admin router
router.use('/admin', adminRouter);
// add user
router.use( '/adduser', addUserRouter);
// error
router.use(errorRouter);

// Export the base-router
export default router;
