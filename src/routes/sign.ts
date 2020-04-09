import { Router } from 'express';
import * as homeController from '../controllers/home';
import * as signController from '../controllers/sign';

const router = Router();
router.get('/sign', signController.sign);
// login page
router.get('/login', homeController.getlogin);
router.post('/login', homeController.postlogin);
export default router;
