import { Router } from 'express';
import * as homeController from '../controllers/home';
const router = Router();
// login page
router.use(homeController.logindifferentpage);
export default router;
