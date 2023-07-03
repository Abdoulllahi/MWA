import { Router } from "express";
import { addUser } from "./users.controller";
const router = Router();

router.get('/');
router.post('/', addUser);
router.get('/:userId');
router.delete('/:userId');
router.put('/:userId')

export default router;