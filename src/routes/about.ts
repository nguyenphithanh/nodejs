import { Router } from 'express';
import * as aboutController from '../controllers/about';
import * as homeController from '../controllers/home';

const router = Router();
router.get('/about', aboutController.about);
// login page
router.get('/login', homeController.getlogin);
router.post('/login', homeController.postlogin);
export default router;
