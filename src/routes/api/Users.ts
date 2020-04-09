
import { Router} from 'express';
import * as userController from '../../controllers/api/user';

// Init shared
const userRouter = Router();

// GET /api/users
userRouter.get('/', userController.getUsers);

// POST /api/users
userRouter.post('/', userController.addUser);

// PUT /api/users/:id
userRouter.put('/:id', userController.updateUser);

// DELETE /api/users/:id
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;
