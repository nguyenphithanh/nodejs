import { Router } from 'express';
import * as aboutController from '../controllers/about';
import * as homeController from '../controllers/home';
import * as signController from '../controllers/sign';
const router = Router();
// home page
router.get('/', homeController.index);
// test
router.get('/test', homeController.test);
// login page
router.get('/login', homeController.getlogin);
router.post('/login', homeController.postlogin);
router.post('/sign', signController.sign);
// about
router.get('/login', homeController.getlogin);
router.post('/login', homeController.postlogin);
router.get('/about', aboutController.about);
export default router;
