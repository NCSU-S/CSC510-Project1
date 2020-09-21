import { AuthController } from './../../controllers/auth/index';
import {Router} from 'express';

const router = Router();

router.get('/login');
router.get('/login/redirect', AuthController.redirect)
export default router;
