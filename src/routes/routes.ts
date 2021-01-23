import Router from 'express';
import { getCoronaStats } from '../controllers/controller';

const router = Router();

router.get('/api/corona', getCoronaStats);

export default router;
