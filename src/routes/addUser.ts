import { Router } from 'express';
import * as adminController from '../controllers/admin';
const router = Router();
router.get('/', adminController.getadduserpage);
router.post('/', adminController.postadduserpage);
export default router;
