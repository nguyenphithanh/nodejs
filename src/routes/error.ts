import { Router } from 'express';
import * as errorController from '../controllers/error';
const router = Router();
router.use(errorController.error);
export default router;
